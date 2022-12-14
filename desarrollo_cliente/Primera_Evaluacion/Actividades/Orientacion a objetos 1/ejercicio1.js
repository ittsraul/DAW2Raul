class Usuario{
    constructor(nombre, primerApellido, segundoApellido, dniUsuario, nombreUsuario, Passwd){
        this._nombre = nombre;
        this._primerApellido = primerApellido;
        this._segundoApellido = segundoApellido;
        this._dniUsuario = dniUsuario;
        this._nombreUsuario = nombreUsuario;
        this._Passwd = Passwd;
    }

    static CrearUsuario(){
    
    }

    static CrearPassword(){
        const caracteres = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9",".","-","_","$","&","#","@"];
        for (let i = 0; i < 9; i++) {
            Passwd+=Math.floor(Math.random() * caracteres.length + 1);
        }
        console.log(Passwd);
    }

    static ValidarDNI(){

    }

    static ValidarNombre(){

    }

    static ValidarApellidos(){

    }

    static mostrarUsuario(){

    }

    //GETERS Y SETTERS
    
}