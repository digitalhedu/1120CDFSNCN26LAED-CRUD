const express = require("express")
const router = express.Router();
const controller = require("../controllers/productController")
const multer =  require("multer");
const path = require("path")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,"../../public/images"))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
const upload = multer({ storage: storage })  


router.get("/",controller.index);

router.get("/create",controller.create);

router.get("/:id",controller.show);

router.get("/edit/:id",controller.edit);

router.post("/save",upload.single("image"),controller.save);

router.put("/update",upload.single("image"),controller.update);

router.delete("/delete", controller.delete);

module.exports = router;