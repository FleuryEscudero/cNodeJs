/**
 * Bases de NodeJs
 */

/** 
 * para iniciar un proyecto usar npm init despues de crear el app.js
 * "yargs" sirve apra hacer validaciones dentro de consola apra poder establecer nuestras funciones como paquetes
*/

 /**
  * Se esta actualizando constantemente este archivo. 
  * 1.-Utilizacion primero del process para recibir la propiedad argv
  * 2.-Se utilizara YARGS para validar que los parametros de la propiedad argv sean validados y utilizados como nosotros deseamos
  * 3.- Se va a refactorizar todo lo que se hizo del yargs creando carpetas de configuracion para crear una nuevala funcionalidad del yargs
  * 4.- Se va a mover todo a la carpeta config. y se importara los archivos apra funcionalidad dentro del archivo apps.js
  * 5.- vamos a poner colores dentro de la consola!
  */

  /**
 * esta base era el primer prototipo para adquirir el numero que ibamos a multiplicar
 */
//let base =9 ;

/**
 * vamos a recibir el parametro base desde la consola utilizando la funcion process con su propiedad argv
 */
//let argv2 =process.argv;
// console.log(argv.base);

//console.log(argv);

// let parametro = argv[2];
// let base = parametro.split('=')[1]
  

/**
 * Para extraer solo el argv que es la propiedad que nos interesa entonces extendemos la importacion con la propiedad que queremos que en este caso es .argv
 * y asi nos evitamos al llamar a la funcion argv el argv.argv para obtener el resultado.
 */
const argv = require ('./config/yargs').argv;
const colors = require ('colors');
const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
    break;
    case 'crear': 
        crearArchivo (argv.base,argv.limite)
        .then (archivo => console.log('Archivo creado:', colors.red(`tabla-${argv.base}-limite ${argv.limite}.txt`)))
        // .then (archivo => console.log('Archivo creado:', colors.red(archivo)))
        .catch (e=>console.log(e));
    break;
    
    default:
        console.log('Comando no reconocido');

}






