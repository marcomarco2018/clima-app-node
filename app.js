
const lugar= require('./lugar/lugar');
const clima = require ('./clima/clima')
const argv = require('yargs').options ({

direccion: {

alias: 'd', 
desc: 'Direccion de la ciudad para obtenere el clima ',
demand: true

}
}).argv;

let getInfo = async (direccion) => {
try {
     let coors = await lugar.getLugarLatLng(direccion);//colocamos el await porque esto nos regresa una promesa 
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima n ${ coors.direccion} es de ${ temp }`;

} catch (e) {
    

    return `no se pudeo determinar el clima en ${ direccion }`
}
   
}


getInfo(argv.direccion)
   .then (mensaje => console.log(mensaje))
    .catch(e => console.log(e));









/*lugar.getLugarLatLng(argv.direccion)
     .then(resp => {//la resp es el return de lugar
        console.log(resp);
     })
     .catch (e => console.log(e));


clima.getClima ( 9.9280694,  -84.0907246 )
      .then (temp => console.log(temp))
      .catch ( e=> console.log(e));*/

