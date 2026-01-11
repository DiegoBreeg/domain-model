"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plano = void 0;
class Plano {
    #id;
    #gatewayId;
    #nome;
    #descricao;
    #periodo;
    #preco;
    #estaAtivo;
    constructor(id, gatewayId, nome, descricao, periodo, preco, estaAtivo) {
        this.#id = id;
        this.#gatewayId = gatewayId;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#periodo = periodo;
        this.#preco = preco;
        this.#estaAtivo = estaAtivo;
    }
    static criar(dados) {
        return new Plano(dados.id, dados.gatewayId, dados.nome, dados.descricao, dados.periodo, dados.preco, dados.estaAtivo);
    }
    static restaurar(dados) {
        return new Plano(dados.id, dados.gatewayId, dados.nome, dados.descricao, dados.periodo, dados.preco, dados.estaAtivo);
    }
    assinar() {
    }
}
exports.Plano = Plano;
