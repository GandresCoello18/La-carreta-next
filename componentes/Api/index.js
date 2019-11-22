
const https = 'https://api-next-carreta.now.sh';

const get = (ruta) => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${https}/${ruta}`)
    const respuesta = await res.json();
    return respuesta;
}

const getReservaciones = () => {
    get('reservaciones');
}

const getUser = () => {
    get('user');
}

const getPlato = () => {
    get('plato');
}