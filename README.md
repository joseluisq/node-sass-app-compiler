# Nodejs Sass App Compiler

> Aplicación Nodejs para compilar Sass usando [Libsass](https://github.com/sass/libsass) y [GruntJS](http://gruntjs.com/).

## Instalación
```sh
$ npm install
```

## Configuración (opcional)

Es posible cambiar la ruta de compilación editando el archivo `Gruntfile.js` y actualizando los valores de la variable config:

```js
var config = {
  dist: './css',  // Ruta de salida para la compilación (output)
  src: './scss',  // Ruta de archivos Sass fuente para compilación. (source)
  style: 'style'  // Nombre del archivo Sass principal.
}
```
**Nota:** Por defecto, Gruntjs compilará Sass en un único archivo CSS, en este caso se llama ` style`,  pero también es posible compilar todos los archivos Sass fuente por separado. Para ello cambiar el valor de la propiedad `style` : 

```js
style: '*'  // Compilar todos los archivos `.scss` o `.sass`
```

## Uso

### Iniciar compilador para desarrollo:

Similar a: `compass watch` *(Ruby)*

```sh
$ grunt serve
```

### Compilar Sass para producción:

Similar a: `compass compile -e production --force` *(Ruby)*

```sh
$ grunt build
```

## Autores
  * ![Jose Luis Quintana](http://www.gravatar.com/avatar/a4b15506108e1cf337adccce77602d51?s=24) [Jose Luis Quintana](https://github.com/joseluisq)

## Licencia

MIT
