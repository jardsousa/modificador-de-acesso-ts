class Pessoa{
    private _nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    get nome(): string{
        return this._nome;
    }
    get idade():number{
        return this._idade;
    }
    get dataNascimento(): Date{
        return this._dataNascimento;
    }

    set nome(nome: string){
        this._nome = nome;
    }
    set idade(idade: number){
        this._idade = idade;
    }
    set dataNascimento(dataNascimento: Date){
        this._dataNascimento = dataNascimento;
    }

}