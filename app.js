const argv = require('./config/yargs').argv;
const chalk = require('chalk');

const {
    actualizarTarea,
    leerTareas,
    crearTarea,
    borrarTarea
} = require('./gestion/gestionarTareas.js');

const path = './tareas/tareas.json';

const success = chalk.cyan.dim;
const failure = chalk.red.dim;

switch (argv._[0]) {
    case 'crear':
        console.log(crearTarea(path, argv.descripcion)
            ? success('Tarea creada')
            : failure('La tarea ya existe en la bd')
        );
        break;
    case 'listar':
        let tareas = leerTareas(path);
        for (let tarea of tareas) {
            console.log(chalk.cyan.dim("################TODO###################"));
            console.log("descripcion:", tarea.descripcion);
            console.log("completada:", tarea.completada == true ? chalk.green.bold(tarea.completada) : chalk.red.bold(tarea.completada));
            console.log(chalk.cyan.dim("#######################################\n"));
        }
        break;
    case 'actualizar':
        console.log(actualizarTarea(path, argv.descripcion, argv.completada)
            ? success('Tarea actualizada')
            : failure('La tarea no existe en la bd')
        );
        break;
    case 'borrar':
        console.log(borrarTarea(path, argv.descripcion)
            ? success('Tarea borrada')
            : failure('La tarea no existe en la bd')
        );
        break;
    default:
        console.log(chalk`el comando {red.dim ${argv._[0]}} no se reconoce`);
}