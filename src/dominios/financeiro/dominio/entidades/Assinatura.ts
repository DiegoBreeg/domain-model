import { Dinheiro } from "../objetos-de-valor/Dinheiro";
import { Periodo } from "../objetos-de-valor/Periodo";
import { Vencimento } from "../objetos-de-valor/Vencimento";
import { Fatura } from "./Fatura";
import { Pagamento } from "./Pagamento";

type DadosParaContratar = {
    id: string;
    clienteId: string;
    gatewayId: string;
    periodo: Periodo;
    valor: Dinheiro;
};

type DadosParaRegistrarPagamento = {
    pagamentoId: string;
    faturaId: string;
    pagoEm: Date;
    valor: Dinheiro;
}

type DadosParaEmitirFatura = {
    faturaId: string;
    valor: Dinheiro;
    vencimento: Vencimento;
}

enum Status {
    ATIVA = "ATIVA",
    PENDENTE = "PENDENTE",
};

export class Assinatura {
    #id: string;
    #clienteId: string;
    #gatewayId: string;
    #faturas: Fatura[];
    #periodo: Periodo;
    #valor: Dinheiro;
    #status: Status;
    #assinadaEm: Date;
    #ativadaEm: Date | null;
    #validaAte: Date | null;

    private constructor(
        id: string,
        clienteId: string,
        gatewayId: string,
        faturas: Fatura[],
        periodo: Periodo,
        valor: Dinheiro,
        status: Status,
        assinadaEm: Date,
        ativadaEm: Date | null,
        validaAte: Date | null,
    ) {
        this.#id = id;
        this.#clienteId = clienteId;
        this.#gatewayId = gatewayId;
        this.#faturas = faturas;
        this.#periodo = periodo;
        this.#valor = valor;
        this.#status = status;
        this.#assinadaEm = assinadaEm;
        this.#ativadaEm = ativadaEm;
        this.#validaAte = validaAte;
    }

    public static contratar(dados: DadosParaContratar) {

        return new Assinatura(
            dados.id,
            dados.clienteId,
            dados.gatewayId,
            [],
            dados.periodo,
            dados.valor,
            Status.PENDENTE,
            new Date(),
            null,
            null
        );
    }

    public emitirFatura(dados: DadosParaEmitirFatura): Fatura {
        this.verificarSeJaEmitiu(dados.faturaId);

        const fatura = Fatura.emitir({
            id: dados.faturaId,
            vencimento: dados.vencimento,
            valor: dados.valor,
        });

        this.#faturas.push(fatura);
        return fatura;
    }

    public registrarPagamento(dados: DadosParaRegistrarPagamento): { fatura: Fatura, pagamento: Pagamento } {
        const fatura = this.obterFatura(dados.faturaId);

        const pagamento = fatura.registrarPagamento({
            pagamentoId: dados.pagamentoId,
            pagoEm: dados.pagoEm,
            valor: dados.valor,
        });

        if (this.estaPendente()) {
            this.ativar(dados.pagoEm);
        } else if (this.estaAtiva()) {
            this.estenderValidade();
        }

        return { fatura, pagamento };
    }

    private ativar(dataPagamento: Date): void {
        this.#ativadaEm = dataPagamento;
        this.#validaAte = this.#periodo.validoAte(dataPagamento);
        this.#status = Status.ATIVA;
    }

    private estenderValidade() {
        this.#validaAte = this.#periodo.validoAte(this.#validaAte!);
    }

    private jaEmitiuFatura(faturaId: string): boolean {
        return this.#faturas.some(f => f.obterId() === faturaId);
    }

    private verificarSeJaEmitiu(faturaId: string) {
        if (this.jaEmitiuFatura(faturaId)) {
            throw new Error("Esta fatura já foi emitida");
        }
    }

    public obterFatura(faturaId: string) {
        const fatura = this.#faturas.find(fat => fat.obterId() === faturaId);
        if (!fatura)
            throw new Error("Fatura não encontrada!");
        return fatura;
    }

    private estaPendente() {
        return this.#status === Status.PENDENTE;
    }

    private estaAtiva() {
        return this.#status === Status.ATIVA;
    }

    public validaAte() {
        return this.#validaAte;
    }

}