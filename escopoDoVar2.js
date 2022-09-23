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
    var cor = 'Verde';
    console.log("dentro da funcao: ", cor); //aqui teremos saida da cor Verde porque ela so foi declarada e teve atribuicao
    //vale portanto o escopo de funcao
}
escreveCor();
console.log("fora da funcao: ", cor); // aqui e mantendo a declaracao de var na function mesmo com atribuicao de Verde, teremos Amarelo que esta fora da funcao
console.log(`Neste exemplo a variavel var cor declarada dentro de diversos blocos
foi acessada porque ela tem escopo global e fora da funcao`);


