const fs = require("fs");
const path = require("path");
const products = {
    all: () => {
        // RUTA DEL ARCHIVO JSON
        const file = path.resolve(__dirname,"../products.json")
        // LEEMOS EL ARCHIVO
        const data = fs.readFileSync(file,"utf-8")
        // COVERTIMOS JSON a ARRAY
        return JSON.parse(data)
    },
    one: (id) => {
        // RUTA DEL ARCHIVO JSON
        const file = path.resolve(__dirname,"../products.json")
        // LEEMOS EL ARCHIVO
        const data = fs.readFileSync(file,"utf-8")
        // COVERTIMOS JSON a ARRAY
        const info = JSON.parse(data)
        // BUCAMOS POR EL PARAMETRO ID 
        return info.find( product => product.id == id);
    },
    write: (data) =>{
        // RUTA DEL ARCHIVO JSON
        const file = path.resolve(__dirname,"../products.json")
        // COVERTIMOS ARRAY a JSON
        const info = JSON.stringify(data,null,4)
        // ESCRIBIMOS DATOS EN EL JSON
        fs.writeFileSync(file,info);
    } 
}

module.exports = products;