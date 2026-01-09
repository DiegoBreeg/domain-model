"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fatura = void 0;
class Fatura {
    #id;
    #usuarioId;
    #gatewayId;
    #valor;
    #dataDeVencimento;
    #tipoDePagamento;
    #criadoEm;
    #pagoEm;
    #estado;
    constructor(id, usuarioId, gatewayId, valor, dataDeVencimento, tipoDePagamento, criadoEm, pagoEm, estado) {
        this.#id = id;
        this.#usuarioId = usuarioId;
        this.#gatewayId = gatewayId;
        this.#valor = valor;
        this.#dataDeVencimento = dataDeVencimento;
        this.#tipoDePagamento = tipoDePagamento;
        this.#criadoEm = criadoEm;
        this.#pagoEm = pagoEm;
        this.#estado = estado;
    }
    static criar(dados) {
        const dataAtual = new Date();
        if (dados.dataDeVencimento < dataAtual)
            throw new Error("Data de vencimento não pode ser menor do a data atual!");
        return new Fatura(dados.id, dados.usuarioId, dados.gatewayId, dados.valor, dados.dataDeVencimento, dados.tipoDePagamento, dataAtual, null, "ABERTA");
    }
    static restaurar(dados) {
        return new Fatura(dados.id, dados.usuarioId, dados.gatewayId, dados.valor, dados.dataDeVencimento, dados.tipoDePagamento, dados.criadoEm, dados.pagoEm, dados.estado);
    }
    marcarComoPaga(dataDoPagamento) {
        if (this.#estado !== "ABERTA")
            throw new Error("Somente faturas abertas podem ser pagas!");
        this.#estado = "PAGA";
        this.#pagoEm = dataDoPagamento;
    }
    marcarComoCancelada() {
        if (this.#estado !== "ABERTA")
            throw new Error("Fatura não pode ser cancelada!");
        this.#estado = "CANCELADA";
    }
    consultarValorEmMoeda() {
        return this.#valor.paraMoeda();
    }
    consultarValorEmCentavos() {
        return this.#valor.obterValorEmCentavos();
    }
    consultarValorEmReais() {
        return this.#valor.obterValorEmReais();
    }
    estaAberta() { return this.#estado === "ABERTA"; }
    estaCancelada() { return this.#estado === "CANCELADA"; }
    estaPaga() { return this.#estado === "PAGA"; }
}
exports.Fatura = Fatura;
