// Write your package code here!
// Find /public/polyteor-dev.json and define environments variables
var fs = Npm.require('fs');
var path = Npm.require('path');



var rootFolder = __meteor_bootstrap__.serverDir.split('.meteor')[0];

rootFolder = rootFolder.substring(0, rootFolder.length - 1);


try {
    var cfg = JSON.parse(fs.readFileSync(path.join(rootFolder, 'public', 'polyteor-dev.json'), 'utf8'));

    process.env.POLYTEOR_FOLDER = (cfg.folder && path.join(rootFolder, '..', cfg.folder)) || path.join(rootFolder, '..', 'bower_components');
    process.env.POLYTEOR_URL = cfg.url || '/app/bower_components';

    console.log('Mapping ', process.env.POLYTEOR_URL, ' to ', process.env.POLYTEOR_FOLDER);
    
} catch (e) {
    
    console.log('Unable to find and parse public/polyteor-dev.json:', e);

    process.env.POLYTEOR_FOLDER = path.join(rootFolder, '..', 'bower_components');
    process.env.POLYTEOR_URL = '/app/bower_components';

    console.log('Mapping ', process.env.POLYTEOR_URL, ' to ', process.env.POLYTEOR_FOLDER)


}