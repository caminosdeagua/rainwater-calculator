var geojson

function initEmbeddedMap() {	
	initMap(); 					// Initialize and display the map object
	applyBaseMap(); 			// Apply the base tiles to the map
	grabData();		
}								

////////////////////////////////////////////////////////////////////////////////
////					  	initMap FUNCTION	 						  	////
//// 			This function initializes the global map object.			////
////////////////////////////////////////////////////////////////////////////////

function initMap() {
	map = new L.map('WaterMap', { //First, initialize the map
		center: MAP_CENTER,
		zoom: MAP_INIT_ZOOM,
		minZoom: MAP_MIN_ZOOM,
		maxZoom: MAP_MAX_ZOOM,
		attributionControl: true,
		fullscreenControl: false
	});	
	map.attributionControl.setPrefix(CARTO_ATTRIBUTION);
}

////////////////////////////////////////////////////////////////////////////////
////					  	applyBaseMap FUNCTION 						  	////
//// 	This function grabs a set of Stamen or Mapzen base tiles and 		////
//// 	applies them to the map. 											////
////////////////////////////////////////////////////////////////////////////////


function applyBaseMap() {
	//map.addLayer(new L.StamenTileLayer(STAMEN_MAP_TYPE), {});			//This line is to use Stamen basemaps		
	L.mapbox.accessToken = MAPBOX_ID;									// These two lines are to use Mapbox basemaps
	map.addLayer(new L.mapbox.tileLayer(MAPBOX_MAP_TYPE), {});			// These two lines are to use Mapbox basemaps	
}

function grabData() {
	console.log(geojson)
	console.log("#2!");
	$.ajax({
		type: "POST",
		url: DATA_URL,
		dataType: 'json',
		jsonpCallback: "wrapperFunction",
		
		success: function (data) {
			
			geojson = L.geoJson(data, {
				style: style,
				onEachFeature: onEachFeature				
			})
			.addTo(map);
			setupMunis(geojson);
			
			
			var polys = Object.keys(geojson._layers);
			for (var i=0; i<polys.length ; i++) {
				geojson._layers[polys[i]].bindLabel("\xa0"+geojson._layers[polys[i]].feature.properties.NOMGEO+"\xa0-\xa0"+geojson._layers[polys[i]].feature.properties.Station, {
					noHide: false,
					className: "polygonLabel"
				})
				if (String(geojson._layers[polys[i]].feature.properties.NOMGEO) == MUN_STARTING_VALUE & String(geojson._layers[polys[i]].feature.properties.Station) == STATION_STARTING_VALUE) {
					geojson._layers[polys[i]].setStyle({fillColor: 'blue'});
					mun = geojson._layers[polys[i]]._leaflet_id;
				}
			}
			
			
		},
		error: function (er) {
			console.log("the ajax called returned the error:");
			console.log(er);
		}
	});
	


	

}





function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: select,
		dblclick: zoomInABit
	});
}

function zoomInABit() {
	map.zoomIn();
	click_type = "double";
}

function style(feature) {
	return {
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.3,
		fillColor: 'orange'
	};
}

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 3,
		color: '#999999',
		dashArray: '',
		fillOpacity: 0.4
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
}

function resetHighlight(e) {
	var color = String(e.target.options.fillColor);
	geojson.resetStyle(e.target);
	e.target.setStyle({fillColor: color})
}


function select(event) {
	var id = event.target._leaflet_id;
	if (id != mun) { 									
		geojson._layers[mun].setStyle({fillColor: 'orange'});											// 	clear that previous one. 	
	}
	//console.log(event.target)
	event.target.setStyle({fillColor: 'blue'});		// Then set the new one. 
	mun = id; 	
	
	//console.log("You just clicked on:")
	//console.log(event.target)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
function setupMunis(el) {
	muni_index = Object.keys(el._layers);
	for (var i=0; i<muni_index.length; i++) {
		muni_names.push(el._layers[muni_index[i]].feature.properties.NOMGEO)				
	};


}
/////////////////////////////////////////////////////////////////////////////////////////////////////			

//////////////////////////////////
//								//
//	function getRainfall 		//
//								//
// gets an array of length 12 	//
// with the monthly rainfall for//
// the passed region 			//
//////////////////////////////////

function getRainfall(place) {
	var rainfall = [];
	var total = 0;
	if(!geojson) {
		rainfall = [-1,0,0,0,0,0,0,0,0,0,0,0];
		console.log("The geoJSON file hasn't loaded yet...");
	} else {
		for (var i=0; i<FULL_MONTHS.length+1; i++) {
			if (i==FULL_MONTHS.length){} else {
				total = total+geojson._layers[place].feature.properties[FULL_MONTHS[i]];
				rainfall.push(geojson._layers[place].feature.properties[FULL_MONTHS[i]])
			}
		}		
	}
	return rainfall
}