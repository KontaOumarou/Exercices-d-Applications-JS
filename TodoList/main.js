// Selecteurs
const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDocontainer");
const inputField = document.getElementById("inputField");

//Ecouteurs d'evenements
addToDoButton.addEventListener("click", ()=> {
      // Verifier si l'input n'est pas vide
      if(inputField.value != ""){
            //Si l'input n'est pas vide créer un paragraph
            var paragraph = document.createElement('p')
      }
      // Valoriser ce paragraph avec le contenu de l'input
      paragraph.innerText = inputField.value;
      // Styliser le paragraph
      paragraph.classList.add('paragraph_style')

      //Inser le paragraph dans l'element todoContainer
      toDoContainer.appendChild(paragraph);
      //Vider l'input quand le paragraph est ajouté
      inputField.value = "";
      // Barrer la paragraph quand on click dessus
      paragraph.addEventListener('click', ()=> {
           paragraph.classList.add("paragraph_click");
      } );
      // Supprimer quend on double click
      paragraph.addEventListener('dblclick', ()=> {
            toDoContainer.removeChild(paragraph);
       } );
} );
// alert("Test reussi !")
