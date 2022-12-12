window.onload=function(){


const desaparecer=document.getElementById("desaparecer");
const oscureceral20=document.getElementById("oscureceral20");
const oscureceral100=document.getElementById("oscureceral100");
const caja = document.getElementById("caja");

desaparecer.addEventListener('click', function(){
    caja.style.opacity = "0";
    caja.style.transition = "opacity 3s"
});


oscureceral20.addEventListener('click', function(){
    caja.style.opacity = "0.2";
    caja.style.transition = "opacity 3s"
});

oscureceral100.addEventListener('click', function(){
    caja.style.opacity = "1";
    caja.style.transition = "opacity 3s"
});


}

