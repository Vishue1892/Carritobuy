//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
    //
    listaCursos.addEventListener('click', agregarCurso);
}

// funciones
function agregarCurso(e){
    if(e.target.classList.contains('agregar-carrito')){
    console.log('Presionaste el boton');
    }
}