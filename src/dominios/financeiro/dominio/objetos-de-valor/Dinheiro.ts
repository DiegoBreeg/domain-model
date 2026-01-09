export class Dinheiro {

    private constructor(private valor: string) { }

    public static criar(valor: string) {
        if(valor.match(/[^0-9.]/g))
            throw new Error("O valor fornecido contém caracteres inválidos!");

        if(Number(valor) < 0 )
            throw new Error("O valor fornecido não pode ser menor que 0!");

        return new Dinheiro(valor);
    }

    public obter() {
        return this.valor;
    }
}