"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vencimento = void 0;
class Vencimento {
    #data;
    constructor(data) {
        this.#data = data;
    }
    static em(data) {
        if (data < new Date())
            throw new Error("A data de vencimento não pode ser menor que hoje");
        return new Vencimento(data);
    }
    static restaurar(data) {
        return new Vencimento(data);
    }
    comoData() {
        return new Date(this.#data.getTime());
    }
    estaVencido() {
        return this.#data < new Date();
    }
}
exports.Vencimento = Vencimento;
