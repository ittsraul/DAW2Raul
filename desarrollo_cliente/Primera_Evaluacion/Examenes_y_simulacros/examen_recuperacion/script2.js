document.body.addEventListener("keydown", (event) => {
    let letra = event.key;
    if (letra === "A") {
        document.body.style.backgroundColor = "coral";
    } else if (letra === "B") {
        document.body.style.backgroundColor = "darkgoldenrod";
    } else if (letra === "C") {
        document.body.style.backgroundColor = "darkorchid";
    } else if (letra === "D") {
        document.body.style.backgroundColor = "lightgrey";
    } else if (letra === "E") {
        document.body.style.backgroundColor = "beige";
    } else{
        document.body.style.backgroundColor = "white";
    }
});




