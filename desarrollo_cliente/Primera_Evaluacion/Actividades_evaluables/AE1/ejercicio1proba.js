let lovelace = document.getElementsByClassName("lovelace");

for (let i = 1; i < lovelace.length; i++) {
     lovelace[i].style.display = "none";
    }
console.log(lovelace);

for (let i = 0; i < lovelace.length; i++) {
    const element = lovelace[i];
    /* console.log(element); */
    let BotonOut1 = element.lastChild.previousSibling.childNodes[1];
    let BotonNext1 = element.lastChild.previousSibling.childNodes[3];
    let BotonOut2 = element.lastChild.previousSibling.childNodes[1];
    let BotonNext2 = element.lastChild.previousSibling.childNodes[3];
    console.log(BotonNext1);
    console.log(BotonOut1); 
    console.log(BotonNext2);
    console.log(BotonOut2); 
}
BotonOut1.addEventListener("click", ()=>{
    e.preventDefault();
    if (lovelace[i] !== i) {
        i--;
        BotonOut1.style.display = "block";
    } else {
        BotonOut1.style.display = "none";
    }
});

BotonNext1.addEventListener("click",()=>{
    e.preventDefault();
});

BotonOut2.addEventListener("click", ()=>{
    e.preventDefault();
});

BotonNext2.addEventListener("click", ()=>{
    e.preventDefault();
});






