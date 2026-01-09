import { Dinheiro } from "../objetos-de-valor/Dinheiro";
import { Periodo } from "../objetos-de-valor/Periodo";

export class Plano {
    #id: string;
    #periodo: Periodo;
    #preco: Dinheiro;
    #ativo: boolean;

}