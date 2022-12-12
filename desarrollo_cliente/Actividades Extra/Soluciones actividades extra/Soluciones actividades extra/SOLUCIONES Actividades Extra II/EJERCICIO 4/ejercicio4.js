window.onload = function() {

const caja1 = document.getElementById("caja1");

setInterval( function(){ 
    batidora();
}, 500);

function batidora(){
    if( caja1.id == "caja1" ){
        caja1.id="caja2"
    }else if(caja1.id=="caja2"){
        caja1.id="caja3"
    }else{
        caja1.id="caja1";
    }    
}

}