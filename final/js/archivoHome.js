

let pelicula = document.querySelector('.imagenPeli');
pelicula.addEventListener('mouseenter', mostrarBarra);
let iconosPeli = document.querySelector('.iconosPeli');
iconosPeli.hidden = true;

function mostrarBarra(){
    iconosPeli.hidden = false;
}

pelicula.addEventListener('mouseleave', esconderBarra);

function esconderBarra(){
    iconosPeli.hidden = true;
}