"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assinatura = void 0;
const Fatura_1 = require("./Fatura");
var Status;
(function (Status) {
    Status["ATIVA"] = "ATIVA";
    Status["PENDENTE"] = "PENDENTE";
})(Status || (Status = {}));
;
class Assinatura {
    #id;
    #clienteId;
    #gatewayId;
    #faturas;
    #periodo;
    #valor;
    #status;
    #assinadaEm;
    #ativadaEm;
    #validaAte;
    constructor(id, clienteId, gatewayId, faturas, periodo, valor, status, assinadaEm, ativadaEm, validaAte) {
        this.#id = id;
        this.#clienteId = clienteId;
        this.#gatewayId = gatewayId;
        this.#faturas = faturas;
        this.#periodo = periodo;
        this.#valor = valor;
        this.#status = status;
        this.#assinadaEm = assinadaEm;
        this.#ativadaEm = ativadaEm;
        this.#validaAte = validaAte;
    }
    static contratar(dados) {
        return new Assinatura(dados.id, dados.clienteId, dados.gatewayId, [], dados.periodo, dados.valor, Status.PENDENTE, new Date(), null, null);
    }
    emitirFatura(dados) {
        this.verificarSeJaEmitiu(dados.faturaId);
        const fatura = Fatura_1.Fatura.emitir({
            id: dados.faturaId,
            vencimento: dados.vencimento,
            valor: dados.valor,
        });
        this.#faturas.push(fatura);
        return fatura;
    }
    registrarPagamento(dados) {
        const fatura = this.obterFatura(dados.faturaId);
        const pagamento = fatura.registrarPagamento({
            pagamentoId: dados.pagamentoId,
            pagoEm: dados.pagoEm,
            valor: dados.valor,
        });
        if (this.estaPendente()) {
            this.ativar(dados.pagoEm);
        }
        else if (this.estaAtiva()) {
            this.estenderValidade();
        }
        return { fatura, pagamento };
    }
    ativar(dataPagamento) {
        this.#ativadaEm = dataPagamento;
        this.#validaAte = this.#periodo.validoAte(dataPagamento);
        this.#status = Status.ATIVA;
    }
    estenderValidade() {
        this.#validaAte = this.#periodo.validoAte(this.#validaAte);
    }
    jaEmitiuFatura(faturaId) {
        return this.#faturas.some(f => f.obterId() === faturaId);
    }
    verificarSeJaEmitiu(faturaId) {
        if (this.jaEmitiuFatura(faturaId)) {
            throw new Error("Esta fatura já foi emitida");
        }
    }
    obterFatura(faturaId) {
        const fatura = this.#faturas.find(fat => fat.obterId() === faturaId);
        if (!fatura)
            throw new Error("Fatura não encontrada!");
        return fatura;
    }
    estaPendente() {
        return this.#status === Status.PENDENTE;
    }
    estaAtiva() {
        return this.#status === Status.ATIVA;
    }
    validaAte() {
        return this.#validaAte;
    }
}
exports.Assinatura = Assinatura;
