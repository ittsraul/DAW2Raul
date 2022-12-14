//
let KeepForm = document.getElementsByTagName("form")[0];

//
let AddList = document.getElementsByTagName("button")[0];


KeepForm.addEventListener("submit", ()=>{
    //Captures the inputs in a variable
    let monumento = document.getElementsByTagName("input")[0].value;
    let pais = document.getElementsByTagName("input")[1].value;
    let foto = document.getElementsByTagName("input")[2].value;

    console.log(monumento);
    console.log(pais);
    console.log(foto);

    
    

});

