let activador= 0

do {
    let peso = prompt(' Ingrese su peso')
    let altura = prompt('Ingrese su altura m')


if ((isNaN(peso) === false) && (isNaN(altura) === false) ){
    let IBM = parseFloat(peso) / Math.pow(parseFloat(altura), 2); 
    console.log(IBM);
    activador=1
}else{
    console.log("datos no son numeros no es numero");
}
} while (activador===0);






/* let peso = prompt(' Ingrese su peso')
let altura = prompt('Ingrese su altura m')

if ((isNaN(peso) === false) && (isNaN(altura) === false) ){
    let IBM = parseFloat(peso) / Math.pow(parseFloat(altura), 2); 
    console.log(IBM);
}else{
    console.log("datos no son numeros no es numero");
}
 */


// peso 45 y altura 1,60 = 18.29268