// This is a dev time package
if(Meteor.isProduction){
  return;
}

var fs, path, folder
fs = Npm.require('fs');
path = Npm.require('path');



//process.env.POLYTEOR_FOLDER = path.join(process.cwd(), '../../../../../../bower_components');
//process.env.POLYTEOR_URL = '/app/bower_components';

// console.log('Url pattern :', process.env.POLYTEOR_URL.replace(/\//g, '\/') + '\/.*');
//
// console.log('mapped folder :', process.env.POLYTEOR_FOLDER);


var getRoutes = Picker.filter(function (req, res) {
    // you can write any logic you want.
    // but this callback does not run inside a fiber
    // at the end, you must return either true or false


    if(process.env.POLYTEOR_REJECT_URL){
      var rejectUrlPattern = new RegExp(process.env.POLYTEOR_REJECT_URL.replace(/\//g, '\/') + '\/.*');

      if(req.url.match(rejectUrlPattern)){
        return false;
      }
    }


    var urlPattern = new RegExp(process.env.POLYTEOR_URL.replace(/\//g, '\/') + '\/.*');


    return req.method == "GET" && req.url.match(urlPattern);
});

getRoutes.route(process.env.POLYTEOR_URL + '/:path*', function (params, req, res, next) {
//    console.log('Handling', req.url);
    var elPath = path.join(process.env.POLYTEOR_FOLDER, params.path);


    Async.runSync(function (done) {
        fs.readFile(elPath, function (err, html) {
            if(err){
                console.log('Error serving ', elPath, err);
                res.end();
            }
            else{
             res.end(html);
            }
            done();
        })
    })
});
