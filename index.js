//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
const PI = 3.1416;


//====Funciones====//
function suma(x, y){
    var resultado = x + y;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje);
}


//===Elementos de la pagina como variables===///
var botonBuscar = document.getElementById("buscar");
var ads = document.getElementById("ads");
var seeAll = document.getElementById("seeAllPosts");
var posts = document.getElementById("posts");
var botonOscuro = document.getElementById("btnOscuro");
var body = document.getElementById("body");
var like = document.getElementById("btnLike");
var cntLike = 0;
var seeAllPics = document.getElementById("seeAllPics");
var morePics = document.getElementById("morePics");
var imgFlip = document.getElementById("imgFlip");
var pics = ["imagenes/rachel-coyne-mTsotT-gMrY-unsplash.jpg","imagenes/jukka-aalho-OaPksPcVp50-unsplash.jpg"]
var menu2 = document.getElementById("menu2");

console.log(botonBuscar);

//==== Eventos===== //
botonBuscar.addEventListener("click", function(){
    if(menu2.classList.contains("ocultar")){
        menu2.classList.remove("ocultar")
        menu2.classList.add("mostrar");
    } else{
        menu2.classList.remove("mostrar")
        menu2.classList.add("ocultar")
    }
});
ads.addEventListener("click",function() {
    ads.classList.add("rojo");
})
seeAll.addEventListener("click",function() {
    if(posts.classList.contains("ocultar")){
        posts.classList.remove("ocultar")
        posts.classList.add("mostrar");
    } else{
        posts.classList.remove("mostrar")
        posts.classList.add("ocultar")
    }
})
botonOscuro.addEventListener("click", function(){
    if(!body.classList.contains("oscuro")){
        body.classList.add("oscuro")
    } else {
        body.classList.remove("oscuro");
    }
})
like.addEventListener("click", function(){
    cntLike++;
    like.innerHTML = cntLike;
})
seeAllPics.addEventListener("click", function(){
    if(morePics.classList.contains("ocultar")){
        morePics.classList.remove("ocultar")
        imgFlip.src = pics[0];
    } else  {
        morePics.classList.add("ocultar");
    }

})
var cambioImg
morePics.addEventListener("mouseover", function(){
    let i = 0;

    function toggle() {
        imgFlip.src = pics[i];
        i = (i + 1) % pics.length;
    }
    cambioImg = setInterval(toggle, 2000);
})
morePics.addEventListener("mouseout", function(){
    clearInterval(cambioImg);
})



