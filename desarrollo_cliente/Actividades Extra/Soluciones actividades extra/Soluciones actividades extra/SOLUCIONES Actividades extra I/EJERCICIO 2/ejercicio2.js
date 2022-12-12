window.onload = function () {
    const derecha = document.getElementById("derecha");
    const abajo = document.getElementById("abajo");
    const replegar = document.getElementById("replegar");

    const caja = document.getElementById("caja");

    derecha.addEventListener("click", function () {
        caja.style.width = "900px";
        caja.style.transition = "2s width";
    });

    abajo.addEventListener("click", function () {
        caja.style.height = "450px";
        caja.style.transition = "2s height";
    });

    replegar.addEventListener("click", function () {
        caja.style.width = "450px";
        caja.style.height = "300px"
        caja.style.transition = "height 2s, width 2s";
    });
}