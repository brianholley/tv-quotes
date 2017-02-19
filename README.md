# MirrorMirror Module: tv-quotes

`tv-quotes` is a module for the [MirrorMirror](https://github.com/MichMich/MagicMirror) that shows a random quote from some popular TV shows.

## Installation and configuration
Clone this repository in your `~/MagicMirror/modules/` folder
````javascript
git clone https://github.com/brianholley/tv-quotes
````

Then add it to the modules list in the MirrorMirror `config/config.js` file:
````javascript
modules: [
    {
        module: 'tv-quotes',
        position: 'lower_third',
        config: {
            // By default quotes are selected from 
            shows: [ /* By default all shows are shown*/ ],
            timeShown: 30, // how long is the quote shown, in seconds
            fadeSpeed: 2, // how long does it take to fade in/out, in seconds
        }
    }
]
````

## Shows

'tv-quotes' contains quotes from the following shows:

````javascript
shows: ["futurama", "thesimpsons"];
````

## Configuration options

<table>
	<thead>
		<tr>
			<th>Config setting name</th>
			<th>Description</th>
			<th>Default value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>shows</code></td>
			<td>The array of shows to pick from</td>
			<td>All shows (see below)</td>
		</tr>
		<tr>
			<td><code>timeShown</code></td>
			<td>How long is a quote shown (in seconds)</td>
			<td>30 seconds</td>
		</tr>
		<tr>
			<td><code>fadeSpeed</code></td>
			<td>How long does it take to fade a quote in/out (in seconds)</td>
			<td>2 seconds</td>
		</tr>
	</tbody>
</table>