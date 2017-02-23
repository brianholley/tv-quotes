'use strict';

Module.register("tv-quotes",{

    // Default configuration is all shows
    defaults: {
        shows: [ "futurama", "kingofthehill", "thesimpsons" ],
        timeShown: 60, // how long is the quote shown, in seconds
        fadeSpeed: 2, // how long does it take to fade in/out, in seconds
    },

    quotesForShow: function(show) {
        var filepath = this.file(`quotes/en/${show}.json`);
        Log.log(`Loading quotes for '${show}' from '${filepath}`);

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.open("GET", filepath, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == "200") {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else {
                        Log.error(`Failed to load ${show}: ${xhr.status}`);
                        reject(`Invalid show in config file: '${show}'`);
                    }
                }
            };
            xhr.send();
        }).then(s => s.quotes.map(q => { 
            return { 
                txt: q.txt,
                sp: q.sp,
                ep: q.ep, 
                show: s.show 
            } 
        }));
    },

    start: function() {
        this.err = "Loading quotes...";

        var module = this;
        Promise.all(this.config.shows.map(show => module.quotesForShow(show))).then(results => {
            module.quotes = results.reduce((acc, val) => acc.concat(...val));
            module.err = "";
            module.updateDom();
            setInterval(() => module.updateDom(module.config.fadeSpeed * 1000), module.config.timeShown * 1000);
        }).catch(err => {
            module.err = err;
            module.updateDom();
        });
    },

    nextQuote: function() {
        var index = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[index];
    },

    getDom: function() {
        var container = document.createElement("div");

        if (this.quotes !== undefined) {
            var q = this.nextQuote();

            var quote = document.createElement("div");
            quote.innerHTML = q.txt;
            quote.className = "regular medium bright";
            container.appendChild(quote);

            var speaker = document.createElement("div");
            speaker.innerHTML = "-- " + q.sp;
            speaker.className = "light small bright";
            speaker.style = "text-align: right";
            container.appendChild(speaker);

            let source = (q.ep !== undefined ? `${q.ep}, ` : "") + q.show;
            var episode = document.createElement("div");
            episode.innerHTML = source;
            episode.className = "light small bright";
            episode.style = "text-align: right";
            container.appendChild(episode);
        }

        if (this.err !== undefined) {
            var message = document.createElement("div");
            message.innerHTML = this.err;
            message.className = "thin small bright";
            container.appendChild(message);
        }

        return container;
    }
});
