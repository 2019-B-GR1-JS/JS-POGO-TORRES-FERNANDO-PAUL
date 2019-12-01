// 01-Typescript

// Transpilador
// Tipo de compilador que trasnforma de un lenguaje a otro

// Typescript
// 1) TIPOS DE DATOS
// 2) DECORADORES
// 3) CLASES

// const numero = 0;

const numero: number = 0;
//let nombre : string = "Fernando";
//DUCK TYPING
// INFIRIENDO EL TIPO DE DATO
let nombre= "Fernando"
// nombre = 1; ERROR

let fecha: Date;    // Date -> Clase
                    // Tipo de dato "Date"

fecha = new Date();
let fernando: Estudiante;
// fecha = 1; ERROR
// fecha = "1"; ERROR

fernando = {
    nombre: "Fernando Pogo",
    edad: 23
}
interface Estudiante {
    nombre: string;
    edad: number;
}

function holaMundo():void{
    console.log('Hola');
}

function mensaje(nombre: string):void{
    console.log('Hola');
}

function calculadora(
    numUno: number,
    ...numeros: number[]
): number{
    console.log('Hacer calculadora');
    return numUno;
}

function universidad(
    nombre: string,
    edad?: number, // OPCIONAL
):string {
    return `${nombre} Edad: ${edad}`
}

universidad("Fernando");

interface Departamento{
    nombre: string;
    id:number;
}
interface Facultad {
    nombre: string;
    id: number;
    facultad: Facultad | number;
}

const departamentoSistemas = {
    nombre:"Sistemas",
    id:1,
    facultad : {
        nombre: "Sistemas",
        id:1,
    }
}


const departamentoSistemasSinRelaciones: Facultad = {
    nombre:"Sistemas",
    id:1,
    facultad : 1
}

function imprimirDepartamento(
    departamento: Facultad
){
    //const departamentoID = departamento.facultad as number + 1;
    const departamentoId = <number>departamento.facultad + 1;
}