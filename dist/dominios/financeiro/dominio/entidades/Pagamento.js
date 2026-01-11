"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagamento = void 0;
class Pagamento {
    #id;
    #faturaId;
    #gatewayId;
    #identificadorExterno;
    #valor;
    #dataDeConfirmacaoNoGateway;
    #processadoEm;
    #criadoEm;
    constructor(id, faturaId, gatewayId, identificadorExterno, valor, dataDeConfirmacaoNoGateway, processadoEm, criadoEm) {
        this.#id = id;
        this.#faturaId = faturaId;
        this.#gatewayId = gatewayId;
        this.#identificadorExterno = identificadorExterno;
        this.#valor = valor;
        this.#dataDeConfirmacaoNoGateway = dataDeConfirmacaoNoGateway;
        this.#processadoEm = processadoEm;
        this.#criadoEm = criadoEm;
    }
    static registrar(dados) {
        return new Pagamento(dados.id, dados.faturaId, dados.gatewayId, dados.identificadorExterno, dados.valor, dados.dataDeConfirmacaoNoGateway, dados.processadoEm, new Date());
    }
    static restaurar(dados) {
        return new Pagamento(dados.id, dados.faturaId, dados.gatewayId, dados.identificadorExterno, dados.valor, dados.dataDeConfirmacaoNoGateway, dados.processadoEm, dados.criadoEm);
    }
}
exports.Pagamento = Pagamento;
