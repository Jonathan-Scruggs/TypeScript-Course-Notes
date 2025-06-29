`tsc --init`: creates a `tsconfig.json` file which is used to configure the TypeScript compiler.


#### Watch Mode:
- Option you can pass to `tsc` command as `--watch` or `--w`.
- This tells **TypeScript** that we want to listen for changes and anytime we make a **change to a file it will automatically recompile.**

### Working With Multiple Files:
- If we just use `tsc` on its own it will compile any ts files it comes along.
- Additionally you can  add `-w` flag or `--watch` to watch a recompile all TypeScript files in a directory. 

### The Files Compiler Option:
- We can tell TypeScript to only compile a subset of files.
- Can be achieved using the `files` option. Specifies an allow list of files to include in the program. An error occurs if any of the files can’t be found.
- Not actually in the `compilerOptions` its a top level option.
```ts
"files": ["farmstand.ts", "index.ts"]
```
- Now when we run `tsc` it will only compile these files found in the current directory. If those files don't exist will throw a compilation error.

- However, there are other options. We can also use the `include` and `exclude` options.


### Include and Exclude:
- Include specifies an array of filenames or patterns to include in the program. Resolved relative to the `tsconfig.json` file.
- ` "include": ["src"]`: includes `src directory`
- Exclude specifies an array of file names or patterns that should be skipped when resolving include.
```ts
 "exclude": ["src/dontTouch.ts"]
```
Note: If we use `files` option include will default to that. Otherwise if nothing is specified it will default to `**`.
- The default for exclude is the `node_modules` directory.

### Out Dir option:
- Files will be emitted into this directory. The directory structure of original source files is preserved.
```json
"outDir": "./dist",
```
- Specifies that compiled files will appear in the dist directory.

### Target Option:
- This option governs the output's JavaScript version. 
```json
"target": "es2016",
```
- Compiled JavaScript output will be in es version 2016.

### Strict Option
```json
"strict": true,
```
- Enables all strict type-checking options. Stronger guarantees of program correctness. 
- `strictNullChecks`: When set to `true`, `null` and `undefined` have their own **distinct types** and you'll get a type error if you try to use them where a **concrete value is expected.**
- When you set `strictNullChecks` to `true` TypeScript will raise an error if you have try to access something that you haven't guaranteed to exist. 