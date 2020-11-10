const argv = require('./config/yargs').argv;
const chalk = require('chalk');

const {
    actualizarTarea,
    listarTareas,
    crearTarea
} = require('./gestion/gestionarTareas.js');

let path = './tareas/tareas.json';

switch(argv._[0]){
    case 'crear':
        crearTarea(path, argv.descripcion);
        break;
    case 'listar':
        console.log(listarTareas(path));
        break;
    case 'actualizar':
        actualizarTarea(path, argv.descripcion, argv.completada);
        break;
    default:
        console.log(chalk`el comando {black.bold ${argv._[0]}} no se reconoce`);
}