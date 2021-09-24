# serverless-nodejs-template
Template serverless project that includes typescript & jest. Fork this so you don't have to recreate projects from scratch. 

## tsconfig.json
Some notes about the typescript configuration.
- `rootDir` - set to `./src`. All source code needs to be placed in the `./src` folder.
- `outDir` - the output directory of compiled files is set to the `./dist` folder.
- `exclude` - set to exclude all files in `./tests` from compilation. `ts-jest` will transpile them for jest.
