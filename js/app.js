const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-carrito');

cargarEventListener();
function cargarEventListener(){
    listaCursos.addEventListener('click', agregarCurso); 
}


//Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatoscurso(cursoSeleccionado);

    }
}
    //leer el contenido del HTML al que le dimos click y ectrae la informacon del curso
function leerDatoscurso(curso){
        console.log(curso);

      //crear un objeto con el cotenido del curso actual
        const infoCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
     
        }
        console.log(infoCurso)
    }