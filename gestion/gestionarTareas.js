const fs = require('fs');

let crearArchivoDeTareas = path => {
    fs.writeFileSync(path, JSON.stringify([]), { flag: 'wx' }, err => {
        if (err) throw err;
    });
}

let leerTareas = path => {
    if (!fs.existsSync(path)) crearArchivoDeTareas(path);
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}

let escribirTareas = (path, tareas) => {
    tareas = JSON.stringify(tareas);
    fs.writeFileSync(path, tareas, err => {
        if (err) throw err;
    });
}

let crearTarea = (path, descripcion) => {
    let tareas = leerTareas(path);
    if (tareas.find(tarea => tarea.descripcion === descripcion)) return false;
    tareas.push({
        descripcion: descripcion,
        completada: false
    });
    escribirTareas(path, tareas);
    return true;
};

let actualizarTarea = (path, descripcion, completada) => {
    let tareas = leerTareas(path);
    let tarea = tareas.find(tarea => tarea.descripcion === descripcion);
    if (tarea === undefined) return false;
    tarea.completada = completada;
    escribirTareas(path, tareas);
    return true;
};

let borrarTarea = (path, descripcion) => {
    let tareas = leerTareas(path);
    let newTareas = tareas.filter(tarea => tarea.descripcion !== descripcion);
    if (newTareas.length === tareas.length) return false;
    escribirTareas(path, newTareas);
    return true;
}

module.exports = {
    leerTareas,
    crearTarea,
    actualizarTarea,
    borrarTarea
}