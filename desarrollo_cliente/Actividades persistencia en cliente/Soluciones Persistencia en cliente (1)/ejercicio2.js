    document.getElementById("formulario2").addEventListener("submit", function(event){
        event.preventDefault();
        guardar();
        this.reset();
    });
    document.getElementById("botonBorrarTodos2").addEventListener("click", borrarLocalStorage);
    document.getElementById("botonBorrarRegistro2").addEventListener("click", borrarItem);
    document.getElementById("botonMostrar2").addEventListener("click", mostrarDatos);


    function guardar(){
        let nombre = document.getElementById('nombre2').value;
        let primerApellido = document.getElementById('primer_apellido2').value;
        let segundoApellido = document.getElementById('segundo_apellido2').value; 
        let dni = document.getElementById('dni2').value; 
        let color = document.getElementById('color2');
        let colorElegido = color.options[color.selectedIndex].text
    
        const usuario = {
            nombre: nombre,
            primerApellido: primerApellido,
            segundoApellido: segundoApellido,
            dni: dni,
            color: colorElegido
        }
    
        //convierte objecto a string
        window.localStorage.setItem(dni,JSON.stringify(usuario)); 
                
    }

    function mostrarDatos(){
        let dni = document.getElementById('devolverDatos2').value;
        let datos = window.localStorage.getItem(dni);
        let parrafo = document.createElement("p");
        let info = document.createTextNode(datos);
        parrafo.appendChild(info);
        let element = document.getElementById("devolver2");
        element.appendChild(parrafo);
        document.getElementById('devolverDatos2').value="";
        datos = JSON.parse(datos);
        document.getElementById("paragraph").style.color = datos.color;
    }

    function borrarItem(){  
        let dni = document.getElementById('borrarRegistro2').value;
        localStorage.removeItem(dni);
        document.getElementById('borrarRegistro2').value="";
    }

    function borrarLocalStorage(){ 
        localStorage.clear();
        document.getElementById('borrarRegistro2').innerHTML="";
    }

