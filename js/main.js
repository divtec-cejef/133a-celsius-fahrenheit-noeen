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
let historique = document.querySelector(".historique");
let buttonReinitialiser = document.querySelector(".reinitialiser");


buttonConvertir.addEventListener("click", () => {
   if(isNaN(parseFloat(tempC.value))) {
      alert(`Erreur ! Entrez un nombre.`)
   } else {
      resultat.innerHTML =`Résultat : <strong>${parseFloat(tempC.value) * 9 / 5 + 32}°F</strong>`;
      historique.innerHTML += `<li>${parseFloat(tempC.value)}°C = ${parseFloat(tempC.value) * 9 / 5 + 32} °F`;
   }
});

buttonReinitialiser.addEventListener("click", () => {
   tempC.value = ``;
   resultat.innerHTML = `Résultat :`;
   historique.innerHTML = ``;
})