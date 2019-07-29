function agregar(){
    var nombre = document.getElementById("nomb").value;
    var descripcion = document.getElementById("descrip").value;
    var ubicacion = document.getElementById("ubic").value;
    var costo = document.getElementById("costo").value;

    var fila="<tr><td>"+nombre+"</td><td>"+descripcion+"</td><td>"+ubicacion+"</td><td>"+costo+"</td><td><input type='checkbox'  ></td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML=fila;
    document.getElementById("productos").appendChild(btn);
}

fetch( url, {
    method: "POST"
}).then(function(resp){

}).catch(function(err){

})

