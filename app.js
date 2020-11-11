const argv = require('./config/yargs').argv;
const chalk = require('chalk');

const {
    actualizarTarea,
    leerTareas,
    crearTarea
} = require('./gestion/gestionarTareas.js');

const path = './tareas/tareas.json';

switch (argv._[0]) {
    case 'crear':
        console.log(crearTarea(path, argv.descripcion)
            ? chalk.cyan.dim('Tarea creada')
            : chalk.red.dim('La tarea ya existe en la bd')
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
            ? chalk.cyan.dim('Tarea actualizada')
            : chalk.red.dim('La tarea no existe en la bd')
        );
        break;
    default:
        console.log(chalk`el comando {red.dim ${argv._[0]}} no se reconoce`);
}