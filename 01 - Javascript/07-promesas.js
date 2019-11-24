// 07-promesas.js

const fs = require('fs');
fs.readFile(
    '05-callbacks.js',
    'utf8',
    (error, datos)=>{ //Callback

    }
);

const sumarDosNumeros = (correcto)=>{
    return new Promise(
        (resolve, reject)=>{
            if(correcto){
                resolve('YEII');
            }
            else {
                reject('BUUU');
            }
        }
    );
};

const promesaSuarDosNumeros = sumarDosNumeros(false);
console.log('01) Inicial');
promesaSuarDosNumeros
    .then(
        (ok) =>{
            console.log('ok',ok);
        }
    )
    .catch(
        (error) =>{
            console.log('error',error);
    });
console.log('02) Terminar');

const leerArchivo = (pathArchivo)=>{
    return new Promise(
        (res, rej)=>{
            const fs = require('fs');
            fs.readFile(
                pathArchivo,
                'utf8',
                (error, datos)=>{ //Callback
                    if(error)
                    {
                        rej(error);
                    }
                    else{
                        res(datos);
                    }
                }
            );
        }
    );
}

const resultado = leerArchivo('./05-callbacks.js');
resultado
.then(
    (contenidoCallbaksjs)=>{
        console.log(contenidoCallbaksjs);
        return leerArchivo('./04-funciones.js');
    })
.then(
    (contenidofuncionesjs)=>{
        console.log(contenidofuncionesjs);
        return leerArchivo('./03-operadores.js');
    }
)
.then(
    (contenidooperadoresjs)=>{
        console.log(contenidooperadoresjs);
        return leerArchivo('./02-objetos.js');
    }
)
.then(
    (contenidoobjetosjs) =>{
        console.log(contenidoobjetosjs);
        return leerArchivo('./01-variables.js');
    }
)
.then(
    (contenidovariablesjs) =>{
        console.log(contenidovariablesjs);
    }

)
.catch(
    (error)=>{
        console.log('error', error)
    }
);