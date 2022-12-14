window.onload = function() {

const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const caja3 = document.getElementById("caja3");
const mover=document.getElementById("mover");

mover.addEventListener('click', function(){
    caja1.style.transition = "2s";
    caja1.style.left = "260px";
    caja2.style.transition = "3s";
    caja2.style.left = "520px";
    caja3.style.transition = "4s";
    caja3.style.left = "780px";
});


}

