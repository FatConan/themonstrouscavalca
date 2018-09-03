console.log("Executing MAIN.js");
requirejs(["build"], function(){
    'use strict';
    requirejs(["jquery", "domReady"], function ($, domReady) {
        domReady(function(){
           console.log("DOMEREADY!");
        });
    });
});