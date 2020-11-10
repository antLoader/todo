const fs = require('fs');
const chalk = require('chalk');

let crearArchivoDeTareas = (path) => {
    let data = [];
    data = JSON.stringify(data);
    fs.writeFileSync(path, data, { flag: 'wx' }, err => {
        if (err) throw err;
    });
}

let leerTareas = path => {
    if (!fs.existsSync(path)) crearArchivoDeTareas(path);
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}

let crearTarea = (path, descripcion) => {
    let tareas = leerTareas(path);
    tareas.push({
        descripcion: descripcion,
        completada: false
    });
    tareas = JSON.stringify(tareas);
    fs.writeFileSync(path, tareas, err => {
        if (err) throw err;
    });
};

let listarTareas = path => {
    return leerTareas(path);
};

let actualizarTarea = (path, descripcion, completada) => {

};


module.exports = {
    listarTareas,
    crearTarea,
    actualizarTarea
}