let effectOfTheImage = document.getElementsByTagName("h1")[0];

effectOfTheImage.addEventListener("mouseover", ()=>{
    effectOfTheImage.style.color = "black";
    effectOfTheImage.style.opacity = 0.5;
});

effectOfTheImage.addEventListener("mouseleave", ()=>{
    effectOfTheImage.style.color = "white";
    effectOfTheImage.style.opacity = 1;
}); 