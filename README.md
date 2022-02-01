# Unicorn Design for BSI CX (Customer Experience) Websites
A unicorn themed design for the *Website* feature in [BSI CX](https://www.bsi-software.com/en/cx). This design is a simple show case, and a great way to learn the basics of design creation for BSI CX.

![Preview image](design-preview.png?raw=true)

Check the [BSI CX design documentation](https://bsi-software.github.io/bsi-cx-docs/) on github.io to learn more about BSI CX designs.

## How to build
Install Node/Npm to run the build for the Unicorn design. Then execute:

  `npm install`

On a Windows machine you can copy the _build.cmd_template_ file and rename it to _build.cmd_:

  `copy build.cmd_template build.cmd`

The _build.cmd_ executes the build with Npm/Webpack and finally uses 7Zip to make a design .ZIP file, to be uploaded into BSI CX. You may need to adjust the variable `ZIP_PATH` and point to the correct 7Zip installation path. Now you are ready to run the design build:

  `build.cmd`

In case you are on a _*Nix_ system, execute the Webpack build manually:

  `npx webpack --mode=production`

And use a tool of your choice to create a design .ZIP file with the contents of the /dist folder.