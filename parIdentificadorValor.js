//PAR IDENTIFICADOR E VALOR
console.log(`Nossos codigos sao feitos de colecoes de pares de identificadores e seus valores
em contextos lexicos distintos:`)
console.log();
console.log(`NO CONTEXTO DE UMA DECLARACAO DE VARIAVEL:`);
const saudacao = 'Ooopa!';
console.log(saudacao);

console.log(`NO CONTEXTO DE UMA function:`);
function execute () {
    const saudacao = 'Fala ai ooh???'; //mesmo nome noutro contexto
    return saudacao;
}
console.log(execute());
console.log();

console.log(`NO CONTEXTO DE UM object:`);
const cliente = {
    nome : 'Antonio',
    idade : 44,
    peso : 77,
    endereco : {
        logradouro : "Rua da Alegria",
        numero : 7777,
        bairro : 'centro'
    }
}
console.log(cliente);
console.log("Acessando o identificador nome, em cliente, eu encontro o valor: ", cliente.nome);