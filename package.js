Package.describe({
    name: 'risul:bootstrap-colorpicker',
    summary: 'Bootstrap Colorpicker: http://mjolnic.com/bootstrap-colorpicker/',
    version: '2.2.0',
    git: 'https://github.com/risul/meteor-bootstrap-colorpicker'
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@1.0");

    api.addFiles([
        "lib/img/alpha-horizontal.png",
        "lib/img/alpha.png",
        "lib/img/hue-horizontal.png",
        "lib/img/hue.png",
        "lib/img/saturation.png"
    ], "client");

    api.addFiles([
        "lib/js/bootstrap-colorpicker.js",
        "lib/css/bootstrap-colorpicker.css"
    ], "client");
    
    api.addFiles('lib/css/overrides.css', 'client');
});