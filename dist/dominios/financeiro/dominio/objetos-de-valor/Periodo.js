"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Periodo = void 0;
var UnidadeDoPeriodo;
(function (UnidadeDoPeriodo) {
    UnidadeDoPeriodo["DIA"] = "DIA";
    UnidadeDoPeriodo["MES"] = "MES";
    UnidadeDoPeriodo["ANO"] = "ANO";
})(UnidadeDoPeriodo || (UnidadeDoPeriodo = {}));
class Periodo {
    #unidade;
    #quantidade;
    constructor(quantidade, unidade) {
        this.#unidade = unidade;
        this.#quantidade = quantidade;
    }
    static criar(quantidade, unidade) {
        return new Periodo(quantidade, unidade);
    }
    adicionarDias(data) {
        const novaData = new Date(data.getTime());
        novaData.setUTCDate(novaData.getUTCDate() + this.#quantidade);
        return novaData;
    }
    adicionarAnos(data) {
        const novaData = new Date(data.getTime());
        const diaDoMesOriginal = novaData.getUTCDate();
        novaData.setUTCFullYear(novaData.getUTCFullYear() + this.#quantidade);
        if (novaData.getUTCDate() !== diaDoMesOriginal) {
            novaData.setUTCDate(0);
        }
        return novaData;
    }
    adicionarMeses(data) {
        const novaData = new Date(data.getTime());
        const diaDoMesOriginal = novaData.getUTCDate();
        novaData.setUTCMonth(novaData.getUTCMonth() + this.#quantidade);
        if (novaData.getUTCDate() !== diaDoMesOriginal) {
            novaData.setUTCDate(0);
        }
        return novaData;
    }
    static deQuinzeDias() {
        return Periodo.criar(15, UnidadeDoPeriodo.DIA);
    }
    static deUmMes() {
        return Periodo.criar(1, UnidadeDoPeriodo.MES);
    }
    static deUmAno() {
        return Periodo.criar(1, UnidadeDoPeriodo.ANO);
    }
    validoAte(assinadoEm) {
        if (this.#unidade === UnidadeDoPeriodo.DIA)
            return this.adicionarDias(assinadoEm);
        if (this.#unidade === UnidadeDoPeriodo.ANO)
            return this.adicionarAnos(assinadoEm);
        if (this.#unidade === UnidadeDoPeriodo.MES)
            return this.adicionarMeses(assinadoEm);
        throw new Error(`Unidade de período inválida: ${this.#unidade}`);
    }
}
exports.Periodo = Periodo;
