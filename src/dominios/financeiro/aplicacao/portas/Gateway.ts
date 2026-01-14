export interface Gateway {
    criarCliente(clienteId: string): Promise<string>;
    criarAssinatura(assinaturaId: string): Promise<string>;
}