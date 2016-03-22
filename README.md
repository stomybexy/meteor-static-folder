# Meteor-static-folder

Serve static files from a folder outside Meteor folder.
By default, it serves the folder ```bower_components``` direct sibling of your project folder 
for url pattern ```/app/bower_components/:subpath*```.

To change that, create ```public/polyteor-dev.json``` with the following structure : 

```js
    {
        "folder": "<The folder subpath relatively to the parent folder of your project folder>",
        "url": "<The url path like this: /app/bower_components >"
    }
```

Everytime you edit this file, restart your app.

