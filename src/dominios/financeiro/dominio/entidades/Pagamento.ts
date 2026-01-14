import { Dinheiro } from "../objetos-de-valor/Dinheiro";

type DadosParaRegistrar = {
    id: string;
    faturaId: string;
    valor: Dinheiro;
    pagoEm: Date;
}

type DadosParaRestaurar = {
    id: string;
    faturaId: string;
    valor: Dinheiro;
    registradoEm: Date;
    pagoEm: Date;
}

export class Pagamento {
    #id: string;
    #faturaId: string;
    #valor: Dinheiro;
    #registradoEm: Date;
    #pagoEm: Date;

    private constructor(
        id: string,
        faturaId: string,
        valor: Dinheiro,
        registradoEm: Date,
        pagoEm: Date,
    ) {
        this.#id = id;
        this.#faturaId = faturaId;
        this.#valor = valor;
        this.#registradoEm = registradoEm;
        this.#pagoEm = pagoEm;
    }

    public static registrar(dados: DadosParaRegistrar): Pagamento {
        return new Pagamento(
            dados.id,
            dados.faturaId,
            dados.valor,
            new Date(),
            dados.pagoEm,
        );
    }

    public static restaurar(dados: DadosParaRestaurar): Pagamento {
        return new Pagamento(
            dados.id,
            dados.faturaId,
            dados.valor,
            dados.registradoEm,
            dados.pagoEm,
        );
    }

}