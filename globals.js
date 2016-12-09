var form;					// declare the form as global 

var allData;				// declare the dataset as global
var validations = 0;		// a global var to see how many times the form has been validated

var MAX_PPL = 9999;
var MIN_PPL = 1;


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

var START_MONTH = 5; // Start inventory calculation in june (jan=0, feb=1, mar=2, etc.)

var RED = "#d84949";
var GREEN = "#61d849";
