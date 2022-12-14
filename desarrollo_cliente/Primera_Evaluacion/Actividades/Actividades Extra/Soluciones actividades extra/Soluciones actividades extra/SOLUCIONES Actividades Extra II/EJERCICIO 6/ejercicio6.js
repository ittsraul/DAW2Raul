window.onload = function() {

const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const caja3 = document.getElementById("caja3");
const caja4 = document.getElementById("caja4");

 setInterval( function(){ 

    batidoraUno();
    batidoraDos();
    batidoraTres();
    batidoraCuatro();
}, 1000);

function batidoraUno(){
caja1.style.transition = "4s";
caja1.style.left = "260px";
    if( caja1.id == "caja1" ){
        caja1.id="caja2"
    }else if(caja1.id=="caja2"){
        caja1.id="caja3"
    }else if(caja1.id=="caja3"){
        caja1.id="caja4";
    } else {
        caja1.id="caja1"
    }    
}

function batidoraDos(){
    caja2.style.transition = "5s";
    caja2.style.left = "520px";
    
    if( caja2.id == "caja1" ){
        caja2.id="caja2"
    }else if(caja2.id=="caja2"){
        caja2.id="caja3"
    }else if(caja2.id=="caja3"){
        caja2.id="caja4";
    } else {
        caja2.id="caja1"
    }    
}

function batidoraTres(){
    caja3.style.transition = "6s";
    caja3.style.left = "780px";
    
    if( caja3.id == "caja1" ){
        caja3.id="caja2"
    }else if(caja3.id=="caja2"){
        caja3.id="caja3"
    }else if(caja3.id=="caja3"){
        caja3.id="caja4";
    } else {
        caja3.id="caja1"
    }    
}

function batidoraCuatro(){
    caja4.style.transition = "7s";
    caja4.style.left = "1040px";
    
    if( caja4.id == "caja1" ){
        caja4.id="caja2"
    }else if(caja4.id=="caja2"){
        caja4.id="caja3"
    }else if(caja4.id=="caja3"){
        caja4.id="caja4";
    } else {
        caja4.id="caja1"
    }    
}

}