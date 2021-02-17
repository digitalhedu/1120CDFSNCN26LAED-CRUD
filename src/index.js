const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");

// Config Initial
app.set("port",process.env.PORT || 3000)
app.listen(app.get("port"), () => console.log("Servidor en http://localhost:" + app.get("port")));

// Middlewares Aplication

app.use(express.static(path.resolve(__dirname,"../public")));
app.use(express.urlencoded({extended:false})); 
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine","ejs")
app.set('views', path.join(__dirname, './views'))

// Routes Aplication

app.use("/",require("./routes/main"));

app.use("/product",require("./routes/product.js"));

app.use("/user",require("./routes/user"));
