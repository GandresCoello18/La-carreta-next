
const https = 'https://api-next-carreta.now.sh';
const cors = 'https://cors-anywhere.herokuapp.com';

const get = async (ruta) => {
    const res = await fetch(`${cors}/${https}/${ruta}`)
    return await res.json();
}

const getParams = async (ruta, params) => {
    const res = await fetch(`${cors}/${https}/${ruta}/${params}`)
    return await res.json();
}

const getId = async (ruta, id) => {
    const res = await fetch(`${cors}/${https}/${ruta}?id=${id}`)
    return await res.json();
}    

const post = (ruta, datos) => {
    fetch(`${cors}/${https}/${ruta}`, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then( res => {
        res.json();
    })
    .catch( e => {
        console.log(`POST ${ruta} ` +e)
    })
}

const postFormData = (ruta, datos) => {
    fetch(`${cors}/${https}/${ruta}`, {
        method: 'POST',
        body: datos
    }).then( res => {
        console.log(res);
    })
    .catch( e => {
        console.log(`POST ${ruta} ` +e)
    })
}

const getColletion = (nombre) => {
    return get(nombre);
}

const postColletion = (ruta, object) => {
    post(ruta, object);
}

const login = async (correo, password) =>  {
    const res = await fetch(`${cors}/${https}/user?correo=${correo}&clave=${password}`)
    return await res.json();
}

const token = async (datos) => {
    const res_2 = await fetch(`${cors}/${https}/login`, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    const respuesta_2 = await res_2.json();
    const token = respuesta_2.key;

    const res_3 = await fetch(`${cors}/${https}/login/protected`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return await res_3.json();
}

module.exports = {
    getColletion,
    postColletion,
    login,
    token,
    getId,
    postFormData,
    getParams
}