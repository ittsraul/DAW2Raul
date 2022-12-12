window.onload = function () {

        const esconderCaja = document.getElementById("escondercaja");
        const caja = document.getElementById("caja");

        esconderCaja.addEventListener("mouseover", function () {
                esconderCaja.innerHTML = "Voilà !";
                caja.style.height = '1250px';
                caja.style.width = '1900px';
                caja.style.padding = '.5em';
        });

        esconderCaja.addEventListener("mouseout", function () {
                esconderCaja.innerHTML = "Où est la tour ?";
                caja.style.visibility = "visible";
                caja.style.width = "450px";
                caja.style.height = "300px";
        });

}



