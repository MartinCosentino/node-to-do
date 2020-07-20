const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
// const { require } = require("yargs");



let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======Por Hacer======'.green);
            console.log(tarea.description);
            console.log('Estado: ', tarea.completado);
            console.log('====================='.green);
        }

        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.description, argv.completado);

        console.log(actualizado);

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.description);
        console.log(borrado)
        break;

    default:
        console.log('comando no es reconocido')

}