// 04-funciones.js
function imprimirMensaje(mensaje)
{
    if(typeof mensaje === 'string' || typeof mensaje === 'number')
    {
        console.log(`Mensaje ${mensaje}`);
        console.log("Mensaje " + mensaje);
    }
    else
    {
        console.log("El mensaje no es string");
    }
}

const respuesta = imprimirMensaje(1,2,'asd');
console.log(respuesta);
const respuesta1 = imprimirMensaje();
const respuesta2 = imprimirMensaje({a:1});
const respuesta3 = imprimirMensaje("Hola Mundo");

function sumarDosElementos(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}

console.log(sumarDosElementos(1,2));

function sumarElementos(numeroUno, ...Otro)
{
    if(Otro)
    {
        return Otro.reduce(
            (valorInicial, valorActual, indice, arreglo)=>{
                return valorInicial + valorActual;
            },numeroUno
        );
    }
};

const resultadoSumaElementos = sumarElementos(1,2,3,4,5,6);
console.log(resultadoSumaElementos);

const restar = function restarF(a,b){
    return a-b;
};


const restar1 = function (a,b){
    return a-b;
};


function restar2(a,b){
    return a-b;
};
console.log(restar(3,5));



const restar3 = (a,b)=>{
    return a-b;
};


const restar4 =  (a,b)=>{
    return a-b;
};


(a,b)=>{
    return a-b;
};
console.log(restar(3,5));

const trasnformarMayuscula = (letra)=>{
    return letra.toUpperCase();
}

const obj1 = {
    apellido:'Pogo'
}

const obj2 ={
    nombre:'fernando'
}

const objt3 = {
    ...obj1,
    ...obj2,
    edad:23
}

console.log(objt3);

const oaAEEnString = JSON.stringify(objt3);
console.log(oaAEEnString)
const oAEClonado = JSON.parse(oaAEEnString);
console.log(oAEEnString);
oaAEEnString.edad = 21;
console.log(oAEClonado);
console.log(objt3);
