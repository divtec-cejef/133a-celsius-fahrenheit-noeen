/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Paula Peña-Parra
 * @version 0.2
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code

let tempC = prompt("Température en Celsius :")

tempC = parseInt(tempC);

if(isNaN(tempC)) {
    alert("Erreur : entrez un nombre. ");
} else {
    let tempF = tempC * 9 / 5 + 32;
    alert(tempC + "°C = " + tempF + "°F");
}

