//////////////////////////////////////////////////////////////////
//	Title: 	globals.js
//
// 	Purpose: Holds all global variables for calculator 
//		(not including map)
//
//	Update History:
//		2/7/16	aaron krupp		file complete, added title block
//////////////////////////////////////////////////////////////////



var form;					// declare the form as global 

var allData;				// declare the dataset as global
var validations = 0;		// a global var to see how many times the form has been validated
var hash = 0;				// global to hold the previous hash value from URL.

var EPSILON = 0.01;				// Cut-off for allowing the calculator to hang.
var MAX_PPL = 9999;
var MIN_PPL = 1;

var currentTooltipName = "init" 	// global that indicates which message to display in tooltip window
var ERROR_DISPLAY_TIME = 5000; 				// Time that error message is dispalyed [ms]
var INTERRUPT_INTERVAL = 1000;

var numAcceptableKeys = ["ArrowLeft", "ArrowRight", 		// Define which keys should be functional
							"Backspace", "Delete", 
							"Tab", "ArrowUp", "ArrowDown", 
							"Home", "End", "Insert", 
							"PageUp", "PageDown", "Escape",
							"0", "1", "2", "3", "4", "5", 
							"6", "7", "8", "9", ".", 48, 49, 50,
							51, 52, 53, 54, 55, 56, 57, 58, 27,
							8, 9, 10, 11, 13, 46];
var EFF_CEMENT = 0.85;
var EFF_SHEET = 0.9;
var EFF_SPANISH_TILE = 0.8;
var EFF_OTHER = 0.75;
var EFFS = [EFF_CEMENT, EFF_SHEET, EFF_SPANISH_TILE, EFF_OTHER]; // THESE ARE PLACEHOLDER

var CLEANLINESS_FACTOR = 1.5;								// 0.5 = normal, 2.0 = super duper dirty. we'll use 1.5 for a conservative estimate
var RAIN_EVENTS = [2, 1, 1, 3, 5, 9, 12, 8, 9, 5, 2, 2];	// rounded rain events per month from http://smn.cna.gob.mx/es/informacion-climatologica-ver-estado?estado=gto
var NULL_RAIN_EVENTS = [0,0,0,0,0,0,0,0,0,0,0,0];				

var INPUT_WIDTH_BEFORE = "100%";
var OUTPUT_WIDTH_BEFORE = "0%";

var INPUT_WIDTH_AFTER_RAW = 400; 	// width of LHS after button press (px)
var INPUT_WIDTH_AFTER = String(INPUT_WIDTH_AFTER_RAW)+"px";

var DAY_MON = [31,28,31,30,31,30,31,31,30,31,30,31];  // Days per month
				
var ESSENTIAL_DAILY_USE = 5; //Liters per day per person

var SMA_START_MONTH = 5; // Start inventory calculation in june (jan=0, feb=1, mar=2, etc.)

var RED = "#f26f60";//"#e50d0d";//"#d84949";
var GREEN = "#61d849";//"#a3e23d"//"#61d849";
var DARK_BLUE = "#63aec1";
var LIGHT_BLUE = "#c9e9f2";
var BLACK = "#000000";

var ENABLED_BACK = "#DDDDDD";
var ENABLED_BORDER = "#999999";
var ENABLED_TEXT = "#000000";

var DISABLED_BACK = "#EEEEEE";
var DISABLED_BORDER = "#BBBBBB";
var DISABLED_TEXT = "#BBBBBB";

var CEMENT_URL = "http://caminosdeagua.github.io/rainwater-calculator/img/Concrete.png";
var SHEET_URL = "http://caminosdeagua.github.io/rainwater-calculator/img/Corrugated_Sheet.png";
var SPANISH_URL = "http://caminosdeagua.github.io/rainwater-calculator/img/Spanish_Tile.png";
var OTHER_ROOF_URL = "https://caminosdeagua.github.io/rainwater-calculator/img/question_mark.jpg"
var ROOF_URLS = [CEMENT_URL, SHEET_URL, SPANISH_URL, OTHER_ROOF_URL];

var RAINS = ["jan_rain", "feb_rain", "mar_rain", 
			"apr_rain", "may_rain", "jun_rain", 
			"jul_rain", "aug_rain", "sep_rain", 
			"oct_rain", "nov_rain", "dec_rain", ];	//name of rain-entry form elements
			
var FULL_MONTHS = ["January", "February", "March",
				"April", "May", "June",
				"July", "August", "September",
				"October", "November", "December"];	// month names for getting rainfall. 