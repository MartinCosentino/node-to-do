const description = {

    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'

};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')

.command('crear', 'Crea un elemento por hacer', {
        description
    })
    .command('actualizar', 'Actualiza el estado', {
        description,
        completado
    })
    .command('borrar', 'Borra un elemento de la lista de tareas', {
        description
    })
    .help()
    .argv;


module.exports = {
    argv
}