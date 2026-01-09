import { Dinheiro } from "../objetos-de-valor/Dinheiro";

type TipoDePagamento = "CREDIT_CARD" | "BOLETO" | "PIX";
type Estado = "ABERTA" | "PAGA" | "CANCELADA";

type DadosParaCriarFatura = {
    id: string;
    usuarioId: string;
    gatewayId: string;
    valor: Dinheiro;
    dataDeVencimento: Date;
    tipoDePagamento: TipoDePagamento;
}

type DadosParaRestaurarFatura = {
    id: string;
    usuarioId: string;
    gatewayId: string;
    valor: Dinheiro;
    dataDeVencimento: Date;
    tipoDePagamento: TipoDePagamento;
    criadoEm: Date;
    pagoEm: Date | null;
    estado: Estado;
}

export class Fatura {
    #id: string;
    #usuarioId: string;
    #gatewayId: string;
    #valor: Dinheiro;
    #dataDeVencimento: Date;
    #tipoDePagamento: TipoDePagamento;
    #criadoEm: Date;
    #pagoEm: Date | null;
    #estado: Estado;

    private constructor(
        id: string,
        usuarioId: string,
        gatewayId: string,
        valor: Dinheiro,
        dataDeVencimento: Date,
        tipoDePagamento: TipoDePagamento,
        criadoEm: Date,
        pagoEm: Date | null,
        estado: Estado,
    ) {
        this.#id = id;
        this.#usuarioId = usuarioId;
        this.#gatewayId = gatewayId;
        this.#valor = valor;
        this.#dataDeVencimento = dataDeVencimento;
        this.#tipoDePagamento = tipoDePagamento;
        this.#criadoEm = criadoEm;
        this.#pagoEm = pagoEm;
        this.#estado = estado;
    }

    public static criar(dados: DadosParaCriarFatura) {
        const dataAtual = new Date();

        if (dados.dataDeVencimento < dataAtual)
            throw new Error("Data de vencimento não pode ser menor do a data atual!");

        return new Fatura(
            dados.id,
            dados.usuarioId,
            dados.gatewayId,
            dados.valor,
            dados.dataDeVencimento,
            dados.tipoDePagamento,
            dataAtual,
            null,
            "ABERTA"
        );
    }

    public static restaurar(dados: DadosParaRestaurarFatura) {

        return new Fatura(
            dados.id,
            dados.usuarioId,
            dados.gatewayId,
            dados.valor,
            dados.dataDeVencimento,
            dados.tipoDePagamento,
            dados.criadoEm,
            dados.pagoEm,
            dados.estado,
        );
    }

    public marcarComoPaga(dataDoPagamento: Date) {
        if (this.#estado !== "ABERTA")
            throw new Error("Somente faturas abertas podem ser pagas!");

        this.#estado = "PAGA";
        this.#pagoEm = dataDoPagamento;
    }

    public marcarComoCancelada() {
        if (this.#estado !== "ABERTA")
            throw new Error("Fatura não pode ser cancelada!")

        this.#estado = "CANCELADA";
    }

    public consultarValorEmMoeda() {
        return this.#valor.paraMoeda();
    }

    public consultarValorEmCentavos() {
        return this.#valor.obterValorEmCentavos();
    }

    public consultarValorEmReais() {
        return this.#valor.obterValorEmReais();
    }

    public estaAberta() { return this.#estado === "ABERTA"; }
    public estaCancelada() { return this.#estado === "CANCELADA"; }
    public estaPaga() { return this.#estado === "PAGA"; }

}