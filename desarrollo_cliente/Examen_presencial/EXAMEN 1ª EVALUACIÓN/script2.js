
document.body.addEventListener('mousemove',(e) => {
    let ejeY = e.clientY;
    if(ejeY > 0 && ejeY < 50){
        document.body.style.backgroundColor ="darkgoldenrod";
    } else if(ejeY > 50 && ejeY < 100){
        document.body.style.backgroundColor ="lightgrey";
    }else if(ejeY > 100 && ejeY < 200){
        document.body.style.backgroundColor ="beige";
    }else if(ejeY > 200 && ejeY < 300){
        document.body.style.backgroundColor ="blueviolet";
    }else if(ejeY > 300 && ejeY < 400){
        document.body.style.backgroundColor ="coral";
    }else if(ejeY > 400){
        document.body.style.backgroundColor ="cornflowerblue";
    }
});