export enum FormaDePagamento {
    CARTAO = "CARTAO",
    PIX = "PIX",
    BOLETO = "BOLETO",
}

export enum Ciclo {
    SEMANAL = "SEMANAL",
    MENSAL = "MENSAL",
    ANUAL = "ANUAL",
}

export type CriarAssinaturaGateway = {
    assinaturaId: string;
    clienteId: string;
    valor: number;
    vencimento: Date;
    formaDePagamento: FormaDePagamento;
    ciclo: Ciclo;
}

export type CriarClienteGateway = {
    clienteId: string;
}

export type identificadorExterno = string;

export interface Gateway {
    criarAssinatura(dados: CriarAssinaturaGateway): Promise<identificadorExterno>;
    criarCliente(dados: CriarClienteGateway): Promise<identificadorExterno>;
}