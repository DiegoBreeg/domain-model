type DadosParaCriar = {
    id: string;
    nome: string;
    chave: string;
    chaveWebhook: string;
    estaAtivo: boolean;
}

type DadosParaRestaurar = {
    id: string;
    nome: string;
    chave: string;
    chaveWebhook: string;
    estaAtivo: boolean;
}

export class Gateway {
    #id: string;
    #nome: string;
    #chave: string;
    #chaveWebhook: string;
    #estaAtivo: boolean;

    private constructor(
        id: string,
        nome: string,
        chave: string,
        chaveWebhook: string,
        estaAtivo: boolean,
    ) {
        this.#id = id;
        this.#nome = nome;
        this.#chave = chave;
        this.#chaveWebhook = chaveWebhook;
        this.#estaAtivo = estaAtivo;
    }

    public static criar(dados: DadosParaCriar): Gateway {
        return new Gateway(
            dados.id,
            dados.nome,
            dados.chave,
            dados.chaveWebhook,
            dados.estaAtivo
        );
    }

    public static restaurar(dados: DadosParaRestaurar): Gateway {
        return new Gateway(
            dados.id,
            dados.nome,
            dados.chave,
            dados.chaveWebhook,
            dados.estaAtivo
        );
    }

    public chave() {
        return this.#chave;
    }

    public chaveWebhook() {
        return this.#chaveWebhook;
    }

    public estaAtivo() {
        return this.#estaAtivo;
    }

    public ativar() {
        this.#estaAtivo = true;
    }

    public desativar() {
        this.#estaAtivo = false;
    }

}