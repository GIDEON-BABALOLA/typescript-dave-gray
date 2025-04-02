
//Important Typescript commands
//tsc -w - To watch any changes in the typescript file.
//tsc --init - To initialize a new typescript project
//Important Typescript configuration options
//rootDir - where the typescript files are being watched
//outDir -  where the compiled typescript to javascript are been kept
//target - The version of Javascript typescript is compiling to
//noEmitOnError - When set to true, bad typescript code is not compiled and when set to false bad typescript code is compiled
//When you delete a typescript file, it does not automatically delete the compiled Javascript file, you have to do that automatically
// If you add include to the typescript configuration, and you place only src in the include array, it means that typescript files only in the src will get compiled to javascript
//Also tsc --noEmitOnError -w ensures that without entering the configuration file, you can run typescript code and ensure that if typescript code is wrong, it will not compile to javascript
//Also note that noeEmitOnError only works when the typescript file has not yet been created, If it has been created, the Javascript will
// compile to typescript  
let user = "jest"