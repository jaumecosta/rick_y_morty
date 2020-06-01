

/**********************
 * ASINCRONISMO JS
 ************************/

 // CALLBACKS' S

 // COMO SE COMPORTA JS EN SU LINIA DE TIEMPO
 console.log(1);
// la funcion la coge y la añade a la cola de tareas
 setTimeout(() => console.log('Hola Mundo!'), 3000);
 console.log(3);
//cuando llega al final del codigo empieza a sacar las tareas de la cola de tareas

 //tareas Básicas
 for (let i = 0; i < 10000000000; i++) {

 }

//Es una funcion que se pasa a otra funcio como argumento. Es un modo de asegurar que cierto cpdigo no se ejecuta antes de terminar el anterior.

 //libreria externa - Jquery


 //API

 //STAR WARS
 /****************************** */

 // Crear las bases para poder acceder a la API
 const API_URL = "https://swapi.dev/api/";
 const PERSONAJES_URL = "people/:id";
 const OPCIONES = { crossDomain: true };


 const PERSONAJE = function (personaje) {
     document.write(`Hola, yo soy ${personaje.name}${"<br><br>"}`);
 };

function pedirPersonaje(id) {
    const URL = `${API_URL}${PERSONAJES_URL.replace("id:", id)}`;
    $.get(URL, OPCIONES, PERSONAJE);
}

//llamada api
pedirPersonaje(1);
pedirPersonaje(2);
pedirPersonaje(3);
/*
 // persona de Star Wars
const LEIA_URL = `${API_URL}${PERSONAJES_URL.replace(":id", 5)}`;

// esta función se va a convertir en un CallBack
const PERSONAJE = function (personaje){
    document.write(`Hola, yo soy ${personaje.name}`);
}

//Lammando a la libreria JQUESRY y a su funcion get
//PERSONAJE, SE convierte en un CALLBACK
//get, va a ser el encargado de llamar a la funcion PERSONAEJE
//si la recupacion no funciona, o no devuelve datos, nuestra funcion Callback, nunca se va a ejecutar y eso es perfecto
$.get(LEIA_URL, OPCIONES, PERSONAJE/*Callback*/ );
*/
