# Nodejs Sass Compiler

Nodejs compilador para Sass


## Instalación
```sh
$ npm install
```

## Configuración (opcional)

Es posible cambiar ruta de compilación editando el archivo `Gruntfile.js` y actualizando los valores de la variable config:

```js
var config = {
  dist: './css',  // Ruta de salida para la compilación (output)
  src: './scss'  // Ruta de archivos Sass fuente para compilación. (source)
}
```

## Uso

**Iniciar compilador para desarrollo:**

```sh
$ grunt serve
```

**Compilar Sass para producción:**

```sh
$ grunt build
```

## Autores
  * ![Jose Luis Quintana](http://www.gravatar.com/avatar/a4b15506108e1cf337adccce77602d51?s=24) [Jose Luis Quintana](mailto:jose.luis@lanaranjamedia.com)
