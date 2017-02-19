Module.register("tv-quotes",{

    // Default configuration is all shows
    defaults: {
        shows: [ "futurama", "thesimpsons" ],
        timeShown: 30, // how long is the quote shown, in seconds
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
        this.quotes = this.config.shows.map(show => allQuotes[show]).reduce();
        
		var self = this;
		setInterval(function() {
			self.updateDom();
        }, this.config.timeShown * 1000);
    },

    nextQuote: function(quotes) {
        var index = Math.floor(Math.random() * quotes.length);
        return quotes[index];
    },

    getDom: function() {
        var quote = nextQuote(this.quotes);

        var container = document.createElement("div");

        var quote = document.createElement("div");
        quote.innerText = quote.txt;
        quote.className = "thin large bright";
        container.appendChild(quote);

        var speaker = document.createElement("div");
        speaker.innerText = "-- " + quote.sp;
        speaker = "thin medium bright";
        container.appendChild(speaker);

        var episode = document.createElement("div");
        episode.innerText = "(" + quote.ep + ")";
        episode = "thin medium bright";
        container.appendChild(episode);

        return container;
    }
});