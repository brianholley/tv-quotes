# MagicMirror Module: tv-quotes

`tv-quotes` is a module for the [MagicMirror](https://github.com/MichMich/MagicMirror) that shows a random quote from some popular TV shows.

## Installation and configuration
Clone this repository in your `~/MagicMirror/modules/` folder
````javascript
git clone https://github.com/brianholley/tv-quotes
````

Then add it to the modules list in the MagicMirror `config/config.js` file:
````javascript
modules: [
    {
        module: 'tv-quotes',
        position: 'middle_center',
        config: {
            // By default quotes are selected from all shows
            // See the section below for defaults and configuration options 
        }
    }
]
````

## Shows

'tv-quotes' contains quotes from the following shows:

````javascript
shows: ["futurama", "kingofthehill", "thesimpsons"];
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
			<td>All shows (see Shows list)</td>
		</tr>
		<tr>
			<td><code>timeShown</code></td>
			<td>How long is a quote shown (in seconds)</td>
			<td>60 seconds</td>
		</tr>
		<tr>
			<td><code>fadeSpeed</code></td>
			<td>How long does it take to fade a quote in/out (in seconds)</td>
			<td>2 seconds</td>
		</tr>
	</tbody>
</table>
