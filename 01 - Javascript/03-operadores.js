// 03-operadores
const arreglo =[1,2,3,4,5,6,7,8,9,10];

for(const i in arreglo){ //Indices
    console.log('I:',i);
}
for(let i of arreglo) //Valores
{
    console.log('I:',i);
    i++;
}

const respuetaForEach = arreglo.forEach(
    function(valorActual, indice,arreglo){
    console.log('Valor Actual',valorActual,'indice',indice,'arreglo',arreglo)
    }
);

console.log(respuetaForEach);

const resultadoMap = arreglo.map(
    function(valorActual, indice,arreglo){
    return valorActual + 5;
});

console.log(resultadoMap);

const resultadoFilter = arreglo.filter(
    function(valorActual, indice, arreglo){
    return valorActual > 7;
});

console.log(resultadoFilter);

const resultadoSome = arreglo.some(
    function(valorActual, indice, arreglo){
        return valorActual >9 && valorActual < 12
    }
)

console.log(resultadoSome);

const resultadoOperacion = arreglo.map(
    function(valorActual, index, arreglo){
        return valorActual / 2 + 7;
    }
).some(
    function(valorActual, index, arreglo)
    {
        return valorActual > 8;
    }
);

console.log(resultadoOperacion);

const resultadoFind = arreglo.find(
    (valorActual, Indice,Arreglo)=>{
        return valorActual === 8;
    }
);

console.log(resultadoFind);


const resultadoFindIndex = arreglo.findIndex(
    (valorActual, Indice,Arreglo)=>{
        return valorActual === 8;
    }
);

console.log(resultadoFindIndex);

const respuestaReduce = arreglo.reduce(
    (valorInicial, valorActual, indice, Arreglo)=>{
        return valorInicial + 1;
    },100
);

console.log(respuestaReduce);