/**
 * Configruación del yargs
 */


/**
   * Para la configuracion de yargs se pone la sentencia .command donde el primer argumento es la directriz que vamos a utilizar 
   * en este ej. es listar, donde le ponemos la descripcion en el segundo parametro que es donde explicamos lo que va a realizar
   * el comando que estamos utilizando y el tercero es el objeto para poner la setencia reservada que utilizaremos como es el caso
   * del ejemplo "base" y lo ponemos como requerido con el demand: true
   */


   const opts = { base: { demand: true, alias: 'b'}, 
                  limite: { alias: 'l', default: 10}
                };


  const argv = require ('yargs')
  .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
  .command('listar', 'Imprime  en consola la tabla de multiplicar', opts)
  .help ()
  .argv;


  module.exports ={
      argv
  }