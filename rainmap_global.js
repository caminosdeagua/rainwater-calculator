

var map;								// initialize the variable to hold the map

var MAP_CENTER = [21.2,-100.65];		// Set all map starting parameters
var MAP_MIN_ZOOM = 5;
var MAP_MAX_ZOOM = 18;
var MAP_INIT_ZOOM = 8;

var STAMEN_MAP_TYPE = "toner";		// Set which type of stamen map we want as a base layer.
										// 	options include: "terrain", "watercolor", and "toner"
var MAPBOX_ID = "pk.eyJ1IjoiY2FtaW5vc2RlYWd1YSIsImEiOiJjaXRsb3V1MDUwMGR2Mm9tdThncnYydTU4In0.DcxDn8J5RJ--WQ3gckONIw";
var MAPBOX_MAP_TYPE = "caminosdeagua.935ff2fb";	// Which mapbox tile set to display. options: "mapbox.streets" (this one is the classic), "caminosdeagua.935ff2fb" (this displays small towns one zoom level earlier)							

var DATA_URL = "https://dl.dropboxusercontent.com/s/w2le11pok7c781e/munis.geojson";					
	
///////////// 	MUST SET UP ALL THREE OF THESE MANUALLY TO MATCH UP 	/////////////////////////
var MUN_STARTING_VALUE = "San Miguel de Allende";
var STATION_STARTING_VALUE = "San Miguel de Allende (SMN)";
var mun = 0;					// holds the user's selected municipality 
/////////////////////////////////////////////////////////////////////////////////////////////////

var muni_index;						// global to hold municipality indices 
var muni_names = [];						// global to hold municipality names					
	
var click_type = "single"; 										// global to parse single and double clicks
// MAYBE THE STUFF BELOW IS UNNECESSARY... //
										
										
										
var POPUP_OFFSET = [88, 6]; 			// offset of the popup from the point
var SPIDER_Z_OFFSET = 100; 				// define the z-axes for the various layers, spidered points			
var BASE_Z_OFFSET = 10; 				//	and base points. 
var SPIDER_LABEL_OFFSET = [-50, -8];	// offset for spider date labels 
var X_OFFSET = 999999;					// The x-index-offset for the x-out button

var FULL_MONTHS = ["January", "February", "March",
				"April", "May", "June",
				"July", "August", "September",
				"October", "November", "December"];	