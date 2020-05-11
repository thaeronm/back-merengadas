//Base64
const fs = require('fs');
const path = require('path');
const base64Img = require('base64-img');

let convert = async (img, name, folder, del) =>{
    try {
        if (del) {
            let folder = './uploads/';
            fs.unlink(folder+del, function (error) {
                if (error) return console.log('Imagen no encontrada');
            });
        }
        let camino  = path.join(__dirname, './../uploads/'+folder);
        let tempath = await base64Img.imgSync(img, camino, name);
        let res     = tempath.split(".");
        let urlpath = folder+name+'.'+res[1];
        return urlpath;
    } catch (error) {
        return console.log(error);
    }
}

module.exports = convert;