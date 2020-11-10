const opts = {
    crear: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    },
    actualizar: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completada: {
            alias: 'c',
            default: false,
            desc: 'Estado de la tarea'
        }
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', opts.crear)
    .command('listar', 'Muestra una lista de las tareas')
    .command('actualizar', 'Actualiza el estado de una tarea', opts.actualizar)
    .help()
    .argv;

module.exports = {
    argv
}
