export class Dinheiro {

    private constructor(private centavos: number) { }

    public static criar(valor: number) {

        if (valor < 0)
            throw new Error("O valor fornecido não pode ser menor que 0!");

        if(!Number.isInteger(valor))
            throw new Error("O valor deve ser fornecido em centavos (inteiro)!");

        return new Dinheiro(valor);
    }

    public obterValorEmCentavos() {
        return this.centavos;
    }

    public obterValorEmReais() {
        return this.centavos / 100;
    }

    public paraMoeda(): string {
        return (this.centavos / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    public somar(outro: Dinheiro) {
        return new Dinheiro(this.centavos + outro.centavos);
    }

    public subtrair(outro: Dinheiro) {
        const resultado = this.centavos - outro.centavos;
        if(resultado < 0) throw new Error("Resultado não pode ser negativo");
        return new Dinheiro(resultado);
    }
}