//src identifica archivo, dest lo guarda
//Require extrae la funcionalidad de gulp en node_modules
const {src, dest, watch, parallel} = require("gulp"); 
//Se importa la dependencia desde package.json
//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
//Mejorar rendimiento de código
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
//Sourcemaps
const sourcemaps = require("gulp-sourcemaps");
//Imágenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");
//JS
const terser = require("gulp-terser-js");

function css(done)
{
    src("src/scss/**/*.scss") //Identificación de archivo con src
    .pipe(sourcemaps.init()) //Iniciar realización de sourcemap
    .pipe(plumber())
    .pipe(sass()) //Compilación de archivo (.pipe es una acción encadenada)
    .pipe(postcss([autoprefixer(), cssnano()])) //Autoprefixer a archivos css
    .pipe(sourcemaps.write(".")) //Escribir sourcemap
    .pipe(dest("build/css")); //Almacenamiento de archivo en ubicación elegida

    done() //callback, avisa a gulp cuando termina la tarea
}

function imagenes(done)
{
    const opciones =
    {
        optimizationLevel: 3
    };

    src("src/img/**/*.{png,jpg}")
    .pipe(cache(imagemin(opciones)))
    .pipe(dest("build/img"))
    done();
}

function versionWebp(done)
{
    const opciones =
    {
        quality: 50
    };

    src("src/img/**/*.{png,jpg}")
    .pipe(webp(opciones))
    .pipe(dest("build/img"));
    done();
}

function versionAvif(done)
{
    const opciones =
    {
        quality: 50
    };

    src("src/img/**/*.{png,jpg}")
    .pipe(avif(opciones))
    .pipe(dest("build/img"));
    done();
}

//Compilar archivos JS en /build
function javascript(done)
{
    src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(dest("build/js"));

    done();
}

//Función para automatizar compilación de archivo
//CTRL + C detiene el watch
function dev(done)
{
    watch("src/scss/**/*.scss", css); //Cuando cambie el archivo en la dirección, se ejecuta la función creada
    watch("src/js/**/*.js", javascript);
    done();
}

//Llamar funciones en paralelo
exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes,versionWebp,versionAvif,javascript,dev); 
