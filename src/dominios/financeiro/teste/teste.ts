import { Fatura } from "../dominio/entidades/Fatura";
import { Dinheiro } from "../dominio/objetos-de-valor/Dinheiro";


const dinheiro = Dinheiro.criar(1050);

const fatura = Fatura.criar({
    id: "",
    usuarioId: "",
    gatewayId: "",
    valor: dinheiro,
    dataDeVencimento: new Date(),
    tipoDePagamento: "CREDIT_CARD"
});



console.log(fatura.consultarValorEmMoeda())

