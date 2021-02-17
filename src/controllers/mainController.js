const dbProducts = require("../database/models/product.js");

module.exports = {
    index: (req,res) => {
        if(req.query.keyword == undefined){
            let sales = dbProducts.all().filter(oneProduct => oneProduct.discount > 0);
            return res.send(sales)
        }else{
            let productsFilter = dbProducts.all().filter(oneProduct => oneProduct.description.toLowerCase().includes(req.query.keyword));
            return res.send({keyword: req.query.keyword,products: productsFilter})
        }
    },
}