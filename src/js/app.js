//Escucha cambios en función
document.addEventListener("DOMContentLoaded", function()
{
    iniciarApp();
});

function iniciarApp()
{
    navegacionFija();
    crearGaleria();
    scrollNav();
}

function navegacionFija()
{
    const barra = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");
    //Seleccionar todo el body
    const body = document.querySelector("body");

    window.addEventListener("scroll", function()
    {
        if(sobreFestival.getBoundingClientRect().bottom < 0)
        {
            barra.classList.add("fijo");
            //Añadir clase para que el header no haga un salto de línea brusco
            body.classList.add("body-scroll");
        }
        else
        {
            barra.classList.remove("fijo");
            body.classList.remove("body-scroll");
        }
    });
}

//Función para scroll al tocar enlaces
function scrollNav()
{
    //Seleccionar elemento enlace
    const enlaces = document.querySelectorAll(".navegacion-principal a");
    //Para cada enlace...
    enlaces.forEach(enlace=>
        {
            //Listener a click en enlace
            enlace.addEventListener("click", function(e)
            {
                //Eliminar movimiento predeterminado
                e.preventDefault();

                //Apuntar a sección pulsada
                const seccionScroll = e.target.attributes.href.value;
                const seccion = document.querySelector(seccionScroll);
                ///Scroll hacia sección con comportamiento suave
                seccion.scrollIntoView({behavior: "smooth"});
            });
        });
}

function crearGaleria()
{
    const galeria = document.querySelector(".galeria-imagenes");

    for(let i = 1; i<=12; i++)
    {
        const imagen = document.createElement("picture");
        imagen.innerHTML = 
        `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen Galería">
        `;
        
        imagen.onclick = function()
        {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }

    function mostrarImagen(id)
    {
        const imagen = document.createElement("picture");
        imagen.innerHTML = 
        `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen Galería">
        `;

        const overlay = document.createElement("div");
        overlay.appendChild(imagen);
        overlay.classList.add("overlay");
        //Eliminar overlay 
        overlay.onclick = function()
        {
            const body = document.querySelector("body");
            body.classList.remove("fijar-body");
            overlay.remove();
        }

        //Crear botón para cerrar imagen
        const cerrarModal = document.createElement("p");
        cerrarModal.textContent = "X";
        cerrarModal.classList.add("btn-cerrar");
        //Eliminar overlay
        cerrarModal.onclick = function()
        {
            const body = document.querySelector("body");
            body.classList.remove("fijar-body");
            overlay.remove();
        }
        //Añadir boton a elemento overlay
        overlay.appendChild(cerrarModal);

        const body = document.querySelector("body");
        body.appendChild(overlay);
        body.classList.add("fijar-body");
    }

}