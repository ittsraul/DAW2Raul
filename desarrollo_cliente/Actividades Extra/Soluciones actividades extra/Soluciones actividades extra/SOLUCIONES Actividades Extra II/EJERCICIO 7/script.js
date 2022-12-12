(function(){
    
        let tipoConvertidor = "euros";
        const heading = document.querySelector("h1");
        const intro = document.getElementById("parrafoDos");
        const respuestaDiv = document.getElementById("respuesta");
        const form = document.getElementById("conversor");	
    
        document.addEventListener("keydown", function(event){
            var key = event.code;
            if(key==="KeyD"){
                tipoConvertidor = "dolares";
                heading.innerHTML = "Conversor dolares a euros";
                intro.innerHTML = "Indica el numero de dolares y haz click para pasarlos a euros";
    
            }
            else if(key === "KeyE"){
                tipoConvertidor = "euros";
                heading.innerHTML = "Conversor euros a dolares";
                intro.innerHTML = "Indica el numero de euros y haz click para pasarlos a dolares";
    
            }
        });
    
        form.addEventListener("submit", function(event){
                event.preventDefault();
    
                const cantidad = parseFloat(document.getElementById("cantidad").value);
    
                if(cantidad){
                    if(tipoConvertidor==="dolares"){
                        const cantidadConvertida = cantidad * 0.86.toFixed(3);
                        respuestaDiv.innerHTML = cantidad + " dolares son " + cantidadConvertida + " euros";
                    } else {
                        const cantidadConvertida = (cantidad *  1.16).toFixed(3);
                        respuestaDiv.innerHTML = cantidad + " euros son " + cantidadConvertida + " dolares";
                    }
    
    
                } else {
                    respuestaDiv.innerHTML = "<h2>Por favor, indica un numero</h2>";
                }
    
        });

})();