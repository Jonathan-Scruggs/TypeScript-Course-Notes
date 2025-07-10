
### What is Webpack:
- Takes modules with dependencies and generates static assets representing those modules. 
- Essentially bundles all the **modules into one or more output files** that browsers can **understand.**
- Makes it so we have as few files load/run in the browser as possible.


### Setting Up A Webpack Project:
`--save-dev`: Tells npm to install the package as a **development dependency** rather than a regular dependency.

### Installing Webpack Dependencies:

`npm install --save-dev webpack webpack-cli typescript ts-loader`

### Bundle File:
- A bundle file is a single file that contains multiple modules, dependencies and assets combined together by webpack. 
- This results in fewer HTTP requests, dependency resolution, removing unused code, minification(smaller files) and compatibility(transforming modern JS/CSS for older browsers.)

### Source Maps:
- **Source maps** are files that **map the bundled/compiled code** back to the **original source code**, making **debugging easier**.
- We can create a `.map` file such as `bundle.js.map` that contains mapping information. 
- This file tells the browser how to connect the minified code back to the original files. This enables you to debug using original TypeScript/JavaScript code.
1.) Navigate to `tsconfig.json` and set the `sourceMap` field to true.
2.) Tell Webpack to extract map file 
```js
devtool: "inline-source-map",
```
### WebPack Dev Server:
```js
mode: "development",
```
1.) Install webpack-dev-server
- Using this package the bundled code is stored in memory rather than written to the disk.


### Setting Up For Production:
- When mode is set to development we don't get the minification of the bundled file.