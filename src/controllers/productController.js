const dbProducts = require("../database/models/product.js");

module.exports = {
    index: (req,res) => {
        let allProducts = dbProducts.all();
        return res.send({products:allProducts});
    },
    show:(req,res) =>{
        let oneProduct = dbProducts.one(req.params.id);
        return oneProduct != null ? res.send({product:oneProduct}) : res.status(404).send("No se encontro el producto") ;
    }, 
    create: (req,res) =>{
        res.render("product/create");
    },
    save: (req,res) => {
        let allProducts = dbProducts.all();

        let newProduct = {
            ...req.body,
            id: allProducts.length == 0 ? 1 : allProducts[allProducts.length -1].id +1,
            image: req.file.filename
        }

        allProducts.push(newProduct);

        dbProducts.write(allProducts);

        res.redirect("/product")

    },
    edit: (req,res) => {
        let oneProduct = dbProducts.one(req.params.id);
        res.render("product/edit",{product:oneProduct});
    },
    update: (req,res) => {
        let allProducts = dbProducts.all();

        let updatedProducts = allProducts.map( product => {
            if(product.id == req.body.id){
                product = {
                    ...req.body,
                    image: req.file.filename
                }
                return product
            }
            return product
        })

        dbProducts.write(updatedProducts);

        return res.redirect("/product")

    },
    delete: (req,res) => {
        
    }
}    