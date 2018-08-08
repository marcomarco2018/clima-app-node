const axios = require('axios');


const getLugarLatLng = async (direccion)=>{  //ESTA ES UNA PROMESA CON ASYNC 


    let encodedUrl = encodeURI(direccion);//el enconded hace la url amigable, es decir legible aunque tenga espacios y otras cosas 

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}$key=AIzaSyCZypIJjXUjaMzHdfdk7HcEQ7nZdBleDyQ`)
       // EN VEZ DEL THEN, CON EL AWAIT DIGO ESPERA A QUE ESTA PETICION REGRESA, LO QUE SEA QUE REGRESES LO METES EN RESP
    if (resp.data.status === 'ZERO_RESULTS') {//AQUI VALIDO POR SI VIENE UN ZERO RESULTS. 

        //DISPARAMOS EL REJECT DE LA PROMESA QUE SE GENERA CON AL ASYNC 
        throw new Error (`No hay resultados para la ciudad ${ direccion }`)//no necesito return con esto se sale y ya no sigue ejecutando 
         //ahora trabajo la salida que deseo tener 
    }

    let location = resp.data.results [0];//es posicion 0 porque se hace referencia a la primer aposicion del array 
    let coors = location.geometry.location;
    
   // console.log(resp.status);
    //console.log(JSON.stringify(resp.data, undefined, 2));//para desplegar lo que hay en los array de estos objetos en Visual , es como poder ver todo lo de JSON que vemos en POSTMAN

    return { 

        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}


module.exports = {

    getLugarLatLng
}