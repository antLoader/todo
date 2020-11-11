const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer',
    type: 'string'
}

const opts = {
    crear: {
        descripcion
    },
    actualizar: {
        descripcion,
        completada: {
            alias: 'c',
            default: false,
            desc: 'Estado de la tarea'
        }
    },
    borrar: {
        descripcion
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', opts.crear)
    .command('listar', 'Muestra una lista de las tareas')
    .command('borrar', 'Borra una tarea', opts.borrar)
    .command(
        'actualizar',
        'Actualiza el estado de una tarea',
        opts.actualizar,
        argv => argv.completada = argv.completada == 'true' ? true : false
    )
    .help()
    .argv;

module.exports = {
    argv
}
