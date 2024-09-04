var prompt = require('prompt-sync')();
console.log ("Entre com os coeficientes de uma equação do segundo grau: ")
let a = prompt("a: ")
let b = prompt("b: ")
let c = prompt("c: ")

//console.log((-b-(Math.sqrt(b**2-4*a*c)))/2*a);




// --------------print da equação:

// ax²               +bx             +c=0
let stringA=`${a}`
if(a==0){
    stringA="";
} else if (a==1){
    stringA="x²"
}else {
    stringA=`${a}x²`
}

let stringB=`${b}x`
if(b==0){
    stringB="";
} else if (b>0 && b!=1){
    stringB=`+${b}x`
}else if (b==1){
    stringB="+x";
} 


let stringC=`${c}`
if (c>0){
    stringC=`+${c}`
} else if (c==0){
    stringC=""
}
let x1, x2;
//------------------------------------------------------------//
// calculando x1 
if((b**2)>=(4*a*c)){
x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);

//calculando x2

x2= (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a)
console.log(`As raízes da equação de segundo grau "${stringA}${stringB}${stringC}=0" são x'=${(x1).toFixed(2)} e x"=${(x2).toFixed(2)}.`);

} else {
    console.log("Estes coeficientes resultam em números Complexos, portanto, não serão calculados.")
};
