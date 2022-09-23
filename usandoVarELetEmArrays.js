const casaDeArray = [];

for (var i = 0; i <10; i++){
    casaDeArray.push(function(){
        console.log(i)
    })
}
console.log(`Com variavel var i : temos mesma saida para qualquer dos elementos`)
casaDeArray[2]();
casaDeArray[5]();
casaDeArray[9]();


const casaDeArray2 = [];

for (let i = 0; i <10; i++){
    casaDeArray2.push(function(){
        console.log(i)
    })
}
console.log(`Com variavel let i : temos saidas diferentes para os elementos`)
casaDeArray2[2]();
casaDeArray2[5]();
casaDeArray2[9]();
