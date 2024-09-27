function calculerLongueur() {
    // Récupération des valeurs saisies par l'utilisateur
    const angle = parseFloat(document.getElementById('angle').value);
    const hypotenuse = parseFloat(document.getElementById('hypotenuse').value);

    // Vérification que les valeurs sont correctes
    if (isNaN(angle) || isNaN(hypotenuse)) {
        document.getElementById('resultat').innerText = "Veuillez entrer des valeurs valides.";
        return;
    }

    // Conversion de l'angle en radians
    const angleRadians = angle * (Math.PI / 180);

    // Calcul de la longueur du côté adjacent à l'aide du cosinus
    const longueurAdj = Math.cos(angleRadians) * hypotenuse;

    // Arrondi au dixième
    const longueurArrondie = Math.round(longueurAdj * 10) / 10;

    // Affichage du résultat
    document.getElementById('resultat').innerText = 
        `La longueur du côté adjacent est : ${longueurArrondie} (arrondi au dixième).`;
}

