

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

// function history(){
//     let length = window.history();
//     console.log(window.history());
//     document.getElementById("demo").innerHTML = length;}

function slider(){
    const slider = document.querySelector(".slider");
    const hero = document.querySelector(".hero");

    const tl = new TimelineMax();

    tl.fromTo(hero, 1, {height:'0%'}, {height:'50%', ease: Power2.easeInOut })
    .fromTo(hero, 1.2, {width:'100%'}, {width:'80%', ease: Power2.easeInOut })
    .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut })
}

function para_appear(){
    const para = document.querySelector(".para");

    const tl1 = new TimelineMax();
    tl1.fromTo(para, 1.2, {y: "-100%"}, {y: "0%", ease: Power2.easeInOut })
}
para_appear();
slider();