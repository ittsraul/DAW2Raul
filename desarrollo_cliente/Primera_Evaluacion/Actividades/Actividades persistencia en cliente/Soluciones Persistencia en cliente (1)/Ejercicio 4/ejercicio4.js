window.onload=function(){

var formulario = function(monumento, pais, foto){
    this.monumento=monumento;
    this.pais=pais;
    this.foto=foto;
}    
  
//Se usa el # porque usa el querySelector
const contenidoFormulario = document.querySelector("#formulario_monumentos");
contenidoFormulario.addEventListener("submit", manejarFormulario);

document.getElementById("botonMostrar").addEventListener("click", mostrarDatos);
document.getElementById("botonBorrarMonumento").addEventListener("click", borrarMonumento);
document.getElementById("botonBorrarTodos").addEventListener("click", borrarLocalStorage);



function manejarFormulario(event){
    event.preventDefault();   

    destName = event.target.elements["monumento"].value;
    destLocation = event.target.elements["pais"].value;
    destPhoto = event.target.elements["foto"].value;

    arrayForm = new Array(new formulario(destName, destLocation, destPhoto));    
    window.localStorage.setItem(destName,JSON.stringify(new formulario(destName, destLocation, destPhoto)));

    
    for(let i=0; i<contenidoFormulario.length; i++){
        contenidoFormulario.elements[i].value = "";
    }

}

function mostrarDatos(){
    let monumento = document.getElementById('verDatos').value;
    let datos = window.localStorage.getItem(monumento);
    datos = JSON.parse(datos);

    document.getElementById("imagen").src=datos.foto;
    document.getElementById("titulo_monumento").innerHTML=datos.monumento;
    document.getElementById("pais_monumento").innerHTML=datos.pais;
    document.getElementById('verDatos').value="";
}


function borrarMonumento(){  
    let monumento = document.getElementById('verDatos').value;
    localStorage.removeItem(monumento);
    document.getElementById('verDatos').value="";
    document.getElementById("imagen").src="https://dbdzm869oupei.cloudfront.net/img/quadres/preview/40446.png";
    document.getElementById("titulo_monumento").innerHTML="";
    document.getElementById("pais_monumento").innerHTML="";
}

function borrarLocalStorage(){ 
    localStorage.clear();
    document.getElementById('verDatos').value="";
    document.getElementById("imagen").src="https://dbdzm869oupei.cloudfront.net/img/quadres/preview/40446.png";
    document.getElementById("titulo_monumento").innerHTML="";
    document.getElementById("pais_monumento").innerHTML="";
}


}
