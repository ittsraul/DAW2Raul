/* En el archivo index.html proporcionado, implementa un script para que cuando el usuario pase el cursor del ratón sobre el título de primer nivel (h1), el contenido del título (Ca Vicent) se cambie por otro de tú elección (Ejemplo: El teu bar d'esmorzar). */
let eve = document.getElementsByTagName("h1")[0];
  
  eve.addEventListener("mousecenter", () =>{
    eve.textContent = "El gos de ton tio";
  });

  eve.addEventListener("mousecenter", () =>{
    eve.textContent = "CA VICENT";
  });
/*
FORMA 2
  let eve = document.getElementsByTagName("h1")[0];
  eve.addEventListener("mousemove", () =>{
    eve.innerText = "El gos de ton tio";
  });
  */