//Eh possivel usar destruct em funcoes e ainda usar a inovacao de 
//valores padrao implandos com ESC2015


//criando uma funcao usando destruct
//usando padrao para min e max
function numeroAleatorio({min = 0 , max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
console.log(numeroAleatorio({max : 60 , min : 50}));

//criando um objeto e passando como parametro para a funcao
const objeto = {max : 10, min : 1};
console.log(numeroAleatorio(objeto));
console.log(typeof objeto);

//passando somente um parametro
console.log(numeroAleatorio({min : 990}))
