const API_URL = "https://swapi.dev/api/";
const PERSONAJES_URL = "people/:id";
const OPCIONES = { crossDomain: true };


const PERSONAJE = function (personaje) {
    document.write(`Hola yo soy ${personaje.name}${"<br><br>"}`);
};

function pedirPersonaje(id) {
    const URL = `${API_URL}${PERSONAJES_URL.replace(":id", id)}`;
    $.get(URL, OPCIONES, PERSONAJE);
}
// LAMADAS A LA API_URL
pedirPersonaje(1);
pedirPersonaje(2);
pedirPersonaje(3);


