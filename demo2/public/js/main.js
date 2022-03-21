function paragraphes(){
    let para [] = document.getElementsByClassName('intro');
    let i = 0;
    while(para[i]){
    para.innerHTML = "coucou petite perruche";
    para[i++];
}

paragraphes();