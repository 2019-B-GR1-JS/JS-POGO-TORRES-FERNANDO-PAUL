// 06-sunc-async.js

const fileSystem = require('fs');
fileSystem.readFile(
    './05-callbacks.js',
    'utf8',
    callbackLeerArchivo,
);

function callbackLeerArchivo(error, datos){
    if(error){
        consol.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        });
    }
    else
    {
        console.log('datos:', datos);
    }
}

const fileSystem01 = require('fs');
fileSystem01.readFile(
    './01-variables.js',
    'utf8',
    callbackLeerArchivo01,
);

function callbackLeerArchivo01(error, datos){
    if(error){
        consol.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        });
    }
    else
    {
        console.log('datos:', datos);

        const fileSystem = require('fs');
        fileSystem.readFile(
            './02-objetos.js',
            'utf8',
            callbackLeerArchivo02,
        );
    }
}

function callbackLeerArchivo02(error, datos){
    if(error){
        consol.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        });
    }
    else
    {
        console.log('datos:', datos);

        const fileSystem = require('fs');
        fileSystem.readFile(
            './03-operadores.js',
            'utf8',
            callbackLeerArchivo03,
        );
    }
}

function callbackLeerArchivo03(error, datos){
    if(error){
        consol.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        });
    }
    else
    {
        console.log('datos:', datos);

        const fileSystem = require('fs');
        fileSystem.readFile(
            './04-funciones.js',
            'utf8',
            callbackLeerArchivo04,
        );
    }
}

function callbackLeerArchivo04(error, datos){
    if(error){
        consol.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        });
    }
    else
    {
        console.log('datos:', datos);

        const fileSystem = require('fs');
        fileSystem.readFile(
            './05-callbacks.js',
            'utf8',
            callbackLeerArchivo05,
        );
    }
}

function callbackLeerArchivo05(error, datos){
    if(error){
        consol.error({
            mensaje: 'Error leyendo archivo',
            //error: error,
            error,
        });
    }
    else
    {
        console.log('datos:', datos);
    }
}
