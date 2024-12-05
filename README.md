# README - Paquete @fsirigm2/obe-example

## PACKAGE.JSON

- Al realizar cambios se debe modificar la versión.
- En el objeto `exports` se deben explicitar los archivos que se disponibilizan para su importación, los que no sean de estilo requieren tipado.
- En `files` se están exportando todas las files salvo las mencionadas explícitamente con negador.
- En `types` están definidos los tipos para los componentes exportados.
- En `peerDependencies` deben incluirse aquellas necesarias para el funcionamiento de los componentes exportados.

## CONSIDERACIONES GENERALES

## En el proyecto

- Al cambiar las props de un componente exportado o crear un nuevo componente, se debe agregar el tipado en components/index.d.ts
- Para disponibilizar los componentes por separado y hacer posible su utilización con tree shaking, agregar la ruta en la prop `"exports"` de `package.json`:
    ```
     "./HeroSearch": {
      "import": "./dist/cjs/central-picker/HeroSearchForm.js",
      "require": "./dist/cjs/central-picker/HeroSearchForm.js",
      "types": "./dist/cjs/components/central-picker/HeroSearchForm.d.ts"
    },

    ```

## En el proyecto donde se vaya a importar el paquete

- Instalar `latest` para asegurarse de tener la última versión (`"@fsirigm2/obe-example": "latest"`).

- Importar los estilos en el archivo `styles/index.scss`: @import "@fsirigm2/obe-example/styles";

### Tree Shaking
- Para hacer tree shaking importar sólo los componentes que se vayan a utilizar, con el siguiente formato: `import HeroSearchForm from "@fsirigm2/obe-example/HeroSearch";`. Si se importara utilizando el formato: `import {HeroSearchForm} from "@fsirigm2/obe-example"`, se carga desde el index, lo que aumenta el tamaño del bundle ya que se cargan todos los componentes.   