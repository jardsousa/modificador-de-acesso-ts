"use strict";
class Pessoa {
    _nome;
    _idade;
    _dataNascimento;
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set idade(idade) {
        this._idade = idade;
    }
    set dataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
    }
}
