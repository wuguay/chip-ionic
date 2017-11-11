export default {
  output: {
    format: 'umd'
  },
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/platform-browser',
    '@bomip/core',
    'ionic-angular',
    'meteor-rxjs',
    'meteor/meteor',
    'lodash',
    'lodash/fp',
    'zone.js'
  ],
  globals: {
    '@angular/common': 'ng_common',
    '@angular/core': 'ng_core',
    '@angular/platform-browser': 'ng_browser',
    '@bomip/core': 'bp_core',
    'lodash': 'lo',
    'lodash/fp': 'fp',
    'meteor-rxjs': 'mrxjs',
    'meteor/meteor': 'meteor',
    'reflect-metadata': 'rm',
    'rxjs': 'rxjs',
    'rxjs': 'rxjs'
  }
};
