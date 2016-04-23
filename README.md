# Meteor-static-folder

Serve static files from a folder outside Meteor folder during development.
By default, it serves the folder ```.polyteor/bower_components``` relatively to your project root folder.
for url pattern ```/bower_components/:subpath*```.

To change that, create ```.polyteor-dev.json``` in the root of your project with the following structure :

```js
    {
        "folder": "<The folder subpath relatively to the root folder of your project>",
        "url": "<The url path like this: /app/bower_components >"
    }
```

Everytime you edit this file, restart your app.
