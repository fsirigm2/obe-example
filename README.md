# README - Paquete @fsirigm2/obe-example

## PACKAGE.JSON

- Al realizar cambios se debe modificar la versión.
- En el objeto `exports` se deben explicitar los archivos que se disponibilizan para su importación, los que no sean de estilo requieren tipado.
- En `files` se están exportando todas las files salvo las mencionadas explícitamente con negador.
- En `types` están definidos los tipos para los componentes exportados.
- En `peerDependencies` deben incluirse aquellas necesarias para el funcionamiento de los componentes exportados.

## CONSIDERACIONES GENERALES

- `tailwind.config.js` se incluye entre los archivos explícitamente exportados. El proyecto que consuma el package, obviamente debe tener Tailwind instalado y en su `tailwind.config.js`, debe importar este archivo de esta manera:

  ```

  import type { Config } from "tailwindcss";
  import tailwindConfig from "@fsirigm2/obe-example/tailwind.config.js";

  const config: Config = {
  ...(tailwindConfig as Config),
  };
  export default config;

  ```

- Asimismo, se creó `TailwindConfig.d.ts` y se exportó el tipo en el `package.json` para que TypeScript no tenga problemas de tipado al importarlo en otros proyectos.

- Se evitó el uso de rutas dinámicas en los componentes exportados para no tener problemas de archivos no encontrados al importarlos (e.g., `../components` vs `@components`).

## En el proyecto donde se vaya a importar el paquete

- Instalar `latest` para asegurarse de tener la última versión (`"@fsirigm2/obe-example": "latest"`).

- Se debe agregar a `next.config.js` lo siguiente:

```
    /** @type {import('next').NextConfig} */
    const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        include: /node_modules\/@fsirigm2\/obe-example/,
        });

        return config;
    },
    };

    export default nextConfig;

```

- También se debe agregar el archivo `babel.config.js` con el contenido:

```
    module.exports = {
    presets: ["next/babel", "@babel/preset-flow"],
    };

```

- Por último, importar las hojas de estilo en el `_app`.

- Hecho esto, los componentes pueden importarse como en cualquier librería (siempre que estén explícitamente exportados en el package).
