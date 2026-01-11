import { Dinheiro } from "../objetos-de-valor/Dinheiro";

enum Status {
    ABERTA = "ABERTA",
    PAGA = "PAGA",
    CANCELADA = "CANCELADA",
}

type DadosParaEmitir = {
    id: string;
    gatewayId: string;
    valor: Dinheiro;
    dataDeVencimento: Date;
}

type DadosParaRestaurar = {
    id: string;
    gatewayId: string;
    identificadorExterno: string | null;
    valor: Dinheiro;
    dataDeVencimento: Date;
    status: Status;
    criadaEm: Date;
    pagaEm: Date | null;
}

export class Fatura {
    #id: string;
    #gatewayId: string;
    #identificadorExterno: string | null;
    #valor: Dinheiro;
    #dataDeVencimento: Date;
    #status: Status;
    #criadaEm: Date;
    #pagaEm: Date | null;

    private constructor(
        id: string,
        gatewayId: string,
        identificadorExterno: string | null,
        valor: Dinheiro,
        dataDeVencimento: Date,
        status: Status,
        criadaEm: Date,
        pagaEm: Date | null,
    ) {
        this.#id = id;
        this.#gatewayId = gatewayId;
        this.#identificadorExterno = identificadorExterno;
        this.#valor = valor;
        this.#dataDeVencimento = dataDeVencimento;
        this.#status = status;
        this.#criadaEm = criadaEm;
        this.#pagaEm = pagaEm;
    }

    public static emitir(dados: DadosParaEmitir): Fatura {
        const dataAtual = new Date();

        if (dados.dataDeVencimento < dataAtual)
            throw new Error("Data de vencimento não pode ser menor do a data atual");

        return new Fatura(
            dados.id,
            dados.gatewayId,
            null,
            dados.valor,
            dados.dataDeVencimento,
            Status.ABERTA,
            dataAtual,
            null
        );
    }

    public static restaurar(dados: DadosParaRestaurar): Fatura {

        return new Fatura(
            dados.id,
            dados.gatewayId,
            dados.identificadorExterno,
            dados.valor,
            dados.dataDeVencimento,
            dados.status,
            dados.criadaEm,
            dados.pagaEm
        );
    }

    public pagar(dataDoPagamento: Date): void {
        if (this.#status !== "ABERTA")
            throw new Error("Somente faturas abertas podem ser pagas!");

        this.#status = Status.PAGA;
        this.#pagaEm = dataDoPagamento;
    }

    public cancelar(): void {
        if (this.#status !== "ABERTA")
            throw new Error("Fatura não pode ser cancelada!");
        this.#status = Status.CANCELADA;
    }

    public valor(): Dinheiro {
        return this.#valor;
    }

    public estaAberta(): Boolean { return this.#status === Status.ABERTA; }
    public estaCancelada(): Boolean { return this.#status === Status.CANCELADA; }
    public estaPaga(): Boolean { return this.#status === Status.PAGA; }

}