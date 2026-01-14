"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fatura = void 0;
const Pagamento_1 = require("./Pagamento");
var Status;
(function (Status) {
    Status["ABERTA"] = "ABERTA";
    Status["PAGA"] = "PAGA";
    Status["CANCELADA"] = "CANCELADA";
    Status["VENCIDA"] = "VENCIDA";
})(Status || (Status = {}));
class Fatura {
    #id;
    #valor;
    #vencimento;
    #status;
    #emitidaEm;
    constructor(id, valor, vencimento, status, emitidaEm) {
        this.#id = id;
        this.#valor = valor;
        this.#vencimento = vencimento;
        this.#status = status;
        this.#emitidaEm = emitidaEm;
    }
    static emitir(dados) {
        return new Fatura(dados.id, dados.valor, dados.vencimento, Status.ABERTA, new Date());
    }
    static restaurar(dados) {
        return new Fatura(dados.id, dados.valor, dados.vencimento, dados.status, dados.emitidaEm);
    }
    registrarPagamento(dados) {
        this.verificarSeEstaAberta();
        this.verificarValor(dados.valor);
        const pagamento = Pagamento_1.Pagamento.registrar({
            id: dados.pagamentoId,
            faturaId: this.#id,
            valor: dados.valor,
            pagoEm: dados.pagoEm,
        });
        this.#status = Status.PAGA;
        return pagamento;
    }
    verificarSeEstaAberta() {
        if (!this.estaAberta())
            throw new Error("Somente faturas abertas podem ser pagas!");
    }
    verificarValor(dinheiro) {
        if (!this.#valor.igual(dinheiro))
            throw new Error("Valor pago diferente do valor da fatura");
    }
    cancelar() {
        if (this.#status !== "ABERTA")
            throw new Error("Fatura não pode ser cancelada!");
        this.#status = Status.CANCELADA;
    }
    valor() {
        return this.#valor;
    }
    vencimento() {
        return this.#vencimento;
    }
    obterId() {
        return this.#id;
    }
    estaAberta() { return this.#status === Status.ABERTA; }
    estaCancelada() { return this.#status === Status.CANCELADA; }
    estaPaga() { return this.#status === Status.PAGA; }
}
exports.Fatura = Fatura;
