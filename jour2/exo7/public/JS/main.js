let tableau = [
    ['Belgique', 'Bruxelles'],
    ['France', 'Paris'],
    ['Allemagne', 'Berlin'],
    ['Portugal', 'Lisbonne'],
    ['Espagne', 'Madrid']
];

tableau.push(['Chypre', 'La Valette'],['Turquie', 'Istanbul']); //on push deux éléments supplémentaires dans le tableau parce que sinon c'est pas fun;

let reponses = []; //on crée un tableau vide qui va recevoir nos réponses via un push;
let score = 0;
let taille = tableau.length; //pour determiner le score / variable nombre questions.

//on déclare une fonction pour le questionnaire

function question() {
    for (let i = 0; i < tableau.length; i++) {
     reponses.push(prompt('Quelle est la capitale de ' + tableau[i][0] + '?'));
        if(reponses[i] == tableau[i][1]){
             score += 1;
         }
         else {
             alert('raté, prochaine question');
         }
     }
         alert('ton score est de ' + score + '/' + taille);
         console.log("ton score est de " + score + "/" + taille);
         console.log(reponses);
         alert.close();
         }