"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fatura = void 0;
var Status;
(function (Status) {
    Status["ABERTA"] = "ABERTA";
    Status["PAGA"] = "PAGA";
    Status["CANCELADA"] = "CANCELADA";
})(Status || (Status = {}));
class Fatura {
    #id;
    #gatewayId;
    #identificadorExterno;
    #valor;
    #dataDeVencimento;
    #status;
    #criadaEm;
    #pagaEm;
    constructor(id, gatewayId, identificadorExterno, valor, dataDeVencimento, status, criadaEm, pagaEm) {
        this.#id = id;
        this.#gatewayId = gatewayId;
        this.#identificadorExterno = identificadorExterno;
        this.#valor = valor;
        this.#dataDeVencimento = dataDeVencimento;
        this.#status = status;
        this.#criadaEm = criadaEm;
        this.#pagaEm = pagaEm;
    }
    static emitir(dados) {
        const dataAtual = new Date();
        if (dados.dataDeVencimento < dataAtual)
            throw new Error("Data de vencimento não pode ser menor do a data atual");
        return new Fatura(dados.id, dados.gatewayId, null, dados.valor, dados.dataDeVencimento, Status.ABERTA, dataAtual, null);
    }
    static restaurar(dados) {
        return new Fatura(dados.id, dados.gatewayId, dados.identificadorExterno, dados.valor, dados.dataDeVencimento, dados.status, dados.criadaEm, dados.pagaEm);
    }
    pagar(dataDoPagamento) {
        if (this.#status !== "ABERTA")
            throw new Error("Somente faturas abertas podem ser pagas!");
        this.#status = Status.PAGA;
        this.#pagaEm = dataDoPagamento;
    }
    cancelar() {
        if (this.#status !== "ABERTA")
            throw new Error("Fatura não pode ser cancelada!");
        this.#status = Status.CANCELADA;
    }
    valor() {
        return this.#valor;
    }
    estaAberta() { return this.#status === Status.ABERTA; }
    estaCancelada() { return this.#status === Status.CANCELADA; }
    estaPaga() { return this.#status === Status.PAGA; }
}
exports.Fatura = Fatura;
