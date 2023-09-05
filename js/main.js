/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Paula Peña-Parra
 * @version 0.2
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code

let tempC = document.querySelector("#tempC");
let buttonConvertir = document.querySelector("button.convertir");
let resultat = document.querySelector(".resultat");

buttonConvertir.addEventListener("click", () => {
   resultat.value ="Résultat : ";
   resultat.innerHTML += parseFloat(tempC.value) * 9 / 5 + 32 + "°C";
});

/**t empC = parseFloat(tempC);

if(isNaN(tempC)) {
    alert("Erreur : entrez un nombre. ");
} else {
    let tempF = tempC * 9 / 5 + 32;
    alert(tempC + "°C = " + tempF + "°F");
}
*/
