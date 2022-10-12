function tratarErroELancar (erro) {
    throw new Error ('Aconteceu um erro que sera verificado...')
}



function imprimiurMaiusculo (objeto){
    try{
    console.log(objeto.nome.toUpperCase());
    } catch (e ){
        tratarErroELancar(e);
    }

}

const obj1 = {nome: 'Antonio'};
imprimiurMaiusculo(obj1);

//Aqui teremos erro porque o nome da variavel esta errado
//Por isso iremos tratar o erro na function para que o codigo
//abaixo possa ser desconsiderado e processamento prossiga ate o final
const obj2 = {name : 'Rodrigues'}
imprimiurMaiusculo(obj2);
