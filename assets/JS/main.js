function mostrar(div) {
    ocultar();
    var divWork = document.getElementById(div);
    divWork.style.display='';
}

function ocultar(){
     document.getElementById("text1").style.display='none';
     document.getElementById("text2").style.display='none';
     document.getElementById("text3").style.display='none';
}
