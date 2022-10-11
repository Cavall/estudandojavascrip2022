console.log (`Mais sobre alguns operadores unarios alem do de negacao (!) e - e +  :`);
const isVerde = 10;

const numeroAleatorio = 0;
function seraVerde (numeroAleatorio) {
if ((numeroAleatorio === isVerde) ) {

    return  "Eh verde";
    }
    else   {
     return  "Nao eh verde";
    }

}

console.log(seraVerde());
console.log(seraVerde(10));
console.log(seraVerde(-10)) //uso do - como operador unario
console.log(!(seraVerde(10))); //uso do operador unario ! para inverter o resultado esperado...No caso de true para false


console.log('Operadores de incremento e de decremento:')

let num1 = 0;
num1++
--num1;
num1--;
console.log(num1);

console.log(num1++ == --num1);

num1 = 5;
console.log(--num1 === --num1); //Porque false...
console.log(num1) //porque subtraiu uma e depois mais uma vez Isto eh o -- antes tem precedencia ja o --depois nao

num1 = 20;
--num1
num1++
console.log(num1)





