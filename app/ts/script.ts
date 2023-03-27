const pessoa = new Pessoa('Ana', 26, new Date(1994, 6, 1));
const pessoaFisica = new PessoaFisica('Marcelo', 26, new Date(1994, 6, 1), '123.456.789-00');
const pessoaJuridica = new PessoaJuridica('Magazine', 40, new Date(1980, 3, 24), '123.456.789/0001-00');
;


console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Data de Nascimento: ${pessoa.dataNascimento}`);

console.log(`----PESSOA FÍSICA----`);
console.log(`Nome: ${pessoaFisica.nome}`);
console.log(`Idade: ${pessoaFisica.idade}`);
console.log(`Data de Nascimento: ${pessoaFisica.dataNascimento}`);
console.log(`CPF: ${pessoaFisica.cpf}`);

console.log(`----PESSOA JURÍDICA----`);
console.log(`Nome: ${pessoaJuridica.nome}`);
console.log(`Idade: ${pessoaJuridica.idade}`);
console.log(`Data de Nascimento: ${pessoaJuridica.dataNascimento}`);
console.log(`CNPJ: ${pessoaJuridica.cnpj}`);

