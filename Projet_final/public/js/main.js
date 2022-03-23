

function police(){
    let para = document.getElementsByTagName('p');
    for(let i = 0; i < para.length; i++){
    para[i].classList.add("p1");
   }
}
function taille(){
    let grandit = document.getElementById('paragraphes');
    grandit.classList.add("bg-100");
}

function hide(){
    document.getElementById("tohide").hidden = true;
}

function link(){
   location.href = "public/pages/article.html";
}

function history(){
    let length = window.history.length;
document.getElementById("demo").innerHTML = length;}