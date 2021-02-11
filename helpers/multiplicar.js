const fs = require('fs');

const crearArchivo = async(base,hasta,options)=>{
            try{

                if(options){
                console.log("====================");
                console.log("   Tabla del ", base);
                console.log("====================");
    
            }
                let salida ='';
                for(let i=1; i<=hasta; i++){
                    salida += `${base} X ${i} = ${base * i}\n`;
                }
                if(options){
                    console.log(salida);
                }
                fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
                
                return`tabla-${base}.txt`;
            } catch (err) {
                 throw err;
            }

}

module.exports = {
    crearArchivo
}