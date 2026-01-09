"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fatura_1 = require("../dominio/entidades/Fatura");
const fatura = Fatura_1.Fatura.criar({
    id: "",
    usuarioId: "",
    gatewayId: "",
    valor: "",
    dataDeVencimento: new Date(),
    tipoDePagamento: "CREDIT_CARD"
});
console.log(fatura);
