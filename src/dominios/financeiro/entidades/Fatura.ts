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
    private usuarioId: string;
    private gatewayId: string;
    private valor: string;
    private dataDeVencimento: Date;
    private pagoEm: Date;
    private criadoEm: Date;
    private tipoDePagamento: TipoDePagamento;

    private constructor(dados: DadosParaCriarFatura) {
        this.id = dados.id;
        this.usuarioId = dados.usuarioId;
        this.gatewayId = dados.gatewayId;
        this.valor = dados.valor;
        this.dataDeVencimento = dados.dataDeVencimento;
        this.pagoEm = dados.pagoEm;
        this.createdAt = new Date();
        this.tipoDePagamento = dados.tipoDePagamento;
    }

    public static criar(dadosDeCriacao: DadosParaCriarFatura) {
        return new Fatura(dadosDeCriacao);
    }

    public static restaurar(estado: EstadoDaFatura) {

    }

}