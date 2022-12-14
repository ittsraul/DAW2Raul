window.onload = function(){

    const contenido = "<p>Este es el parrafo ";
    
    let div = document.getElementById("div");

    let variable = 1;

	let timer = setInterval( function(){ 
        escribir(variable);
        variable += 1;
    }, 500 );

    function escribir(variable){
            div.innerHTML += contenido + variable + "</p>";
    }

	document.getElementById("stop").addEventListener("click", function(){ clearInterval(timer); });

}
		