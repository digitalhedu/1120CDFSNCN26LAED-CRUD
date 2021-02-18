## ***Repaso de la clase 17/2***
___

## Modulos

+ **Method Override**
  + [NPM](https://www.npmjs.com/package/method-override)
  + > Habilitar los verbos HTTP **`PUT`** **`DELETE`**
  + En el entry point
  + En el formulario atributo action  *`/guardar?_method=PUT`*
  + Es un Query String
  + En el controlador es parte del objeto request o req 
  + Todos los datos que viejen por url son recibidos por el **`req.query`**
  + Inician con un **?**
+ **Multer**
  + [NPM](https://www.npmjs.com/package/multer)
  + > Guarda uno o varios archivos
  + En cada una de las rutas
  + En los formularios atributo enctype con el valor de multipart/form-data
  + Usa antes de poner el metodo del controlador
  + Middleware
  + single(),  any() / array(), req.file, req.files
 