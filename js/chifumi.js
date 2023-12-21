// Variables
let myChoice;
let computerChoice;
let resultMatch;

// Fenêtre où l'utilisateur saisie un chiffre
myChoice = window.prompt ("Pierre ? Feuille ? Ciseaux ?");
console.log(myChoice);

// Choix de l'ordinateur
computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice < 0.33){
    computerChoice = "pierre";
}
else if (computerChoice < 0.66){
    computerChoice = "feuille"; 
}
else{
    computerChoice = "ciseaux";
}

console.log(computerChoice);

// Règles du jeu
switch(myChoice){
    case computerChoice :
        resultMatch = "Egalité";
    break;
    case "pierre" :
    case "PIERRE" :
    case "Pierre" :
        if (computerChoice == "ciseaux"){
        resultMatch = "Vous avez gagné ! ";
       }
       else{
        resultMatch = "Perdu !";
       }
    break;    
    case "feuille" :
    case "FEUILLE" :
    case "Feuille" :
        if (computerChoice == "pierre"){
        resultMatch = "Vous avez gagné ! ";
       }
       else{
        resultMatch = "Perdu !";
       }
    break;   
    case "ciseaux" :
    case "CISEAUX" :
    case "Ciseaux" :
       if (computerChoice == "feuille"){
        resultMatch = "Vous avez gagné ! ";
       }
       else{
        resultMatch = "Perdu !";
       }
    break;   
    default :
    resultMatch = "Recommencez !";
}

//Resultats
document.write(resultMatch);