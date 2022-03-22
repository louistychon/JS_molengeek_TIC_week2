const date = new Date();
let heure = date.getHours();
//console.log(date);
//console.log(heure);
console.log(typeof(heure));
console.log(typeof(date));

if (heure > 18){
    document.getElementById('demo');
    demo.innerHTML = "Bonne journée";
    console.log("Bonne journée");
}
else {
    document.getElementById('demo');
    demo.innerHTML = "Bonsoir";
    console.log("Bonsoir");
}