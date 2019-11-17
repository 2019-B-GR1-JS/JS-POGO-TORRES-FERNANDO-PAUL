// JSON
// Se recomienda hacer que los datos no sean mutables

// Mutable
var nombre0 = "Fernando";

// No Mutable (Inmutable) 
let nombre1 = "Fernando";
const cedula = 1718715053;


let nombres = "Fernando"
console.log(typeof nombres, 'nombres');
let numeros = 1;
console.log(typeof numeros, 'números');
numeros = 1.1;
console.log(typeof numeros, 'números decimales');
let casado = false;
console.log(typeof casado, 'casado')
let hijos = null
console.log(typeof hijos, 'hijos');
let mascotas = [];
console.log(typeof mascotas, 'mascotas');
let hermana = {};
console.log(typeof hermana, 'hermana');

//Condición!

//Truty
//Falsy

if("")
{
    console.log("\"\" = Truty");
}
else
{
    console.log("\"\" = Falsy"); //Falsy
}

if("a")
{
    console.log("\"a\" = Truty"); //Truty
}
else
{
    console.log("\"a\" = Falsy");
}

if(-1)
{
    console.log("-1 = Truty"); //Truty
}
else
{
    console.log("-1 = Falsy");
}

if(0)
{
    console.log("0 = Truty");
}
else
{
    console.log("0 = Falsy"); //Falsy
}

if(1)
{
    console.log("1 = Truty"); //Truty
}
else
{
    console.log("1 = Falsy");
}

if(null)
{
    console.log("null = Truty");
}
else
{
    console.log("null = Falsy"); //Falsy
}

if({})
{
    console.log("{} = Truty"); //Truty
}
else
{
    console.log("{} = Falsy");
}

if([])
{
    console.log("[] = Truty"); //Truty
}
else
{
    console.log("[] = Falsy");
}

// JSON -JS

const fernando = {
    "nombre": 'Fernando',
    'apellido': "Pogo Torres",
    edad: 23,
    hijos: null,
    hermana: {nombre: "Andrea"},
    mascotas:[{
        nombre: "Rex",
    }],
};

console.log(fernando.nombre); // Fernando
console.log(fernando.hermana); // {nombre: "Andrea"}
console.log(fernando.mascotas[0].nombre); //Rex

fernando.sueldo = 287.00;
fernando["deudas"] = 40;

console.log(fernando);
delete fernando.hijos;
console.log(fernando);