requirejs(["build"], function(){
    'use strict';
    requirejs(["jquery", "domReady", "common/styleswitcher"], function ($, domReady, StyleSwitcher) {
        domReady(function(){
            new StyleSwitcher();
        });
    });
});