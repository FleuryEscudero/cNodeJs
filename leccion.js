/**
 * Bases de NodeJs
 */

 //Requireds

 const fs = require('fs');

 /**
  * Hay 3 tipos de Requireds
  * 1.- Proyecto propio de node, la libreria ya existe en NodeJs y solo se define.
  * 2.- Las librerias que no son propias de Node y que se pueden importar a traves de paquetes ej. express, mongoose, etc.
  * 3.- Los archivos generados por nosotros mismos desde un path donde esta el archivo.
  */

  

let base =6 ;
let data ='';
/**
 * Codigo chaqueto de fleury
 */
// for (let i =1; i<= 10; i++){
//      let c = i * base;
//     console.log(`${base} * ${i} = ${c}`)
// }

/**
 * codigo bien hecho
 */

for (let i =1; i<= 10; i++){ 
    data += ` ${base} * ${i} = ${base * i}\n`;
} 

/**
  * Funcion para guardar en un archivo del proyecto.
  * file .- Dato donde queremos guardar el archivo puede ser la ubicacion del archivo con el nombre del archivo.
  * data .- Es la informacion del archivo que queremos guardar
  * options .- son las caracteristicas del archivo a guardar
  * callback .- resultado de la operacion para revisar si realizo correctamente la instruccion de la creacion del archivo.
  * 
  * Ejem: fs.writeFile(file, data[, options], callback)
  * 
  */

fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo fue grabado con exito!');
  });