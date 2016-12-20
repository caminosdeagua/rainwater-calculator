var form;					// declare the form as global 

var allData;				// declare the dataset as global
var validations = 0;		// a global var to see how many times the form has been validated

var allMonthsEntered = false;	// a global that indicates if the user's entered all relevant monthly data
var monthsEntered = [];	
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
							"6", "7", "8", "9", "."
];
var EFF_CEMENT = 0.85;
var EFF_SHEET = 0.9;
var EFF_SPANISH_TILE = 0.8;
var EFFS = [EFF_CEMENT, EFF_SHEET, EFF_SPANISH_TILE]; // THESE ARE PLACEHOLDER

var INPUT_WIDTH_BEFORE = "100%";
var INPUT_WIDTH_AFTER = "35%";
var OUTPUT_WIDTH_BEFORE = "0%";
var OUTPUT_WIDTH_AFTER = "65%";

var DAY_MON = [31,28,31,30,31,30,31,31,30,31,30,31];  // Days per month
				
var ESSENTIAL_DAILY_USE = 5; //Liters per day per person

var SMA_START_MONTH = 5; // Start inventory calculation in june (jan=0, feb=1, mar=2, etc.)

var RED = "#e50d0d";//"#d84949";
var GREEN = "#61d849";
var DARK_BLUE = "#63aec1";
var LIGHT_BLUE = "#c9e9f2";
var BLACK = "#000000";

var ENABLED_BACK = "#DDDDDD";
var ENABLED_BORDER = "#999999";
var ENABLED_TEXT = "#000000";

var DISABLED_BACK = "#EEEEEE";
var DISABLED_BORDER = "#BBBBBB";
var DISABLED_TEXT = "#BBBBBB";

var CEMENT_URL = "https://dl.dropboxusercontent.com/s/jt6n2b2wo7l9yig/Concrete.png";
var SHEET_URL = "https://dl.dropboxusercontent.com/s/1sf2bvq10ln7wwa/Corrugated_Sheet.png";
var SPANISH_URL = "https://dl.dropboxusercontent.com/s/8obfa2hq5tmku7x/Spanish_Tile.png";
var ROOF_URLS = [CEMENT_URL, SHEET_URL, SPANISH_URL];
