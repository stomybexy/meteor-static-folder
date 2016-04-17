Package.describe({
  name: 'jonatan:static-folder',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Serve static files from folder outside meteor folder.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stomybexy/meteor-static-folder.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('meteorhacks:async@1.0.0');
  api.use('meteorhacks:picker@1.0.3');



  api.addFiles('polyteor-dev.js', 'server');
  api.addFiles('route.js', 'server');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jonatan:polyteor-dev');
  api.addFiles('polyteor-dev-tests.js');
});
