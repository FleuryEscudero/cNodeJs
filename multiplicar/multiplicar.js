/**
 * Bases de NodeJs
 */

 const fs = require('fs');
 const colors = require ('colors');

    crearArchivo = async (base,limite) => {

        if(!Number(base)){
            throw new Error (`${base} no es un numero`.red);
        }else {
            let data ='';
            for (let i =1; i<= limite; i++){ 
                data += ` ${base} * ${i} = ${base * i}\n`;
            }
                fs.writeFile(`./tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
                    if (err) 
                        throw err;  
                    else
                        return (`tabla-${base}-limite-${limite}.txt`);                
                    });
        }
        
    }

    listarTabla  = (base, limite) =>{    


        console.log('===================='.green);
        console.log(`tabla de ${base}`.yellow);
        console.log('===================='.green);

        for (let i=1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base * i}`.yellow)
        }
        
    }

module.exports = {
    crearArchivo,
    listarTabla
}








