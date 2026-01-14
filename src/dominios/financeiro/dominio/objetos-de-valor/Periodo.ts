enum UnidadeDoPeriodo {
    DIA = "DIA",
    MES = "MES",
    ANO = "ANO",
}

export class Periodo {
    readonly #unidade: UnidadeDoPeriodo;
    readonly #quantidade: number;

    private constructor(quantidade: number, unidade: UnidadeDoPeriodo) {
        this.#unidade = unidade;
        this.#quantidade = quantidade;
    }

    private static criar(quantidade: number, unidade: UnidadeDoPeriodo) {
        return new Periodo(quantidade, unidade);
    }

    private adicionarDias(data: Date) {
        const novaData = new Date(data.getTime());
        novaData.setUTCDate(novaData.getUTCDate() + this.#quantidade);
        return novaData;
    }

    private adicionarAnos(data: Date) {
        const novaData = new Date(data.getTime());
        const diaDoMesOriginal = novaData.getUTCDate();

        novaData.setUTCFullYear(novaData.getUTCFullYear() + this.#quantidade);

        if (novaData.getUTCDate() !== diaDoMesOriginal) {
            novaData.setUTCDate(0);
        }

        return novaData;
    }

    private adicionarMeses(data: Date): Date {
        const novaData = new Date(data.getTime());
        const diaDoMesOriginal = novaData.getUTCDate();

        novaData.setUTCMonth(novaData.getUTCMonth() + this.#quantidade);

        if (novaData.getUTCDate() !== diaDoMesOriginal) {
            novaData.setUTCDate(0);
        }

        return novaData;
    }

    public static deQuinzeDias(): Periodo {
        return Periodo.criar(15, UnidadeDoPeriodo.DIA);
    }

    public static deUmMes(): Periodo {
        return Periodo.criar(1, UnidadeDoPeriodo.MES);
    }

    public static deUmAno(): Periodo {
        return Periodo.criar(1, UnidadeDoPeriodo.ANO);
    }

    public validoAte(dataInicial: Date): Date {

        if (this.#unidade === UnidadeDoPeriodo.DIA)
            return this.adicionarDias(dataInicial);

        if (this.#unidade === UnidadeDoPeriodo.ANO)
            return this.adicionarAnos(dataInicial);

        if (this.#unidade === UnidadeDoPeriodo.MES)
            return this.adicionarMeses(dataInicial);

        throw new Error(`Unidade de período inválida: ${this.#unidade}`);
    }

}