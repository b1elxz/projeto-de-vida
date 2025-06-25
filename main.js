const botoes=document.querySelectorAll.I(".botao");

for (let=0; i<botoes.length; i++){
   botoes[i].onclick =function (){

    for (let j=0; j<botoes.length; j++){
        botoes[j].classList.remove("ativo");
    }
     botoes [i].classList.add("ativo");
   }
}
