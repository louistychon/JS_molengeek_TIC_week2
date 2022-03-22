const date = new Date();
let heure = date.getHours();
//console.log(date);
//console.log(heure);
//console.log(typeof(heure)); ***** heure est un number
//console.log(typeof(date)); ***** date est un object

if (heure > 18){
    console.log("Bonne journée");
}
else {
    console.log("nope");
}