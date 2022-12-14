let SegundoNivelAs = document.getElementsByTagName("h2")[0];

//let body = document.body;

document.body.addEventListener("mousemove", (e)=>{
    const cY = e.clientY;
    if (cY > 0 && cY < 50) {
        SegundoNivelAs.style.backgroundColor="darkgoldenrod";
    } else if (cY > 50 && cY <= 100) {
        SegundoNivelAs.style.backgroundColor ="lightgrey";
    } else if (cY > 100 && cY <= 200) {
        SegundoNivelAs.style.backgroundColor ="beige";
    } else if (cY > 200 && cY <= 300) {
        SegundoNivelAs.style.backgroundColor ="blueviolet";
    } else if (cY > 300 && cY <= 400) {
        SegundoNivelAs.style.backgroundColor ="coral";
    } else if (cY > 400 ){
        SegundoNivelAs.style.backgroundColor ="cornflowerblue";
    }

})


