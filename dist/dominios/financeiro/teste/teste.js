"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Plano_1 = require("../dominio/entidades/Plano");
const Dinheiro_1 = require("../dominio/objetos-de-valor/Dinheiro");
const Periodo_1 = require("../dominio/objetos-de-valor/Periodo");
const Vencimento_1 = require("../dominio/objetos-de-valor/Vencimento");
const plano = Plano_1.Plano.criar({
    id: "uuid_plano",
    gatewayId: "uuid_gateway",
    nome: "plano genérico de um mês",
    descricao: "plano de um mês",
    periodo: Periodo_1.Periodo.deUmMes(),
    preco: Dinheiro_1.Dinheiro.criar(20000),
    estaAtivo: true,
    criadoEm: new Date(),
});
const assinatura = plano.assinar({
    assinaturaId: "uuid_assinatura",
    clienteId: "uuid_cliente",
});
assinatura.emitirFatura({
    faturaId: "uuid_123456",
    vencimento: Vencimento_1.Vencimento.em(new Date("2026-01-15")),
    valor: Dinheiro_1.Dinheiro.criar(20000),
});
assinatura.registrarPagamento({
    pagamentoId: "uuid_9876",
    faturaId: "uuid_123456",
    pagoEm: new Date("2026-01-10"),
    valor: Dinheiro_1.Dinheiro.criar(20000),
});
console.log(assinatura.validaAte());
assinatura.emitirFatura({
    faturaId: "uuid_1234567",
    vencimento: Vencimento_1.Vencimento.em(new Date("2026-02-15")),
    valor: Dinheiro_1.Dinheiro.criar(20000),
});
assinatura.registrarPagamento({
    pagamentoId: "uuid_9876",
    faturaId: "uuid_1234567",
    pagoEm: new Date("2026-02-5"),
    valor: Dinheiro_1.Dinheiro.criar(20000),
});
console.log(assinatura.validaAte());
