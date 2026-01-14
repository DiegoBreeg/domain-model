import { Dinheiro } from "../objetos-de-valor/Dinheiro";
import { Vencimento } from "../objetos-de-valor/Vencimento";
import { Pagamento } from "./Pagamento";

enum Status {
    ABERTA = "ABERTA",
    PAGA = "PAGA",
    CANCELADA = "CANCELADA",
    VENCIDA = "VENCIDA",
}

type DadosParaEmitir = {
    id: string;
    valor: Dinheiro;
    vencimento: Vencimento;
}

type DadosParaRestaurar = {
    id: string,
    valor: Dinheiro,
    vencimento: Vencimento,
    status: Status,
    emitidaEm: Date,
}

type DadosParaRegistrarPagamento = {
    pagamentoId: string;
    pagoEm: Date;
    valor: Dinheiro;
};

export class Fatura {
    #id: string;
    #valor: Dinheiro;
    #vencimento: Vencimento;
    #status: Status;
    #emitidaEm: Date;

    private constructor(
        id: string,
        valor: Dinheiro,
        vencimento: Vencimento,
        status: Status,
        emitidaEm: Date,
    ) {
        this.#id = id;
        this.#valor = valor;
        this.#vencimento = vencimento;
        this.#status = status;
        this.#emitidaEm = emitidaEm;
    }

    public static emitir(dados: DadosParaEmitir): Fatura {
        return new Fatura(
            dados.id,
            dados.valor,
            dados.vencimento,
            Status.ABERTA,
            new Date(),
        );
    }

    public static restaurar(dados: DadosParaRestaurar): Fatura {

        return new Fatura(
            dados.id,
            dados.valor,
            dados.vencimento,
            dados.status,
            dados.emitidaEm,
        );
    }

    public registrarPagamento(dados: DadosParaRegistrarPagamento): Pagamento {
        this.verificarSeEstaAberta();
        this.verificarValor(dados.valor);

        const pagamento = Pagamento.registrar({
            id: dados.pagamentoId,
            faturaId: this.#id,
            valor: dados.valor,
            pagoEm: dados.pagoEm,
        });

        this.#status = Status.PAGA;
        return pagamento;
    }

    private verificarSeEstaAberta() {
        if (!this.estaAberta())
            throw new Error("Somente faturas abertas podem ser pagas!");
    }

    private verificarValor(dinheiro: Dinheiro) {
        if (!this.#valor.igual(dinheiro))
            throw new Error("Valor pago diferente do valor da fatura");
    }

    public cancelar(): void {
        if (this.#status !== "ABERTA")
            throw new Error("Fatura não pode ser cancelada!");
        this.#status = Status.CANCELADA;
    }

    public valor(): Dinheiro {
        return this.#valor;
    }

    public vencimento(): Vencimento {
        return this.#vencimento;
    }

    public obterId(): string | null {
        return this.#id;
    }

    public estaAberta(): Boolean { return this.#status === Status.ABERTA; }
    public estaCancelada(): Boolean { return this.#status === Status.CANCELADA; }
    public estaPaga(): Boolean { return this.#status === Status.PAGA; }

}