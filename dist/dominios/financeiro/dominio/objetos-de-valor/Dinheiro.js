"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dinheiro = void 0;
class Dinheiro {
    centavos;
    constructor(centavos) {
        this.centavos = centavos;
    }
    static criar(valor) {
        if (valor < 0)
            throw new Error("O valor fornecido não pode ser menor que 0!");
        if (!Number.isInteger(valor))
            throw new Error("O valor deve ser fornecido em centavos (inteiro)!");
        return new Dinheiro(valor);
    }
    obterValorEmCentavos() {
        return this.centavos;
    }
    obterValorEmReais() {
        return this.centavos / 100;
    }
    paraMoeda() {
        return (this.centavos / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
    somar(outro) {
        return new Dinheiro(this.centavos + outro.centavos);
    }
    subtrair(outro) {
        const resultado = this.centavos - outro.centavos;
        if (resultado < 0)
            throw new Error("Resultado não pode ser negativo");
        return new Dinheiro(resultado);
    }
}
exports.Dinheiro = Dinheiro;
