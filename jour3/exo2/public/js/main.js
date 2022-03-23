
//pour changer les images en fonction de l'index


function changeimg(){
    let img = document.getElementById('image');
    let array = ["./public/assets/chaton.webp", "./public/assets/smiley.svg.png" ];
    let source = document.getElementById("image").getAttribute('src');

    if(source == array[1]){
        img.setAttribute("src",array[0])
        console.log("1ere cond");
    }
    else {
        img.setAttribute("src",array[1])
        console.log("2eme cond");
     }
 }

 
//pour changer l'image en one-shot

function changeimg(){
    let img = document.getElementById('image');
    img.src = "./public/assets/chaton.webp";
}
