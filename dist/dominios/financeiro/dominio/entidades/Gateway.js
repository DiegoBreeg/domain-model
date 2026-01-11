"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateway = void 0;
class Gateway {
    #id;
    #nome;
    #chave;
    #chaveWebhook;
    #estaAtivo;
    constructor(id, nome, chave, chaveWebhook, estaAtivo) {
        this.#id = id;
        this.#nome = nome;
        this.#chave = chave;
        this.#chaveWebhook = chaveWebhook;
        this.#estaAtivo = estaAtivo;
    }
    static criar(dados) {
        return new Gateway(dados.id, dados.nome, dados.chave, dados.chaveWebhook, dados.estaAtivo);
    }
    static restaurar(dados) {
        return new Gateway(dados.id, dados.nome, dados.chave, dados.chaveWebhook, dados.estaAtivo);
    }
    chave() {
        return this.#chave;
    }
    chaveWebhook() {
        return this.#chaveWebhook;
    }
    estaAtivo() {
        return this.#estaAtivo;
    }
    ativar() {
        this.#estaAtivo = true;
    }
    desativar() {
        this.#estaAtivo = false;
    }
}
exports.Gateway = Gateway;
