/*
console.log("Hola mundo");


//DOM
//querySelector
let link = document.querySelector("a");
console.log(link);

//querySelectorAll
let links = document.querySelectorAll("a");
console.log(links);

//recorrer
links.forEach(function(link)  {
  console.log(link);
});

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td)  {
  td.addEventListener('click', function(){
    console.log(this);
  })
});


// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//recorrer
links.forEach(function(link){
  //Agregar un evento clic a cada uno de ellos
  link.addEventListener("clic",function(ev){
    ev.preventDefault();
    return false;
  });
});
//Borrar y agregar estrellas
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
  icono.classList.remove("fa-star");
  icono.classList.add("fa-star");
})
*/


// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//recorrer
links.forEach(function(link){
  //Agregar un evento clic a cada uno de ellos
  link.addEventListener("click",function(ev){
    //Evita comportamiento por default
    ev.preventDefault();
    //Modifica animacion de salida
    let content = document.querySelector(".content");
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");
    content.classList.add("fadeOutUp");
    content.classList.add("animated");
    //Pone un delay en la salida para poder visualizar
    setTimeout(function(){
      //redirecciona
      location.href = "/Project_Boletines/index.html";
    },600);
    //setInterval

    return false;

  });
});
