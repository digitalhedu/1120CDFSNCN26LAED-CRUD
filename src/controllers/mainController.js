const products = require("../database/models/product.js");

module.exports = {
    index: (req,res) => {
        let title = 'HOME';
        let styles = ["home"];
        let sales = products.all().filter(oneProduct => oneProduct.discount != 0);
        res.render('index',{title,styles,sales})
    }
}