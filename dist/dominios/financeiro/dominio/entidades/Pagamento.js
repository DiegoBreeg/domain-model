"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagamento = void 0;
class Pagamento {
    #id;
    #faturaId;
    #valor;
    #registradoEm;
    #pagoEm;
    constructor(id, faturaId, valor, registradoEm, pagoEm) {
        this.#id = id;
        this.#faturaId = faturaId;
        this.#valor = valor;
        this.#registradoEm = registradoEm;
        this.#pagoEm = pagoEm;
    }
    static registrar(dados) {
        return new Pagamento(dados.id, dados.faturaId, dados.valor, new Date(), dados.pagoEm);
    }
    static restaurar(dados) {
        return new Pagamento(dados.id, dados.faturaId, dados.valor, dados.registradoEm, dados.pagoEm);
    }
}
exports.Pagamento = Pagamento;
