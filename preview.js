/*
 * Copyright (c) BSI Business Systems Integration AG. All rights reserved.
 * http://www.bsiag.com/
 *
 * This build scripts creates a preview to in the ./dist/preview folder
 * Where all {{designBaseUrl}} placeholders are resolved to point to the local
 * filesystem. In production mode this placeholder is set to the location of
 * the resource server at runtime.
 *
 * This script starts a watcher. So once started, files will be automatically
 * updated in the /preview folder when you make changes to the source files.
 */
const PLACEHOLDER = /{{designBaseUrl}}/g;
const REPLACEMENT = '.';
const PREVIEW_DIR = 'dist/preview/';

const replace = require('replace-in-file');
const fse = require('fs-extra')
const watch = require('node-watch');

fse.mkdirp(PREVIEW_DIR)
  .then(copyStaticFiles)
  .then(replacePlaceholders)
  .then(startWatcher)
  .catch(err => {
    console.error(err);
  });

function copyStaticFiles() {
  console.log('Copy static files to ' + PREVIEW_DIR + '...');
  return Promise.all([
    fse.copy('design.html', PREVIEW_DIR + 'design.html'),
    fse.copy('content-elements.html', PREVIEW_DIR + 'content-elements.html'),
    fse.copy('css', PREVIEW_DIR + 'css'),
    fse.copy('img', PREVIEW_DIR + 'img'),
    fse.copy('js', PREVIEW_DIR + 'js')
  ]);
}

function replacePlaceholders() {
  console.log('Replacing placeholders ' + PLACEHOLDER + '...');
  return replace.replaceInFile({
    files: [
      PREVIEW_DIR + 'design.html',
      PREVIEW_DIR + 'content-elements.html'
    ],
    from: PLACEHOLDER,
    to: REPLACEMENT
  });
}

function startWatcher() {
  watch('.', {
    recursive: true,
    filter: f => !/(node_modules|dist)/.test(f)
  }, () => {
    console.log('Watcher triggers re-build...');
    copyStaticFiles()
      .then(replacePlaceholders)
      .catch(err => {
        console.error(err);
      })
  });
}


