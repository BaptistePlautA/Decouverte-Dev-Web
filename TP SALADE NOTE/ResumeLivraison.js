//JS RECUP URL//
nom = new Array();
valeur = new Array();
/* On enlève le ? */
url = window.location.search.slice(1,window.location.search.length);
console.log(nom+ ' - ' + valeur);
/* récupérer les différents paramètres séparés par un & */
listParam = url.split("&");
for(i=0;i<listParam.length;i++){
    laListe = listParam[i].split("=");
    nom[i] = laListe[0];
    valeur[i] = decodeURIComponent(laListe[1]);
    valeur[i] = valeur[i].replace(/\+/g, ' ');
}
console.log(valeur);
document.getElementById("1").innerHTML = valeur[0];
document.getElementById("2").innerHTML = valeur[1];
document.getElementById("3").innerHTML = valeur[2];
document.getElementById("4").innerHTML = valeur[3];
document.getElementById("5").innerHTML = valeur[4];
document.getElementById("6").innerHTML = valeur[5];
document.getElementById("nom").innerHTML = valeur[6];
document.getElementById("prenom").innerHTML = valeur[7];
document.getElementById("tel").innerHTML = valeur[8];
document.getElementById("ville").innerHTML = valeur[9];
document.getElementById("adresse").innerHTML = valeur[10];
//FIN JS RECUP URL//


//JS DU BOUTON RETOUR ACCUEIL//
var acceuil = document.getElementById("acceuil");

acceuil.addEventListener("click", function() {
  window.location.href = "MaSalade.html";
});

//FIN JS DU BOUTON RETOUR ACCUEIL//