window.onload=function(){

    let div = document.getElementById("div");
    let classActual = "uno";

    function rotador(){
        if( classActual == "uno" ){
            setTimeout(function(){ 
                div.className="dos"; 
                classActual = "dos"; 
                rotador(); }, 2000 );
        } else {
            setTimeout(function(){ 
                div.className="uno"; 
                classActual = "uno"; 
                rotador(); }, 2000  );
        }
    }

    rotador();
        

}
