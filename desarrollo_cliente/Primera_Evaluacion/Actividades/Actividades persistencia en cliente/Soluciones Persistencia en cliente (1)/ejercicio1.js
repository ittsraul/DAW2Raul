document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    guardar();
    this.reset();
});
    document.getElementById("botonBorrarTodos").addEventListener("click", borrarLocalStorage);
    document.getElementById("botonBorrarRegistro").addEventListener("click", borrarItem);
    document.getElementById("botonMostrar").addEventListener("click", mostrarDatos);


    function guardar(){
        let nombre = document.getElementById('nombre').value;
        let primerApellido = document.getElementById('primer_apellido').value;
        let segundoApellido = document.getElementById('segundo_apellido').value; 
        let dni = document.getElementById('dni').value; 
    
        const usuario = {
            nombre: nombre,
            primerApellido: primerApellido,
            segundoApellido: segundoApellido,
            dni: dni
        }
    
        //convierte objecto a string
        window.localStorage.setItem(dni,JSON.stringify(usuario)); 
        
        
    }

    function mostrarDatos(){
        let dni = document.getElementById('devolverDatos').value;
        let datos = window.localStorage.getItem(dni);
        let parrafo = document.createElement("p");
        let info = document.createTextNode(datos);
        parrafo.appendChild(info);
        let element = document.getElementById("devolver");
        element.appendChild(parrafo);
        document.getElementById('devolverDatos').value="";
    }

    function borrarItem(){  
        let dni = document.getElementById('borrarRegistro').value;
        localStorage.removeItem(dni);
        document.getElementById('borrarRegistro').value="";
    }

    function borrarLocalStorage(){ 
        localStorage.clear();
        document.getElementById('borrarRegistro').innerHTML="";
    }
