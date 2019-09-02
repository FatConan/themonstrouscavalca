define(["jquery", "underscore"], function($, _){    return class StyleSwitcher{        constructor(){            this.styleIndex = {};            this.styleList = [];            this.linkList = [];            this.indexStyleSheets();            this.sessionStore = null;            if(typeof(Storage) !== "undefined"){                this.sessionStore = window.sessionStorage;            }            const defaultVals = this.loadStyle();            this.defaultStyleSheet = defaultVals[0];            this.currentStyleIndex = defaultVals[1];            this.setActiveStyleSheet(this.defaultStyleSheet);            this.switcher = $("nav .styler a");            let nextTitle = this.styleList[(this.currentStyleIndex + 1) % this.styleList.length];            this.switcher.prop("title", "Style Switcher - Next up: \"" + nextTitle + "\"");            this.switcher.on("click", function(e){                e.preventDefault();                this.currentStyleIndex = (this.currentStyleIndex + 1) % this.styleList.length;                this.setActiveStyleSheet(this.styleList[this.currentStyleIndex]);                let nextTitle = this.styleList[(this.currentStyleIndex + 1) % this.styleList.length];                this.switcher.prop("title", "Style Switcher - Next up: \"" + nextTitle + "\"");            }.bind(this));        }        getDefault(){            let title;            for(let i = 0; (title = this.styleList[i]); i++){                let styleLink = this.styleIndex[title];                if(styleLink.getAttribute("data-default")){                    return [title, i];                }            }            return [null, null];        }        saveStyle(title){            if(this.sessionStore){                this.sessionStore.style = title;            }        }        loadStyle(){            if(this.sessionStore && this.sessionStore.style){                return [this.sessionStore.style, this.styleList.indexOf(this.sessionStore.style)];            }            return this.getDefault();        }        indexStyleSheets(){            const links = document.getElementsByTagName("link");            let linkEl;            for(let i = 0; (linkEl = links[i]); i++){                let title = linkEl.getAttribute("title");                if(linkEl.getAttribute("rel").indexOf("style") !== -1){                    this.linkList.push(linkEl);                    if(title){                        this.styleIndex[title] = linkEl;                        this.styleList.push(title);                        if(linkEl.getAttribute("rel").indexOf("alt") === -1) {                            this.currentStyleIndex = i;                            this.defaultStyleSheet = title;                        }else{                            linkEl.disabled = true;                            linkEl.setAttribute("rel", "stylesheet");                        }                    }                }            }            for(let i=0; i<this.styleList.length; i++){                let index = this.styleList[i];                if(this.styleIndex[index].getAttribute("rel").indexOf("alt") === -1){                    this.currentStyleIndex = i;                }            }        }        setActiveStyleSheet(title){            if(!this.styleIndex[title]){                title = this.defaultStyleSheet;            }            for(let i=0; i<this.linkList.length; i++){                this.linkList[i].disabled = true;            }            this.styleIndex[title].disabled = false;            this.saveStyle(title);        }    };});