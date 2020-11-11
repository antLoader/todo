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
        console.log(leerTareas(path));
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