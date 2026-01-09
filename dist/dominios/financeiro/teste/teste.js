"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fatura_1 = require("../dominio/entidades/Fatura");
const Dinheiro_1 = require("../dominio/objetos-de-valor/Dinheiro");
const dinheiro = Dinheiro_1.Dinheiro.criar(1050);
const fatura = Fatura_1.Fatura.criar({
    id: "",
    usuarioId: "",
    gatewayId: "",
    valor: dinheiro,
    dataDeVencimento: new Date(),
    tipoDePagamento: "CREDIT_CARD"
});
console.log(fatura.consultarValorEmMoeda());
