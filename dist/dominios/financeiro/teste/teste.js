"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dinheiro_1 = require("../dominio/objetos-de-valor/Dinheiro");
const dinheiro = Dinheiro_1.Dinheiro.criar(20000);
console.log(dinheiro.emReais());
