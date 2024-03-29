<html lang="en">
	<head>
		<title>three.js</title>
		<meta charset="utf-8">
		<style>

			@font-face {
				font-family: 'inconsolata';
				src: url('files/inconsolata.woff') format('woff');
				font-weight: normal;
				font-style: normal;
			}

			body {
				background-color: #ffffff;
				margin: 0px;
				font-family: 'inconsolata';
				font-size: 15px;
				overflow: hidden;
			}

			a {
				color: #2194CE;
				text-decoration: none;
			}

			h1 {
				margin-top: 30px;
				margin-bottom: 40px;
				font-size: 25px;
				font-weight: normal;
			}

			h2 {
				font-size: 20px;
				font-weight: normal;
			}

			#panel {
				position: absolute;
				width: 310px;
				height: 100%;
				overflow: scroll;
				background: #fafafa;
			}

				#panel #list {
					padding: 0px 20px;
					line-height: 18px;
				}

				#panel #list .link {
					color: #2194CE;
					text-decoration: none;
					cursor: pointer;
				}

				#panel #list .selected {
					color: #ff0000;
				}

					#panel #list .link:hover {
						text-decoration: underline;
					}

			#viewer {
				position: absolute;
				left: 310px;
				width: calc(100% - 310px);
				height: 100%;
				border: 0px;
			}

			#button {
				position: fixed;
				top: 20px;
				right: 20px;
				padding: 8px;
				color: #fff;
				background-color: #555;
				opacity: 0.7;
			}

				#button:hover {
					cursor: pointer;
					opacity: 1;
				}

		</style>
	</head>
	<body>

		<div id="panel">
			<div id="list">
				<h1><a href="http://threejs.org">three.js</a> examples</h1>
			</div>
		</div>
		<iframe id="viewer" allowfullscreen></iframe>

		<script>

		var files = {
			"geometry": [
				"webgl_geometry_lathe",
				"webgl_geometry_ArrowHelper",
				"webgl_geometry_PrismGeometry",
			],
			"modifiers": [
				"webgl_modifier_dent",
				"webgl_modifier_bend",
				"webgl_modifier_skew",
				"webgl_simple_modifiers",
			],
			"brush": [
				"webgl_brush",
				"webgl_brush_game",
			],
			"loaders": [
				"loader_molecule_xyz",
			],
			"terrain": [
				"webgl_geometry_terrain_from_map",
			],
			"misc EventsControls": [
				"controls_events_draggablecubes",
				"controls_events_example",
				"controls_events_piano",
				"controls_events_collision",				
				"controls_events_loaders",
				"controls_events_Tower_of_Hanoi",
				"webgl_interactive_cubes_ortho",
				"webgl_interactive_lines",
				"webgl_interactive_shape",
			],		
			"games": [
				"games/labirint/index",
			],
		};

		//

		var list = document.getElementById( 'list' );
		var viewer = document.getElementById( 'viewer' );

		if ( /(iPad|iPhone|iPod)/g.test( navigator.userAgent ) ) {

			viewer.addEventListener( 'load', function ( event ) {

				viewer.contentWindow.innerWidth -= 10;
				viewer.contentWindow.innerHeight -= 2;

			} );

		}

		var container = document.createElement( 'div' );
		list.appendChild( container );

		var button = document.createElement( 'div' );
		button.id = 'button';
		button.textContent = 'View source';
		button.addEventListener( 'click', function ( event ) {

			var array = location.href.split( '/' );
			array.pop();

			window.open( 'view-source:' + array.join( '/' ) + '/' + selected + '.html' );

		}, false );
		button.style.display = 'none';
		document.body.appendChild( button );

		var divs = {};
		var selected = null;

		for ( var key in files ) {

			var section = files[ key ];

			var div = document.createElement( 'h2' );
			div.textContent = key;
			container.appendChild( div );

			for ( var i = 0; i < section.length; i ++ ) {

				( function ( file ) {

					//var name = file.split( '_' );
					var name = file;
					//name.shift();
					//name = name.join( ' / ' );

					var div = document.createElement( 'div' );
					div.className = 'link';
					div.textContent = name;
					div.addEventListener( 'click', function () {

						load( file );

					} );
					container.appendChild( div );

					divs[ file ] = div;

				} )( section[ i ] );

			}

		}

		var load = function ( file ) {

			if ( selected !== null ) divs[ selected ].className = 'link';

			divs[ file ].className = 'link selected';

			window.location.hash = file;
			viewer.src = file + '.html';
			viewer.focus();

			button.style.display = '';
			selected = file;


		};

		if ( window.location.hash !== '' ) {

			load( window.location.hash.substring( 1 ) );

		}

		</script>

	</body>
</html>
