// Write your package code here!
// This is a dev time package
if(Meteor.isProduction){
  return;
}
var fs = Npm.require('fs');
var path = Npm.require('path');



var rootFolder = __meteor_bootstrap__.serverDir.split('.meteor')[0];

rootFolder = rootFolder.substring(0, rootFolder.length - 1);

// Find .polyteor-dev.json and define environments variables

try {
    var cfg = JSON.parse(fs.readFileSync(path.join(rootFolder, '.polyteor-dev.json'), 'utf8'));

    process.env.POLYTEOR_FOLDER = (cfg.folder && path.join(rootFolder, cfg.folder)) || path.join(rootFolder, '.polyteor', 'bower_components');
    process.env.POLYTEOR_URL = cfg.url || '/bower_components';
    process.env.POLYTEOR_REJECT_URL= cfg.reject ;

    console.log('staitic-folder => Mapping ', process.env.POLYTEOR_URL, ' to ', process.env.POLYTEOR_FOLDER);
    if(  process.env.POLYTEOR_REJECT_URL){
      console.log('staitic-folder => Ignoring ', process.env.POLYTEOR_REJECT_URL);

    }


} catch (e) {

    console.log('Unable to find and parse .polyteor-dev.json');

    process.env.POLYTEOR_FOLDER = path.join(rootFolder, '.polyteor', 'bower_components');
    process.env.POLYTEOR_URL = '/bower_components';

    console.log('Mapping ', process.env.POLYTEOR_URL, ' to ', process.env.POLYTEOR_FOLDER)


}
