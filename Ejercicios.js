function Proto() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Pista, utilizar: __proto__
    // Tu código:
}

var usuario = {
    nombre: "default",
    apellido: "default"
    }
var cris = {
    nombre: "cris"
    apellido: "sanz"
}
var cris = usuario.__proto__
console.log(cris.__proto__)


function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:

}

function usuario(){
    this.nombre = nombre;
    this.apellido = apellido
    this.saludar = function (){
        return "Hello World!"
    }
}
var alumno = {
  nombre: "Cristian",
  apellido: "Sanchez"
}
alumno.__proto__ = usuario
console.log(alumno.saludar())

function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'joaco'.reverse() => 'ocaoj' 
    // Pista: Necesitarás usar "this" dentro de "reverse"

}

String.prototype.invertir = function () {
	return this.split("").reverse().join("");
}

var string = "Hola estamos aprendiendo Javascript";
console.log("La cadena es: ", string);
console.log("Al invertirla, es: ", string.invertir());



function changeNombre() {
    // Crea un objeto
    // Agregar un getNombre()
    // Agregar un changeNombre()
    // Mostrar por consola changeNombre() y getNombre(), con nombre distinto en changeNombre() al del constructor y al del getNombre()
    // Tu código:
}
var Usuario = {
    nombre : "Cristian",
    apellido : "Sanchez",
    getNombre : function(nombre){
        return `Mi nombre es ${this.nombre}`
    },
    changeNombre: function(segundonombre){
      return "Mi segundo nombre es" + " " +segundonombre;
    },
  }
  
  let segundonombre = "Adrian";
  console.log(Usuario.getNombre());
  console.log(Usuario.changeNombre(segundonombre));



function Object() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Utilizar obligatoriamente el Metodo Object
    // Tu código:
}

var usuario = {

    nombre: "cristian",
    
    apellido: "sanchez",
    
    }
    
    let nuevo = Object.create(usuario)
    
    console.log(nuevo.__proto__)