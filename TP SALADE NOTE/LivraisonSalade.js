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
document.getElementById("1").value = valeur[0];
document.getElementById("2").value = valeur[1];
document.getElementById("3").value = valeur[2];
document.getElementById("4").value = valeur[3];
document.getElementById("5").value = valeur[4];
document.getElementById("6").value = valeur[5];
//FIN JS RECUP URL//


const mesInput = document.querySelectorAll('input');
const submitBtn = document.getElementById('infoBouton');

mesInput.forEach(input => {
    input.addEventListener('input', () => {
        let boolRempli = true;
        mesInput.forEach(input => {
            if (input.type === 'text' && !input.value) {
              boolRempli = false;
            }
        });
        if (boolRempli) {
          infoBouton.removeAttribute('disabled');
        } else {
          infoBouton.setAttribute('disabled', true);
        }
    });
});
