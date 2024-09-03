var prompt = require('prompt-sync')()
let numero = Number(prompt("Digite um número: "))

if(numero > 10){
    console.log("É maior que 10!")
}
else{
    console.log("É menor que 10!")
}