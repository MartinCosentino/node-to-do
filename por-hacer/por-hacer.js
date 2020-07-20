// const { require } = require("yargs");

const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); //de objeto a Json

    fs.writeFile(`DB/data.json`, data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../DB/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }


}


const crear = (description) => {

    cargarDB();

    let porHacer = {
        description,
        completado: false
    }


    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;


}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (description, completado = true) => {

    cargarDB();


    let index = listadoPorHacer.findIndex(tarea => tarea.description === description)

    if (index => 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (description) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.description !== description
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}