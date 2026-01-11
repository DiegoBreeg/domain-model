"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dinheiro = void 0;
class Dinheiro {
    #centavos;
    constructor(centavos) {
        this.#centavos = centavos;
    }
    static criar(centavos) {
        if (centavos < 0)
            throw new Error("O valor fornecido não pode ser menor que 0!");
        if (!Number.isInteger(centavos))
            throw new Error("O valor deve ser fornecido em centavos (inteiro)!");
        return new Dinheiro(centavos);
    }
    emCentavos() {
        return this.#centavos;
    }
    emReais() {
        return this.#centavos / 100;
    }
    somar(outro) {
        return new Dinheiro(this.#centavos + outro.#centavos);
    }
    subtrair(outro) {
        const resultado = this.#centavos - outro.#centavos;
        if (resultado < 0)
            throw new Error("Resultado não pode ser negativo");
        return new Dinheiro(resultado);
    }
}
exports.Dinheiro = Dinheiro;
