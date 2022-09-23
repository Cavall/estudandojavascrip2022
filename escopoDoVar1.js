console.log(`O escopo de uma variavel declarada com var eh de funcao e global.`);


//exemplo
{
    {
        {
            var cor = 'Amarelo';

        }

    }
}




function escreveCor() {
    var cor;
    console.log("dentro da funcao: ", cor); //aqui nao teremos saida da cor porque ela so foi declarada e nao teve atribuicao
    //vale portanto o escopo de funcao
}


console.log('chamando a funcao fora da  funcao, como esta, vai resultar em undefined: ')
escreveCor()
console.log(cor); // aqui e mantendo a declaracao de var na function sem atribuicao teremos Amarelo
console.log(`Neste exemplo a variavel var cor declarada dentro de diversos blocos
foi acessada porque ela tem escopo global e fora da funcao`);


