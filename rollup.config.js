import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import preserveDirectives from "rollup-preserve-directives";
import external from "rollup-plugin-peer-deps-external";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import url from "@rollup/plugin-url";
/* import postcssUrl from "postcss-url"; */

const config = {
  input: "components/index.ts", // Entry point of your library
  output: {
    format: "cjs",
    sourcemap: true, // Generate source map
    dir: "dist/cjs",
    preserveModules: true,
    preserveModulesRoot: "components",
  },
  plugins: [
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({ tsconfig: "./tsconfig.json", declarationDir: "dist/cjs" }), // Transpile TypeScript and TSX
    postcss({
      extract: true, // Extrae los estilos a un archivo separado
      minimize: true, // Minifica los estilos
      plugins: [tailwindcss, autoprefixer],
      extensions: [".css", ".scss"], // Soporta CSS y Sass
      /* plugins: [
        postcssUrl({
          // Rewrite URLs in CSS to match the output folder
          url: (asset) => {
            if (asset.url.includes("../fonts")) {
              return asset.url.replace("..", "./");
            }
            return asset.url;
          },
        }),
      ], */
    }),
    terser({
      compress: {
        directives: false, // Evita eliminar directivas como 'use client'
      },
    }),
    babel({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      babelHelpers: "bundled",
      presets: ["@babel/preset-react", "@babel/preset-typescript"],
    }), // Handle JSX/TSX files
    preserveDirectives(),
    external(),
    url({
      include: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.eot", "**/*.svg"], // Archivos estáticos a manejar
      limit: 0, // Fuerza la salida de archivos (sin inline base64)
      destDir: "dist/fonts", // Carpeta de destino para los archivos estáticos
      fileName: "[name][extname]",
    }),
  ],
  external: ["react", "react-dom"],
};

export default config;
