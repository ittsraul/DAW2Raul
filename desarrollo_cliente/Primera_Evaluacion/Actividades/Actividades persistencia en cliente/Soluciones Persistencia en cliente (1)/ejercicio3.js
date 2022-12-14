class Usuario {

    constructor(nombre, primerApellido, segundoApellido, dni) {
        this._nombre = nombre;
        this._primerApellido = primerApellido;
        this._segundoApellido = segundoApellido;
        this._dni = dni;
        this._userName = this.constructor.crearUsuario(nombre, primerApellido, segundoApellido);
        this._passWord = this.constructor.crearPassword();
    };


    static crearUsuario(nombre, primerApellido, segundoApellido){
        
        let silabaUno = nombre.split('');
        silabaUno = silabaUno[0]+silabaUno[1];
        
        let silabaDos = primerApellido.split('');
        silabaDos = silabaDos[0]+silabaDos[1];
        
        let silabaTres = segundoApellido.split('');
        silabaTres = silabaTres[0]+silabaTres[1];
        
        let numeroAzar = [1,1,1,1];
        for(let i=0; i<numeroAzar.length; i++){
            numeroAzar[i]=(numeroAzar[i]*Math.floor(Math.random()*10));
        }

        let numeroUsuario=numeroAzar[0]+""+numeroAzar[1]+""+numeroAzar[2]+""+numeroAzar[3];
        return((silabaUno+silabaDos+silabaTres).toLowerCase())+numeroUsuario;
    }

    
    static crearPassword(){

        let mayusculas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
        let minusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                
        let password = [1,1,1,1,1,1,1,1,1];
        let numeroAzar = 0;
        for(let i=0; i<password.length; i++){
            numeroAzar=Math.floor(Math.random()*3);
            if(numeroAzar==0){
                //minusculas
                password[i]=minusculas[Math.floor(Math.random()*27)];
            }else if(numeroAzar==1){
                //mayusculas
                password[i]=mayusculas[Math.floor(Math.random()*27)];
            } else if(numeroAzar==2){
                //numero
                password[i]=Math.floor(Math.random()*10);
            }
        }

        return password[0]+""+password[1]+""+password[2]+""+password[3]+""+password[4]+""+password[5]+""+password[6]+""+password[7]+""+password[8];
         
    };
    
    validarDni(dni){
        if(dni.length===9){
            var arr = dni.split('');
            for(let i=0; i<(arr.length-1); i++){
                if(isNaN(arr[i])){
                    return false;
                }
            }
            let letra = arr[arr.length-1];
            var alfabeto = /[A-Z]/;
            if(alfabeto.test(letra)){
                return true;
            } else {
                return false;
            }            
        } else {
            return false;
        }
    }    

    validarNombre(name){
        if(!isNaN(name)){
            return false;
        }else {
            var arr = name.split('');
            var contador = 0;
            for(let i=0; i<arr.length; i++){
                if(!isNaN(arr[i])){
                    contador = contador +1;
                } 
            }
            if(contador>0){
                return false;
            }else{
                var mayusculas = /[A-Z]/;
                var contadorDos = 0;
                for(let i=1; i<arr.length; i++){
                    if(mayusculas.test(arr[i])){
                        contadorDos = contadorDos+1;
                    }  
                }
                if(mayusculas.test(arr[0])&&(contadorDos===0)){
                    return true;
                } else {
                    return false;    
                }
            }
        }
    };

    validarApellidos(primerApellido,segundoApellido){
        if((this.validarNombre(primerApellido)===true)&&(this.validarNombre(segundoApellido)===true)){
            return true;
        } else {
            return false;
        }
    };  

    //GETTERS y SETTERS
    
    get nombre(){
        return this._nombre;
    };

    set nombre(value){
        this._nombre=value;
    };

    get primerApellido(){
        return this._primerApellido;
    };

    set primerApellido(value){
        this._primerApellido=value;
    };

    get segundoApellido(){
        return this._segundoApellido;
    };

    set segundoApellido(value){
        this._segundoApellido=value;
    };

    get dni(){
        return this._dni;
    };

    set dni(value){
        this._dni=value;
    };

    mostrarUsuario(){
        console.log("Nombre: " + this._nombre); 
        console.log("Apellidos: " + this._primerApellido + " " + this._segundoApellido);
        console.log("DNI: " + this._dni);
        console.log("User name: " + this._userName);
        console.log("Password: " + this._passWord);
    }

};


//------------------------------------------------------------------------------


document.getElementById("formulario3").addEventListener("submit", function(event){
    event.preventDefault();
    guardar();
    this.reset();
});
    document.getElementById("botonBorrarTodos3").addEventListener("click", borrarLocalStorage);
    document.getElementById("botonBorrarRegistro3").addEventListener("click", borrarItem);
    document.getElementById("botonMostrar3").addEventListener("click", mostrarDatos);



function guardar(){
    let nombre = document.getElementById('nombre3').value;
    let primerApellido = document.getElementById('primer_apellido3').value;
    let segundoApellido = document.getElementById('segundo_apellido3').value; 
    let dni = document.getElementById('dni3').value; 

    const user = new Usuario(nombre, primerApellido, segundoApellido, dni);
    if((user.validarNombre(nombre)==false)||(user.validarApellidos(primerApellido,segundoApellido)==false)||(user.validarDni(dni)==false)){
        localStorage.removeItem(dni);    
        alert("Vuelve a introducir tus datos de usuario");
    }

    //convierte objecto a string
    window.localStorage.setItem(dni,JSON.stringify(user));  
}

function mostrarDatos(){
    let dni = document.getElementById('devolverDatos3').value;
    let datos = window.localStorage.getItem(dni);
    datos = JSON.parse(datos);
    let parrafo = document.createElement("p");
    let info = document.createTextNode("Nombre: " + datos._nombre + " " + "Apellidos: " + datos._primerApellido + " " + datos._segundoApellido + " DNI: " + datos._dni + " " + "User name: " + datos._userName + " " + "Password: " + datos._passWord);

    parrafo.appendChild(info);
    let element = document.getElementById("formDiv3");
    element.appendChild(parrafo);
}

function borrarItem(){  
    let dni = document.getElementById('borrarRegistro3').value;
    localStorage.removeItem(dni)
}

function borrarLocalStorage(){ 
    localStorage.clear()
}

