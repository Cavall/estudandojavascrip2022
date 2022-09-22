//Basico de Arrays
console.log(`Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos
para realizar operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos
de elementos são fixos. Já que o tamanho de um array pode ser alterado a qualquer momento e
os dados podem ser armazenados em posições não contíguas, arrays JavaScript não tem a garantia 
de serem densos; isso depende de como o programador escolhe usá-los. De uma maneira geral, 
essas são características convenientes, mas, se esses recursos não são desejáveis para o seu caso
em particular, você pode considerar usar arrays tipados.`);

console.log(`Criando uma Array com valores literais`)
const valorizando = [7.9, 8.7, 6.8, 9.9];
console.log(valorizando);
console.log(valorizando[0], valorizando[3]);
console.log(valorizando[5]);
//incluindo um novo dado
valorizando[5] = 10;
console.log(valorizando);
console.log(valorizando.length);
//incluindo diversos dados com push
valorizando.push({id:7}, false, null, "Zethe" );
console.log(valorizando);

//escluindo o ultimo elemento
console.log(valorizando.pop());

//excluindo com delete e intem determinado
delete valorizando[5];  //vai retirar o quinto elemento que nao eh vazio
console.log(valorizando);
console.log(typeof valorizando);