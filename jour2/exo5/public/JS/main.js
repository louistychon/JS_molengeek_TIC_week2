let  voitures = ["Volvo", "BMW", "Saab", "Ford"];

//sans boucle

//voitures[0] = "Ford";
//console.log(voitures);

//avec boucle

let x;

for(i = 0; i < voitures.length;i++){
    x = voitures[0] = "Ford";
    console.log(voitures[i]);
}

console.log(x);

