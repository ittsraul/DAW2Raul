let a = document.getElementById("parrafoUno");
let b = document.getElementById("parrafoDos");
let c = document.getElementById("parrafoTres");
let d = document.getElementById("parrafoCuatro");


function parrafos(){
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
}

//call the funtion to none display for the pharagrafs
parrafos();

//container to keep the url
let url1 = ["https://sun9-8.userapi.com/impg/kLXGUoJYJ-l3GoTbag0NLZ8qpPhrXVGuJkiMMQ/vSlunzKBfps.jpg?size=510x343&quality=96&sign=dd626f76c9032ab1433e22dd1e618b8c&type=album"];

let url2 = ["https://imgsrc.cineserie.com/2022/04/2079292.jpg?ver=1"];

let url3 = ["https://historia.nationalgeographic.com.es/medio/2020/11/20/judit-polgar_75243733_550x714.jpg"];


let url =  ["https://www.radiosefarad.com/wp-content/uploads/2018/12/los-polgar.png"]
//variable to keep the h1("background-image")
let imagen =  document.getElementsByTagName("h1")[0];


//Event for change the background-image
imagen.addEventListener("mouseover", ()=>{
    imagen.style.backgroundImage = "url("+url1+")"; 
    imagen.textContent = "La familia Polgár";
    imagen.style.color = "white";
    a.innerHTML = b.innerHTML;

    imagen.addEventListener("click", ()=>{
    imagen.style.backgroundImage = "url("+url2+")"; 
    imagen.textContent ="Las hermanas Polgár";
    a.innerHTML = c.innerHTML;
    
        imagen.addEventListener("click", ()=>{
        imagen.style.backgroundImage = "url("+url3+")";
        imagen.textContent ="Judith Polgar";
        a.innerHTML = d.innerHTML;  
        })
})   

    imagen.addEventListener("mouseout", ()=>{
    imagen.textContent = "El experimento Polgár";
    imagen.style.color = "white";
    imagen.style.backgroundImage = "url("+url+")";
    imagen.style.height = "400px";
    imagen.style.lineHeight = "150px";
    imagen.style.textAlign = "center";
    imagen.style.color = "red";
    a.innerHTML = a.innerHTML;
});
 })