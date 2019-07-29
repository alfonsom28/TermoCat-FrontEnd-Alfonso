function borrar(){

    var tabla= document.getElementById("productos");
    var check=tabla.getElementsByTagName("input");
    for(i=0;i<check.length;i++){
    console.log(check[i].checked);
        if(check[i].checked){
            tabla.deleteRow(i);
        }
    }
    
}