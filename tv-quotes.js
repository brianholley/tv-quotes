Module.register("tv-quotes",{

    // Default configuration is all shows
    defaults: {
        shows: [ "futurama", "thesimpsons" ],
        timeShown: 60, // how long is the quote shown, in seconds
        fadeSpeed: 2, // how long does it take to fade in/out, in seconds
    },

    // TODO: Move to localizable data files
    allQuotes: {
        futurama: [
            { txt: "Good news, everyone!", sp: "Professor Farnsworth", ep: "My Three Suns, S1E7" },
        ],
        thesimpsons: [
            { txt: "I'm Bart Simpson. Who the hell are you?", sp: "Bart Simpson", ep: "Simpsons Roasting on an Open Fire, S1E1" },
        ],
    },

    // loadQuotesFromFile: function(show) {
    //     var file = this.file('quotes/' + show + ".json");
    //     return [];
	// },

    start: function() {
        Log.log("tv-quotes.start");

        var module = this;
        this.quotes = this.config.shows.map(show => module.allQuotes[show]).reduce((acc, val) => acc.concat(...val));
	
        setInterval(() => module.updateDom(), this.config.timeShown * 1000);
    },

    nextQuote: function() {
        var index = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[index];
    },

    getDom: function() {
        var q = this.nextQuote();

        var container = document.createElement("div");

        var quote = document.createElement("div");
        quote.innerHTML = q.txt;
        quote.className = "thin large bright";
        container.appendChild(quote);

        var speaker = document.createElement("div");
        speaker.innerHTML = "-- " + q.sp;
        speaker.className = "thin medium bright";
        speaker.style = "text-align: right";
        container.appendChild(speaker);

        var episode = document.createElement("div");
        episode.innerHTML = "(" + q.ep + ")";
        episode.className = "thin medium bright";
        episode.style = "text-align: right";
        container.appendChild(episode);

        return container;
    }
});
