export class Vencimento {
    #data: Date;

    private constructor(data: Date) {
        this.#data = data;
    }

    public static em(data: Date): Vencimento {
        if (data < new Date())
            throw new Error("A data de vencimento não pode ser menor que hoje");

        return new Vencimento(data);
    }

    public static restaurar(data: Date) {
        return new Vencimento(data);
    }

    public comoData(){
        return new Date(this.#data.getTime());
    }

    public estaVencido():Boolean {
        return this.#data < new Date();
    }

}