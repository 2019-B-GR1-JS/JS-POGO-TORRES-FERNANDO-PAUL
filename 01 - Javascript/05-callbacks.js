// 05-callbacks

function calculo (numUno,
                  numDos,
                  funcionCalculo)
{
    const total = numUno + numDos;
    return funcionCalculo(numUno, numDos, total);
}

const numeroUno = 3;
const numeroDos = 5;
const suma = (numUno, numDOS, total) => {
    return total;
}

console.log(suma);  // Definicion FUNCTION
console.log(suma(1, // Ejecución FUNCTION
                2,
                    3));

const resultadoCalculo = calculo(
        numeroUno,
        numeroDos,
    (numUno,numDos,total)=>{
            return total/2;
    }
);

console.log(resultadoCalculo);

function forEachLocal(arreglo, funcion){
    for(let indiceInicial = 0;
        indiceInicial < arreglo.length;
        indiceInicial++)
    {
        funcion (
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        )
    }
}

forEachLocal([1,2,3,4,5], (valorActual, item, arreglo) => {
    console.log("ValorActual:",valorActual,"Item:",item);
});
