import { Dinheiro } from "../objetos-de-valor/Dinheiro";
import { Periodo } from "../objetos-de-valor/Periodo";
import { Assinatura } from "./Assinatura";

type DadosParaCriar = {
    id: string;
    gatewayId: string;
    nome: string;
    descricao: string;
    periodo: Periodo;
    preco: Dinheiro;
    estaAtivo: boolean;
    criadoEm: Date;
}

type DadosParaRestaurar = {
    id: string;
    gatewayId: string;
    nome: string;
    descricao: string;
    periodo: Periodo;
    preco: Dinheiro;
    estaAtivo: boolean;
    criadoEm: Date;
}

type DadosParaAssinar = {
    assinaturaId: string,
    clienteId: string,
}

export class Plano {
    #id: string;
    #gatewayId: string;
    #nome: string;
    #descricao: string;
    #periodo: Periodo;
    #preco: Dinheiro;
    #estaAtivo: boolean;
    #criadoEm: Date;

    private constructor(
        id: string,
        gatewayId: string,
        nome: string,
        descricao: string,
        periodo: Periodo,
        preco: Dinheiro,
        estaAtivo: boolean,
        criadoEm: Date,
    ) {
        this.#id = id;
        this.#gatewayId = gatewayId;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#periodo = periodo;
        this.#preco = preco;
        this.#estaAtivo = estaAtivo;
        this.#criadoEm = criadoEm;
    }

    public static criar(dados: DadosParaCriar): Plano {
        const nome = Plano.normalizarNome(dados.nome);
        Plano.verificarNome(nome);

        return new Plano(
            dados.id,
            dados.gatewayId,
            nome,
            dados.descricao,
            dados.periodo,
            dados.preco,
            dados.estaAtivo,
            new Date(),
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
            dados.estaAtivo,
            dados.criadoEm,
        );
    }

    public assinar(dados: DadosParaAssinar): Assinatura {
        return Assinatura.contratar({
            id: dados.assinaturaId,
            clienteId: dados.clienteId,
            gatewayId: this.#gatewayId,
            periodo: this.#periodo,
            valor: this.#preco,
        });
    }

    private static normalizarNome(nome: string) {
        return nome.trim();
    }

    private static verificarNome(nome: string) {
        if (nome === "")
            throw new Error("Nome não pode estar vazio");

        if (nome.length < 3) {
            throw new Error("Nome muito curto");
        }
    }
}