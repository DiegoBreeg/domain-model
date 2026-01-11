import { Fatura } from "../dominio/entidades/Fatura";
import { Gateway } from "../dominio/entidades/Gateway";
import { Dinheiro } from "../dominio/objetos-de-valor/Dinheiro";


const dinheiro = Dinheiro.criar(20000);
console.log(dinheiro.emReais())