//ACESSOS E CHAMADAS COM A NOTACAO PONTO e COM COLCHETES
console.log(`Os assessores de propriedade em JavaScript fornecem acesso as propriedades
de um objeto usando a notação de ponto ou a notação de colchetes...Como seguem:
object.property
object["property"].`)
console.log('---------------------------------')
console.log(`Acessando uma propriedade do Object Math com a notacao ponto:`)
console.log('PI = ', Math.PI);
console.log('---------------------------------')
console.log(`Acessando uma propriedade do Object Math com a notacao colchetes:`)
console.log('PI = ', Math['PI']);//Nome de propriedades devem ser strings
console.log('---------------------------------')
const object = {};
object[`Um`] = "Cadeira de rodas";
console.log(object["Um"]);


//const object2 = new object ('Mesa'); //const object nao eh construtor
//console.log(object2 );

function Item (nome){
        this.nome = nome;
        this.execute = function () {
            console.log('Isto eh: ', nome);
        };
    }


const item1 = new Item ("Caneta");
const item2 = new Item('Sabonete');
console.log(item1['nome']);
item1.execute();
console.log (item2.nome);
item2.execute();


//console.log(item1 ['nome']);
//console.log(item2.execute(item2)); //porque undefined?