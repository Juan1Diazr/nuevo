function Cambiocolor(){


  document.getElementById ("texto").style.color= "blue";
}

function Eliminarenlace(id){

var enlace = document.getElementById('enlace'+id);
if (enlace) {
    enlace.remove();}
    var botonEliminar = document.getElementById('eliminar'+id);
    if (botonEliminar) {
        botonEliminar.remove();
}
}