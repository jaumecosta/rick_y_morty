const API_URL = "https://rickandmortyapi.com/api/";
const PERSONAJES = "character/:id";
const OPCIONES = { crossDomain: true };
var elegir = prompt("Pon la id del personaje de Rick y Morty que quieres ver");


const PERSONAJE = function (personaje) {
    document.write(`Hola yo soy ${personaje.name} mi especie es ${personaje.species} y se encuentra en ${personaje.location.name} y soy de ${personaje.origin.name} ${"<br><br>"}`);
};

function pedirPersonaje(id) {
    const URL = `${API_URL}${PERSONAJES.replace(":id", id)}`;
    $.get(URL, OPCIONES, PERSONAJE);
}


// LAMADAS A LA API_URL
pedirPersonaje(elegir);


