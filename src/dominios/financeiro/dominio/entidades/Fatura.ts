type TipoDePagamento = "CREDIT_CARD" | "BOLETO" | "PIX";
type Estado = "ABERTA" | "PAGA" | "CANCELADA"

type DadosParaCriarFatura = {
    id: string;
    usuarioId: string;
    gatewayId: string;
    valor: string;
    dataDeVencimento: Date;
    tipoDePagamento: TipoDePagamento;
}

type DadosParaRestaurarFatura = {
    id: string;
    usuarioId: string;
    gatewayId: string;
    valor: string;
    dataDeVencimento: Date;
    tipoDePagamento: TipoDePagamento;
    criadoEm: Date;
    pagoEm: Date | null;
    estado: Estado;
}

export class Fatura {

    private constructor(
        private id: string,
        private usuarioId: string,
        private gatewayId: string,
        private valor: string,
        private dataDeVencimento: Date,
        private tipoDePagamento: TipoDePagamento,
        private criadoEm: Date,
        private pagoEm: Date | null,
        private estado: Estado,
    ) {

    }

    public static criar(dados: DadosParaCriarFatura) {
        const dataAtual = new Date();

        if(dados.dataDeVencimento < dataAtual)
            throw new Error("Data de vencimento não pode ser menor do que agora!");

        if(dados.valor < 0) {
            
        }


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

    public static restaurar(estado: DadosParaRestaurarFatura) {

        return new Fatura(
            estado.id,
            estado.usuarioId,
            estado.gatewayId,
            estado.valor,
            estado.dataDeVencimento,
            estado.tipoDePagamento,
            estado.criadoEm,
            estado.pagoEm,
            estado.estado,
        );
    }

    public marcarComoPaga() {
        if(this.estado !== "ABERTA")
            throw new Error("Somente faturas abertas podem ser pagas!");

        this.estado = "PAGA";
    }

    public marcarComoCancelada() {
        if(this.estado !== "ABERTA")
            throw new Error("Fatura não pode ser cancelada!")

        this.estado = "CANCELADA";
    }

    public obterEstado() {
        return this.estado;
    }

}