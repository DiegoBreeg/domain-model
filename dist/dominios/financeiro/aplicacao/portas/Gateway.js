"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ciclo = exports.FormaDePagamento = void 0;
var FormaDePagamento;
(function (FormaDePagamento) {
    FormaDePagamento["CARTAO"] = "CARTAO";
    FormaDePagamento["PIX"] = "PIX";
    FormaDePagamento["BOLETO"] = "BOLETO";
})(FormaDePagamento || (exports.FormaDePagamento = FormaDePagamento = {}));
var Ciclo;
(function (Ciclo) {
    Ciclo["SEMANAL"] = "SEMANAL";
    Ciclo["MENSAL"] = "MENSAL";
    Ciclo["ANUAL"] = "ANUAL";
})(Ciclo || (exports.Ciclo = Ciclo = {}));
