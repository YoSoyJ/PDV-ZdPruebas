const menu = document.querySelector('.categorias');
const menuBtn = document.querySelector('.menuBtn');
const Ini = document.querySelector('.portada');
Ini.classList.add('show');
const Sob = document.querySelector('.sobreMi');
const Met = document.querySelector('.metas')
const Pil = document.querySelector('.pilares')
const Cie = document.querySelector('.cierre')

function mostrarMenu() {
    menu.classList.toggle('show'); // Añade o quita la clase 'show' al menú
}

document.addEventListener('click', function(e){ //se almacena el evento click en la variable "e"
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)){ //detecta el click fuera de la zona de los botones
        menu.classList.remove('show');
    }
});

function toggleCategories(category){
    if(category == 'Ini'){
        Ini.classList.add('show');
        Sob.classList.remove('show');
        Met.classList.remove('show');
        Pil.classList.remove('show');
        Cie.classList.remove('show');             
        menu.classList.remove('show');
    }if(category == 'Sob'){
        Ini.classList.remove('show');
        Sob.classList.add('show');
        Met.classList.remove('show');
        Pil.classList.remove('show');
        Cie.classList.remove('show');
        menu.classList.remove('show');
    }if(category == 'Met'){
        Ini.classList.remove('show');
        Sob.classList.remove('show');
        Met.classList.add('show');
        Pil.classList.remove('show');
        Cie.classList.remove('show');
        menu.classList.remove('show');
    }if(category == 'Pil'){
        Ini.classList.remove('show');
        Sob.classList.remove('show');
        Met.classList.remove('show');
        Pil.classList.add('show');
        Cie.classList.remove('show');
        menu.classList.remove('show');
    }if(category == 'Cie'){
        Ini.classList.remove('show');
        Sob.classList.remove('show');
        Met.classList.remove('show');
        Pil.classList.remove('show');
        Cie.classList.add('show');
        menu.classList.remove('show');
    }
}









// esto se podra eliminar proximamente
function crearZonaConstruccion() {
    return `
        <div class="zonaCons">
            <div>
                <h1>Zona en construcción</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-ruler">
                    <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/>
                    <path d="m8 6 2-2"/><path d="m18 16 2-2"/>
                    <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/>
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                    <path d="m15 5 4 4"/>
                </svg>
            </div>
        </div>
    `;
}


// Función para agregar el contenido a todos los elementos con la clase 'zonaDestino'
function agregarZonaConstruccion() {
    const zonDes = document.querySelectorAll('.zonDes');
    zonDes.forEach(zona => {
        zona.innerHTML = crearZonaConstruccion(); // Inserta el contenido generado en cada elemento
    });
}

// Ejecutar la función cuando la página se haya cargado
window.onload = function() {
    agregarZonaConstruccion();
};