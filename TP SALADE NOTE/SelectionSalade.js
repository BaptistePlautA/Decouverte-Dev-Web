

//VAR DU BOUTON//
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const NbIngredients = urlParams.get('mesIngredients');
document.getElementById('NbIngredients').innerHTML = NbIngredients;
var myButton = document.getElementById("myButton");
myButton.style.display = "none";



//JS DU BOUTON//
  myButton.addEventListener("click", function() {
    console.log(NbIngredients, IngredientsRestants);
  });
//JS DU BOUTON//

function ajouterOnClick() {
    var images = document.getElementsByTagName('img');
    for (var i = images.length-1; i >= 0; i--){
      images[i].onclick = ajouter;
      console.log(images);
    }
}       


var elementDest = document.getElementById("bowl");
var elementSrc = document.getElementById("fond");
const currentId = document.getElementById("bowl");
var IngredientsRestants = 0;

function ajouter(e) {
    /* On selection l'image à deplacer */
    var elementImg = e.target;
    
    /*Rajoute l'ingrédient à droite*/
    if((elementImg.parentNode.parentNode === elementSrc)  && (IngredientsRestants < NbIngredients)){
      console.log(elementImg.parentNode.parentNode);
      console.log(elementSrc); 
      console.log(IngredientsRestants);
      console.log(NbIngredients);

      ///Si jamais on veut mettre plusieurs fois un même ingrédient on fait une copie à gauche
      var elementImgCopy = document.createElement("img");
      elementImgCopy.src = elementImg.src;
      elementImgCopy.alt = elementImg.alt;
      elementImgCopy.id = elementImg.id;

      elementDest.appendChild(elementImgCopy);

      // Créer un nouvel objet de type balise span
      var mySpan = document.createElement("span");
      // Créer un nouvel objet de type texte pour indiquer
      // Ajouter le span juste avant elementImg
      elementDest.appendChild(mySpan);
      
      /* compter le nb d'images choisies           */
      IngredientsRestants++ ;
      document.getElementById(IngredientsRestants).value =elementImg.id;
      console.log("Nombre actuel " + IngredientsRestants);
      document.getElementById("IngredientsRestants").innerText=IngredientsRestants;
      if(IngredientsRestants >= NbIngredients){
        console.log('Tous les ingrédients sont réunis');
        console.log(IngredientsRestants);
        console.log(NbIngredients);
        console.log(elementImg.parentNode);
        console.log(elementSrc);
        myButton.style.display = "block";
      }
    }
    else {
      console.log('C est trop !');
      console.log(IngredientsRestants);
      console.log(NbIngredients);
    }
  } 



/* ------------------------------------------------------------  */
/* On charge la fonction ajouterOnClicj au chargement de la page */
/* ------------------------------------------------------------  */
document.body.onload = ajouterOnClick;
/* ------------------------------------------------------------  */
