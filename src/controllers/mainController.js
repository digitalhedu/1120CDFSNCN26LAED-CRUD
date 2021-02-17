const dbProducts = require("../database/models/product.js");

module.exports = {
    index: (req,res) => {
        if(req.query.keyword == undefined){
            let title = 'HOME';
            let styles = ["home"];
            let sales = dbProducts.all().filter(oneProduct => oneProduct.discount != 0);
            return res.render('index',{title,styles,sales})
        }else{
            let title = 'PRODUCTS';
            let styles = ["products"];
            let productsFilter = dbProducts.all().filter(oneProduct => oneProduct.name.toLowerCase().includes(req.query.keyword));
            return res.render('product/list',{title,styles,products:productsFilter})
        }
    },
}