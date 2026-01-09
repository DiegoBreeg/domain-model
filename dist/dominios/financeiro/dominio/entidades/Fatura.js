"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fatura = void 0;
class Fatura {
    id;
    usuarioId;
    gatewayId;
    valor;
    dataDeVencimento;
    tipoDePagamento;
    criadoEm;
    pagoEm;
    estado;
    constructor(id, usuarioId, gatewayId, valor, dataDeVencimento, tipoDePagamento, criadoEm, pagoEm, estado) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.gatewayId = gatewayId;
        this.valor = valor;
        this.dataDeVencimento = dataDeVencimento;
        this.tipoDePagamento = tipoDePagamento;
        this.criadoEm = criadoEm;
        this.pagoEm = pagoEm;
        this.estado = estado;
    }
    static criar(dados) {
        return new Fatura(dados.id, dados.usuarioId, dados.gatewayId, dados.valor, dados.dataDeVencimento, dados.tipoDePagamento, new Date(), null, "ABERTA");
    }
    static restaurar(estado) {
        return new Fatura(estado.id, estado.usuarioId, estado.gatewayId, estado.valor, estado.dataDeVencimento, estado.tipoDePagamento, estado.criadoEm, estado.pagoEm, estado.estado);
    }
}
exports.Fatura = Fatura;
