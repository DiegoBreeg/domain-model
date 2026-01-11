import { Dinheiro } from "../objetos-de-valor/Dinheiro";

type DadosParaConfirmar = {
    id: string;
    faturaId: string;
    gatewayId: string;
    identificadorExterno: string;
    valor: Dinheiro;
    dataDeConfirmacaoNoGateway: Date;
    processadoEm: Date;
}

type DadosParaRestaurar = {
    id: string;
    faturaId: string;
    gatewayId: string;
    identificadorExterno: string;
    valor: Dinheiro;
    dataDeConfirmacaoNoGateway: Date;
    processadoEm: Date;
    criadoEm: Date;
}

export class Pagamento {
    #id: string;
    #faturaId: string;
    #gatewayId: string;
    #identificadorExterno: string;
    #valor: Dinheiro;
    #dataDeConfirmacaoNoGateway: Date;
    #processadoEm: Date;
    #criadoEm: Date;

    private constructor(
        id: string,
        faturaId: string,
        gatewayId: string,
        identificadorExterno: string,
        valor: Dinheiro,
        dataDeConfirmacaoNoGateway: Date,
        processadoEm: Date,
        criadoEm: Date,
    ) {
        this.#id = id;
        this.#faturaId = faturaId;
        this.#gatewayId = gatewayId;
        this.#identificadorExterno = identificadorExterno;
        this.#valor = valor;
        this.#dataDeConfirmacaoNoGateway = dataDeConfirmacaoNoGateway;
        this.#processadoEm = processadoEm;
        this.#criadoEm = criadoEm;
    }

    public static registrar(dados: DadosParaConfirmar): Pagamento {
        return new Pagamento(
            dados.id,
            dados.faturaId,
            dados.gatewayId,
            dados.identificadorExterno,
            dados.valor,
            dados.dataDeConfirmacaoNoGateway,
            dados.processadoEm,
            new Date(),
        );
    }

    public static restaurar(dados: DadosParaRestaurar): Pagamento {
        return new Pagamento(
            dados.id,
            dados.faturaId,
            dados.gatewayId,
            dados.identificadorExterno,
            dados.valor,
            dados.dataDeConfirmacaoNoGateway,
            dados.processadoEm,
            dados.criadoEm,
        );
    }

}