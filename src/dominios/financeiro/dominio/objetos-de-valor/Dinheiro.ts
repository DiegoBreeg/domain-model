export class Dinheiro {
    #centavos: number;

    private constructor(centavos: number) {
        this.#centavos = centavos;
    }

    public static criar(centavos: number) {

        if (centavos < 0)
            throw new Error("O valor fornecido não pode ser menor que 0!");

        if (!Number.isInteger(centavos))
            throw new Error("O valor deve ser fornecido em centavos (inteiro)!");

        return new Dinheiro(centavos);
    }

    public emCentavos() {
        return this.#centavos;
    }

    public emReais() {
        return this.#centavos / 100;
    }

    public somar(outro: Dinheiro) {
        return new Dinheiro(this.#centavos + outro.#centavos);
    }

    public subtrair(outro: Dinheiro) {
        const resultado = this.#centavos - outro.#centavos;
        if (resultado < 0) throw new Error("Resultado não pode ser negativo");
        return new Dinheiro(resultado);
    }
}