function empezar(){
    document.getElementById("intro").classList.add('hint');
    document.getElementById("content").style.display="";
    setTimeout(function(){
        document.getElementById("intro").style.display="none";
        document.getElementById("content").classList.add('show');
    }, 150);
}