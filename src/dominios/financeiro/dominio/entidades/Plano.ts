import { Dinheiro } from "../objetos-de-valor/Dinheiro";
import { Periodo } from "../objetos-de-valor/Periodo";

type DadosParaCriar = {
    id: string;
    gatewayId: string;
    nome: string;
    descricao: string;
    periodo: Periodo;
    preco: Dinheiro;
    estaAtivo: boolean;
}

type DadosParaRestaurar = {
    id: string;
    gatewayId: string;
    nome: string;
    descricao: string;
    periodo: Periodo;
    preco: Dinheiro;
    estaAtivo: boolean;
}

export class Plano {
    #id: string;
    #gatewayId: string;
    #nome: string;
    #descricao: string;
    #periodo: Periodo;
    #preco: Dinheiro;
    #estaAtivo: boolean;

    private constructor(
        id: string,
        gatewayId: string,
        nome: string,
        descricao: string,
        periodo: Periodo,
        preco: Dinheiro,
        estaAtivo: boolean,
    ) {
        this.#id = id;
        this.#gatewayId = gatewayId;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#periodo = periodo;
        this.#preco = preco;
        this.#estaAtivo = estaAtivo;
    }

    public static criar(dados: DadosParaCriar): Plano {
        return new Plano(
            dados.id,
            dados.gatewayId,
            dados.nome,
            dados.descricao,
            dados.periodo,
            dados.preco,
            dados.estaAtivo
        );
    }

    public static restaurar(dados: DadosParaCriar): Plano {
        return new Plano(
            dados.id,
            dados.gatewayId,
            dados.nome,
            dados.descricao,
            dados.periodo,
            dados.preco,
            dados.estaAtivo
        );
    }

    public assinar() {

    }
}