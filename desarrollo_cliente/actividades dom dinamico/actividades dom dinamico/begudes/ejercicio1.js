/*
Implementa un script para que en el centro del archivo HTML proporcionado se visualicen tres imágenes con tres textos sobreimpuestos: 'café', 'infusions' y 'alcohol'.
 */

//Agafem cafe
let tableroide = document.getElementsByTagName("td")[0];

let contingutCafe = document.getElementsByTagName('h1')[1];
contingutCafe.style.backgroundImage =  'url("./src/cafe/1.jpg")';
contingutCafe.style.height = "300px";
contingutCafe.style.color = "white";
contingutCafe.style.width = "33%";
contingutCafe.style.display= "inline-block";
 
//Creem alchohol º
let contingutAlcohol = document.createElement('h1');
contingutAlcohol.textContent = "Alcohol";
contingutAlcohol.style.backgroundImage= 'url("./src/alcohol/1.jpg")';
contingutAlcohol.style.height = "300px";
contingutAlcohol.style.color = "white";
contingutAlcohol.style.width = "33%";
contingutAlcohol.style.display= "inline-block";
tableroide.insertAdjacentElement("beforeend",contingutAlcohol);

//Creem infusions
let contingutInfusions = document.createElement('h1');
contingutInfusions.textContent = "Infusions";
contingutInfusions.style.backgroundImage= 'url("./src/infusions/2.jpg")';
contingutInfusions.style.height = "300px";
contingutInfusions.style.color = "white";
contingutInfusions.style.width = "33%";
contingutInfusions.style.display= "inline-block";
tableroide.insertAdjacentElement("beforeend",contingutInfusions);