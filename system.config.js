var map = {
  'app':                                'dist',
  'shim':                               'node_modules/core-js',
  'rxjs':                               'node_modules/rxjs',
  'zonejs':                             'node_modules/zone.js',
  'reflect-metadata':                   'node_modules/reflect-metadata',
  '@angular':                           'node_modules/@angular'
};

var packages = {
  'app':                                { main: 'main', defaultExtension: 'js' },
  'shim':                               { defaultExtension:'js' },
  'rxjs':                               { defaultExtension: 'js' },
  'zonejs':                             { main: 'zone', defaultExtension: 'js' },
  'reflect-metadata':                   { main: 'Reflect', defaultExtension: 'js' }
};

var packageNames = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  '@angular/forms'
];

packageNames.forEach(function(pkgName) {
  packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

System.config({
  map: map,
  packages: packages
});