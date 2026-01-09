import { Fatura } from "../dominio/entidades/Fatura";

const fatura = Fatura.criar({
    id: "",
    usuarioId: "",
    gatewayId: "",
    valor: "",
    dataDeVencimento: new Date(),
    tipoDePagamento: "CREDIT_CARD"
});

console.log(fatura);