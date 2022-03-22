let  voitures = ["Volvo", "BMW", "Saab", "Ford"];

//avec boucle

for(let i = 0; i < voitures.length; i++){
    console.log(voitures[0]);
    break;
}

//sans boucle

console.log(voitures[0]);

//avec boucle 2
let x;

for(let i = 0; i < voitures.length; i++){
    x = voitures[0];
    //break;
}
console.log(x);