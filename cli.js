import fs from 'fs';
import path from 'path';

export const api = {
    // valida si path existe
    existPath: (userPath) => fs.existsSync(userPath),



   // valida se path es absoluta
    isAbsolutePath: (userPath) => path.isAbsolute(userPath),


    // si path es relativa la convierte en absoluta
    convertToAbsolutePath: (userPath) => path.resolve(userPath),

    // valida si es directorio
    isPathDirectory: (userPath) => fs.lstatSync(userPath).isDirectory(),

    // lee directorio
    readDirectory: (userPath) => fs.readdirSync(userPath),

    // valida si tiene  archivos md
    isMdFile: (userPath) => path.extname(userPath) === '.md',
}
//console.log(api.convertToAbsolutePath('../DEV004-data-lovers'))
 //console.log(api.readDirectory('C:\Users\nazlly\OneDrive\Desktop\proyectos\DEV004-md-links'))
// console.log(api.getLinks('C:/Users/Laboratoria/Desktop/LABORATORIA/DEV004-md-links/README.md'))
//console.log(api.existPath("C:\Users\nazlly\OneDrive\Desktop\proyectos\DEV004-data-lovers"))