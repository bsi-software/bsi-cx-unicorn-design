# Unicorn Design for BSI CX (Customer Experience) Websites
A unicorn themed design for the *Website* feature in [BSI CX](https://www.bsi-software.com/en/cx). This design is a simple show case, and a great way to learn the basics of design creation for BSI CX.

![Preview image](design-preview.png?raw=true)

Check the [BSI CX design documentation](https://bsi-software.github.io/bsi-cx-docs/) on github.io to learn more about BSI CX designs.

## How to build
First install [Node.js and NPM](https://nodejs.org/en/download/), to run the Unicorn design build.

On a **Windows** machine, copy the _build.cmd_template_ file and rename it to _build.cmd_:

  `copy build.cmd_template build.cmd`

The _build.cmd_ executes the build with Npm/Webpack and finally uses [7-Zip](https://www.7-zip.org/) to make a design .ZIP file, to be uploaded into BSI CX. You may need to adjust the variable `ZIP_PATH` and point to the correct 7-Zip installation path. Now you are ready to run the design build:

  `build.cmd`

On a ***Nix** system, execute the Webpack build manually:

```
npm install --ignore-scripts
npx webpack --mode=production
```

And use a tool of your choice to create a design .ZIP file with the contents of the /dist folder.