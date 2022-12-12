window.onload = function() {

const caja = document.getElementById("caja");
const mover=document.getElementById("mover");

mover.addEventListener("click", function(){
    caja.style.transition = "2s";
    caja.style.left = "260px";
});


}

