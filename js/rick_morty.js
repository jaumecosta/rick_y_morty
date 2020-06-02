//URL para acceder a las api
const API_URL = "https://rickandmortyapi.com/api/";

const PERSONAJES = "character/:id";
const OPCIONES = { crossDomain: true };
//el usuario introduce la id para acceder a la api del personaje
var elegir = prompt("Pon la id del personaje de Rick y Morty que quieres ver");

//Esta funcion imprimi el resultado de la api
const PERSONAJE = function (personaje) {
    document.write(`Hola yo soy ${personaje.name} mi especie es ${personaje.species} y se encuentra en ${personaje.location.name} y soy de ${personaje.origin.name} ${"<br><br>"}`);
};

//Esta funcion recoje la id y busca en la url las api corresponientes con la id
function pedirPersonaje(id) {
    const URL = `${API_URL}${PERSONAJES.replace(":id", id)}`;
    $.get(URL, OPCIONES, PERSONAJE);
}


// Llama a la api url
pedirPersonaje(elegir);


