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

## En el proyecto donde se vaya a importar el paquete

- Instalar `latest` para asegurarse de tener la última versión (`"@fsirigm2/obe-example": "latest"`).

- Importar los estilos en el archivo `styles/index.scss`: @import "@fsirigm2/obe-example/styles";