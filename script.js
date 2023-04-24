console.log ("Sesion 01 JavaScript")

// Son 7 datos primitivos 
// String "Hola"
console.log ( "Tipo de datos String: Hola")

//Number: 12, -45, 367, 12, +infinity, -infinity, NaN
//Los numericos usan 64 bits para almacenar, pero solo se usan 53 bits para representar 
//el numero 
console.log ("Tipo de dato Number: ", 12, -45, 367, 12, +Infinity, -Infinity, NaN); 
console.log ("Valor maximo:", Number.MAX_VALUE)
console.log ("Valor seguro:", Number.MAX_SAFE_INTEGER)


// BigInt 
//Sirven para representar valores numericos enteros, 
//de los que el tipo number no puede representar o no es seguro

console.log ("MAX_SAFE_INTEGER + 1 :", Number.MAX_SAFE_INTEGER +1)

let myBigInt = 9007199254740991n; // se agrega ;a n al final 
console.log ("Valor de dato BigInt: ", myBigInt); 
console.log ("Valor de dato BigInt +1 : ", myBigInt +1n); 

//Tipo de dato Booleano solo 2 datos: true/false 
console.log ("Tipo de dato boleano", true)
console.log ("Tipo de dato boleano", false)

//Undifined 
//Un dato que es de larado, pero no definido en el tipo 
let myVar; //solo se declara pero mo estq definido 
console.log ("Tipo de dato undifined", myVar); 


//null
//Intencionalmente se borra el tipo de dato 
let myVarNull; //solo se declara 
console.log ("Tipo de dato myVarNull:", typeof (myVarNull) ); //undifined 
myVarNull = "saludos Sr. PP"; //se asigna un string 
console.log ( "Tipo de dato myVarNull:", typeof (myVarNull)); // sting
myVarNull = null; 
console.log ( "Tipo de dato myVarNull:", typeof (myVarNull)); // objet 

//--------------------------------------------------
//Tipos de datos Object 
//Object 

const misDatos = {
    nombre: "Lupita",
    apellido: "Galvan",
    edad: 28, 
    isBelicosa: false, 
    musicaPorGenero: {
        rock: "I wish you were here", 
        corridosTumbados: "Ella baila sola "
    }, 

    nombreCompleto: function fullName() {
        //return misDatos.nombre +  ""  +  misDatos.apellido;  //this hace referencia al objeto
        return this.nombre +"" +  this.apellido
    }
}


const misDatosInstagram = {
    nombre: "Lu",
    apellido: "Galvan",
    edad: null, 
    isBelicosa: false, 
    musicaPorGenero: {
        rock: "I wish you were here", 
        corridosTumbados: "Ella baila sola "
    }, 

    nombreCompleto: function fullName() {
        //return misDatos.nombre +  ""  +  misDatos.apellido;  //this hace referencia al objeto
        return this.nombre +"" +  this.apellido
    }
}

console.log ("Datos completos:", misDatos); 
console.log ("musica por genero", misDatos.musicaPorGenero); 
console.log ( "musica preferida", misDatos.musicaPorGenero.rock); 
console.log ("Nombre completo :", misDatos.nombreCompleto() ); 
console.log ("Nombre completo :", misDatosInstagram.nombreCompleto() ); 
