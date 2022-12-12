let KeepNav = document.getElementsByTagName("nav")[0];

function NavHidden(){
    /* KeepNav.style.visibility ="hidden"; */
    KeepNav.style.display ="none";
}
NavHidden();

let captureH2 = document.getElementsByTagName("h2")[0]
captureH2.addEventListener("click", ()=>{
    KeepNav.style.display ="block";
});