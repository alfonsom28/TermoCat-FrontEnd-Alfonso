function modificar(){
    var tabla= document.getElementById("sucursales");
    var check=tabla.getElementsByTagName("input");

    for(i=0;i<check.length;i++){
    console.log(check[i].checked);
        if(check[i].checked){
    
            tabla.deleteRow(i);
            var nombre = document.getElementById("nomb").value;
            var descripcion = document.getElementById("descrip").value;
            var ubicacion = document.getElementById("ubic").value;
        
            var fila="<tr><td>"+nombre+"</td><td>"+descripcion+"</td><td>"+ubicacion+"</td><td><input type='checkbox'  ></td></tr>";
        
            var btn = document.createElement("TR");
            btn.innerHTML=fila;
            document.getElementById("sucursales").appendChild(btn);
        }
    }
    
}