export type TipoDePagamento = "CREDIT_CARD" | "BOLETO" | "PIX";

type DadosParaCriarFatura = {
    id: string;
    usuarioId: string;
    gatewayId: string;
    valor: string;
    dataDeVencimento: Date;
    tipoDePagamento: TipoDePagamento;
}

type EstadoDaFatura = {
    id: string;
    useusuarioId: string;
    gatewayId: string;
    valor: string;
    dataDeVencimento: Date;
    tipoDePagamento: TipoDePagamento;
    criadoEm: Date;
    pagoEm: Date;
}

export class Fatura {
    private id: string;
    private userId: string;
    private gatewayId: string;
    private value: string;
    private dueDate: Date;
    private createdAt: Date;
    private tipoDePagamento: TipoDePagamento;

    private constructor(dados: DadosParaCriarFatura) {
        this.id = dados.id;
        this.userId = dados.usuarioId;
        this.gatewayId = dados.gatewayId;
        this.value = dados.valor;
        this.dueDate = dados.dataDeVencimento;
        this.createdAt = new Date();
        this.tipoDePagamento = dados.tipoDePagamento;
    }

    public static criar(dadosDeCriacao: DadosParaCriarFatura) {
        return new Fatura(dadosDeCriacao);
    }

    public static restaurar(estado: EstadoDaFatura) {

    }

}