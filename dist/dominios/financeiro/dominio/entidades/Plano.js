"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plano = void 0;
const Assinatura_1 = require("./Assinatura");
class Plano {
    #id;
    #gatewayId;
    #nome;
    #descricao;
    #periodo;
    #preco;
    #estaAtivo;
    #criadoEm;
    constructor(id, gatewayId, nome, descricao, periodo, preco, estaAtivo, criadoEm) {
        this.#id = id;
        this.#gatewayId = gatewayId;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#periodo = periodo;
        this.#preco = preco;
        this.#estaAtivo = estaAtivo;
        this.#criadoEm = criadoEm;
    }
    static criar(dados) {
        const nome = Plano.normalizarNome(dados.nome);
        Plano.verificarNome(nome);
        return new Plano(dados.id, dados.gatewayId, nome, dados.descricao, dados.periodo, dados.preco, dados.estaAtivo, new Date());
    }
    static restaurar(dados) {
        return new Plano(dados.id, dados.gatewayId, dados.nome, dados.descricao, dados.periodo, dados.preco, dados.estaAtivo, dados.criadoEm);
    }
    assinar(dados) {
        return Assinatura_1.Assinatura.contratar({
            id: dados.assinaturaId,
            clienteId: dados.clienteId,
            gatewayId: this.#gatewayId,
            periodo: this.#periodo,
            valor: this.#preco,
        });
    }
    static normalizarNome(nome) {
        return nome.trim();
    }
    static verificarNome(nome) {
        if (nome === "")
            throw new Error("Nome não pode estar vazio");
        if (nome.length < 3) {
            throw new Error("Nome muito curto");
        }
    }
}
exports.Plano = Plano;
