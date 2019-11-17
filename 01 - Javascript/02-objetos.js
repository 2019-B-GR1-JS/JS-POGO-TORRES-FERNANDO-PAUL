// 02-objetos.js
let arregloNumber = [1,2,3];
console.log(typeof arregloNumber,"arregloNumber",arregloNumber);
arregloNumber = ["a","b","c"];
console.log(typeof arregloNumber,"arregloNumber",arregloNumber);
arregloNumber = [true,false,true,true];
console.log(typeof arregloNumber,"arregloNumber",arregloNumber);
arregloNumber = [1,"a",true,false];
console.log(typeof arregloNumber,"arregloNumber",arregloNumber);

const arreglo = [1,2,3,4,5,6,7,8,9,10];
console.log('arreglo',arreglo);
arreglo.push(11);
console.log('arreglo',arreglo);
arreglo.pop();
console.log('arreglo',arreglo);
arreglo.splice(1,0,1.1);
console.log('arreglo',arreglo);
arreglo.unshift(0);
console.log('arreglo',arreglo);
const indice = arreglo.indexOf(4);
console.log(indice);
arreglo.splice(indice,1);
console.log('arreglo',arreglo);


function suma (a,b)
{
    if(typeof a === 'number' && typeof b === 'number')
    {
        return a + b;
    }else{
        //throw new Error("Error");
        return 0;
    }
}

console.log(suma(1,2)); // 3
console.log(suma("a","b")); // 0
console.log(suma()); // 0