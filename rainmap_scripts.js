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
	map.addLayer(new L.StamenTileLayer(STAMEN_MAP_TYPE), {});				
}

function grabData() {
	$.ajax({
		type: "POST",
		url: DATA_URL,
		dataType: 'json',
		success: function (data) {
			
			geojson = L.geoJson(data, {
				style: style,
				onEachFeature: onEachFeature				
			})
			.addTo(map);
			setupMunis(geojson);
			
			
			var polys = Object.keys(geojson._layers);
			for (var i=0; i<polys.length ; i++) {
				geojson._layers[polys[i]].bindLabel("\xa0"+geojson._layers[polys[i]].feature.properties.NOMGEO, {
					noHide: false,
					className: "polygonLabel"
				})
				if (String(geojson._layers[polys[i]].feature.properties.NOMGEO) == MUN_STARTING_VALUE) {
					geojson._layers[polys[i]].setStyle({fillColor: 'blue'});
					
				}
			}
			
			
		},
		error: function (er) {
			console.log("the ajax called returned the "+er+ "error...");
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
	event.target.setStyle({fillColor: 'blue'});		// Then set the new one. 
	mun = id; 	
	//console.log(geojson._layers[mun].feature.properties.NOMGEO);
	updateInputs("map");
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
function setupMunis(el) {
	muni_index = Object.keys(el._layers);
	for (var i=0; i<muni_index.length; i++) {
		muni_names.push(el._layers[muni_index[i]].feature.properties.NOMGEO)				
	};


}
/////////////////////////////////////////////////////////////////////////////////////////////////////			
