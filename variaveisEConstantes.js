console.log(`No javascript podemos criar variaveis com var e com let. 
Let eh do javascript moderno e nao pode ser redeclarada no mesmo escopo,
mas variaveis criadas com var podem ser redeclaradas no mesmo escopo.
Esistem outras diferencas nao abordadas aqui, mas ambas sao variaveis e seus
valores podem ser modificados...veja exemplos que seguem:`)

var a = 30;
let b = 40;

var a = 3; //foi possivel redeclarar a variavel a com var
//let = 4; Nao pode ser redeclarada
b = 4;

console.log(a, b);