const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur;
let choixOrdinateur;
let resultat;

// Evenement click sur les  buttons
choixPossibles.forEach(choixPossibles =>choixPossibles.addEventListener('click', (e)=>{
      //Recuperation de l'id des buttons
      choixUtilisateur= e.target.id;
      //On ajoutel'imagequicorrespond au choix
      contenantChoixUtilisateur.innerHTML = `
     <img src="${choixUtilisateur}.png"> 
      `
      generer_choix_ordinateur();
      verification();
}));
// Fonction pour generer le choix de l'ordinateur
function generer_choix_ordinateur(){
      random = Math.floor(Math.random() * 3) +1 ;//Generer des nombres entre1et 3
      if(random===1){
            choixOrdinateur = "pierre";
      }
      if(random===2){
            choixOrdinateur = "papier";
      }
      if(random===3){
            choixOrdinateur = "ciseaux";
      }
      contenantChoixOrdinateur.innerHTML = `
      <img src="${choixOrdinateur}.png"> 
       `
}
// Fonction pour verifier si le joueur  a gagné
function verification(){
      if(choixUtilisateur==choixOrdinateur){
            resultat = "Egalité !"
      }
      if(choixUtilisateur=="pierre"  && choixOrdinateur=="papier"){
            resultat = "Perdu !"
      }
      if(choixUtilisateur=="papier"  && choixOrdinateur=="pierre"){
            resultat = "Gagné !"
      }
      if(choixUtilisateur=="ciseaux"  && choixOrdinateur=="papier"){
            resultat = "Gagné !"
      }
      if(choixUtilisateur=="papier"  && choixOrdinateur=="ciseaux"){
            resultat = "Perdu !"
      }

      contenantResultat.innerText = resultat
}
