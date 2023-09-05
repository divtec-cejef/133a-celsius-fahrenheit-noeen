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
   resultat.innerHTML =`Résultat : ${parseFloat(tempC.value) * 9 / 5 + 32} °C`;
});

