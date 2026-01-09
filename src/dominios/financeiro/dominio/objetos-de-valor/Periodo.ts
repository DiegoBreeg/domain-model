type UnidadeDoPeriodo = "DIA" | "MES" | "ANOS";

export class Periodo {
    readonly #unidade: UnidadeDoPeriodo;
    readonly #quantidade: number;

    private constructor(quantidade: number, unidade: UnidadeDoPeriodo){
        this.#unidade = unidade;
        this.#quantidade = quantidade;
    }

    public static criar(quantidade: number, unidade: UnidadeDoPeriodo) {
        if(quantidade < 1) throw new Error("A quantidade do período deve ser maior que zero.");
        return new Periodo(quantidade, unidade);
    }

    public paraTexto(): string {
        return `${this.#quantidade} ${this.#unidade}${this.#quantidade > 1 ? 'S' : ''}`;
    }

}