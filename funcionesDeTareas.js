'use strict';

const process = require('process');
const fs = require('fs');
const rawData = fs.readFileSync("./tareas.json",'utf-8');

const tareas = JSON.parse(rawData);

//args
const arg01 = process.argv[2];

function escribirJSON(tareaNueva){
    let tareaGuardar = [...tareas];
    tareaGuardar.push(tareaNueva);
    console.log(tareaGuardar)
    fs.writeFileSync('./tareas.json', JSON.stringify(tareaGuardar))
}

//tareas[0].titulo
switch(arg01){
    case 'listar' : tareas.forEach(element => {
        console.log(element.titulo + ' - ' + element.estado)
    });
    break;
    case 'escribir' :
        let tareaNueva = {titulo :process.argv[3], estado : process.argv[4]}
        escribirJSON(tareaNueva);
    break;
    case undefined : console.log('Atención - Tienes que pasar a una acción');
    break;
    default : console.log('No entiendo qué quieres hacer')
}

module.exports = tareas;