//////////////////////////////////////////////////////////////////
//	Title: 	calc_English.js
//
// 	Purpose: This file holds all of the language-dependent 
//		display text for the rainwater calculator.
//
//	Update History:
//		2/7/16	aaron krupp		file complete, added title block
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////
//										//
//	 HEADER MESSAGES & INSTRUCTIONS		//
//										//
//////////////////////////////////////////

var CALC_TITLE = "Rainwater Harvesting Calculator";

var HEADER = "Rainwater Harvesting Calculator";

var SUB_HEADER = "This calculator can be used to size a rainwater harvesting system which provides enough safe  drinking and cooking water - your household’s essential water need. With any questions, comments, or collaborations, please <a href='http://caminosdeagua.org/contact-us/' target = '_blank'>contact us</a>!";

var INSTRUCTIONS = "<b>Please answer the questions below about your household as best as you can.</b>";

var MONTHS = ["Jan", "Feb", "Mar", "Apr",
				"May", "Jun", "Jul", "Aug",
				"Sep", "Oct", "Nov", "Dec"];

var FULL_MONTHS_DISPLAY = ["January", "February", "March",
							"April", "May", "June",
							"July", "August", "September",
							"October", "November", "December"];	 

			
var MONTHLY_RAIN_LBL = "Please enter your region's monthly rainfall data<br>in <b>milimeters (mm)</b>:";
				
//////////////////////////////////////////
//										//
//		ERROR MESSAGES TO DISPLAY		//
//										//
//////////////////////////////////////////

//////		TOO FEW PEOPLE			//////
var PPL_MIN_E1 = "You need at least "; 
var PPL_MIN_E2 = " person.";

//////		TOO MANY PEOPLE			//////
var PPL_MAX_E1 = "We do not allow more than ";
var PPL_MAX_E2 = " people.";

//////		ROOF TOO SMALL			//////
var SIZE_MIN_E1 = "Your roof dimension must be at least 1.";

//////		ROOF TOO BIG			//////
var SIZE_MAX_E1 = "We do not allow more than ";
var SIZE_MAX_E2 = " meters.";

//////		FRACTIONAL PEOPLE		//////
var PPL_DECIMAL_E = "You cannot have partial numbers of people";

//////////////////////////////////////////
//										//
//		FORM LABELS & OPTIONS			//
//										//
//////////////////////////////////////////

var CHECKBOX_LBL = "I do not live in this region ";

//////		MUNICIPALITY			//////
var MUNI0_LBL = "Select your residence by clicking on the map below:";
//var MUNI_VAL0_LBL = "a";
//var MUNI_VAL1_LBL = "bcd";
var MUNIS = [];

//////		PEOPLE IN HOUSEHOLD		//////
var PPL0_LBL = "How many people live in your house?";

//////		ROOF SIZE 				//////
var LENGTH0_LBL = "What is the length of your roof (<b>meters</b>)?";
var WIDTH0_LBL = "What is the width of your roof (<b>meters</b>)?";

//////		ROOF TYPE				//////
var ROOF0_LBL = "What kind of roof do you have?";
var CEMENT_ROOF_LBL = "Concrete";
var SHEET_ROOF_LBL = "Corrugated sheet";
var SPANISH_ROOF_LBL = "Spanish tile";
var ROOF_TYPES = [CEMENT_ROOF_LBL, SHEET_ROOF_LBL, SPANISH_ROOF_LBL];

var CEMENT_ROOF_LBL_LOWER = "concrete";
var SHEET_ROOF_LBL_LOWER = "corrugated sheet";
var SPANISH_ROOF_LBL_LOWER = "spanish tile";
var ROOF_TYPES_LOWER = [CEMENT_ROOF_LBL_LOWER, SHEET_ROOF_LBL_LOWER, SPANISH_ROOF_LBL_LOWER];

//////		CALCULATE BUTTON 	    //////
var CALC_BUTTON_LBL = "Calculate!";


//////////////////////////////////////////
//										//
//		LEFT HAND SIDE DISPLAY 			//
//										//
//////////////////////////////////////////

//////		GO BACK BUTTON 	   	 	//////
var BACK2INPUTS_BUTTON_LBL = "Change my information";

var LHS_DISPLAY_TITLE = "Great work!";
var LHS_INSTRUCTIONS = "These results refer to your household's <b>essential water</b> need - the amount of water needed for drinking and cooking only."
var PS_NOTE = "<i>Note: These results assume that your rainwater collection begins at the start of the rainy season. Starting at any other time of the year increases the risk of not always having enough rainwater stored during your system's first year.</i>";

var MUN_TXT = ["You live near <b>","</b>."];
var MONTHLY_USE_TXT = "You have chosen to enter your own monthly rainfall data. <i>Please note that the roof area to the right will be a slight under-estimate since we do not know where you live or how frequently it rains.</i><br><br>You have entered:"
var UNITS = "mm";
var PPL_TXT = ["Your household has <b>"," </b>person."," </b>people."];
var LEN_WID_TXT = ["Your roof is <b>"," long by <b>"," wide."];
var SINGULAR_DIMENSION = "</b> meter";
var PLURAL_DIMENSION = "</b> meters";
var ROOF_TYPE_TXT = ["You have a <b>","</b> roof."];

var DISPLAY_TXT = [];

//////////////////////////////////////////
//										//
//		 RESULTS DISPLAY 		 		//
//										//
//////////////////////////////////////////

var WATER_DISCREPENCY_MSG = "Note: It appears that you can capture more water than your household needs. Be careful! Based on when the rain falls, if you used your current roof size, your cistern would go dry at least once during the year. See the 'Minimum Requirements for Drinking & Cooking' for our suggested roof and cistern sizes."

var MIN_ROOF_LBL_GREEN = ["<b><big>Minimum Roof Area\xa0\xa0</big></b><br><br>To meet this <b> annual water need</b>, your household needs <i>at least</i>", "square-meters (m<sup>2</sup>) of roof area. It looks like your current roof <b>is</b> large enough!"];
var MIN_ROOF_LBL_RED = ["<b><big>Minimum Roof Area\xa0\xa0</big></b><br><br>To meet this <b> annual water need</b>, your household needs <i>at least</i>", "square-meters (m<sup>2</sup>) of roof area. It looks like your current roof <b>is not</b> large enough."];
var MIN_TANK_LBL = ["<b><big>Minimum Cistern Volume</big></b><br><br>To capture all of the water from your <b>minimum roof area</b>, you need <i>at least</i> a", "liter cistern."];
var MIN_WATER_LBL = ["<b><big>Annual Water Need</big></b><br><br>Your household needs","liters of <a href='http://caminosdeagua.org/safe-healthy-sustainable-water/' target='_blank'>healthy</a> water for drinking and cooking each year. This meets your household's ", " liter essential daily need." ];
var REAL_ROOF_LBL = ["<b><big>Your Current Roof Area</big></b>", "square-meters (m<sup>2</sup>)."];	
var REAL_TANK_LBL = ["<b><big>Required Cistern Volume Using Your Current Roof</big></b>", "liters."];
var REAL_WATER_LBL = ["<b><big>Your Current Annual Maximum Water Collection</big></b>", "liters."];

var L_ADDON_LBL = "<small> liters</small>";

var TOOLTIP_TEXT = {
	min_roof: "<b><big>Minimum roof area</big></b><br>This number indicates the minimum roof area required for you to capture enough rainwater to meet your household's essential water need for the entire year. <br><br><i>This result assumes that your cistern begins collecting water at the beginning of the rainy season and is based on average rainfall data</i>. ",
	min_water: "<b><big>Minimum annual water capture</big></b><br>This is calculated by assuming that each member of your household uses an average of 5 liters per day for essential uses (drinking and cooking). The 5 liters per day is multiplied by the number of people in your household and the number of days in a year (365).",
	min_tank: "<b><big>Minimum cistern volume</big></b><br>If you use the minimum roof area inidicated to the left, you need this cistern volume to capture all the water coming off of your roof. This cistern will be large enough to meet your household's essential water need year-round on a year with <i>average rainfall</i>.",
	real_roof: "<b><big>Your actual roof area</big></b><br>This is your roof area. It is calculated by multiplying the length by the width of your roof.",
	real_water: "<b><big>Your current annual maximum water collection</big></b><br>The water your current roof can collect over an <i>average year</i>.<br><br><i>Caution: even if your current roof can collect more water (this box) than you need (the above box), be careful. Unless the above boxes are green, your cistern could still go dry.</i>",
	real_tank: "<b><big>Required cistern volume using your current roof</big></b><br>If you collect all the water that hits your roof during an average year, you would need this cistern volume."

	
	}

var MIN_HEADER = "<b>Minimum Water Requirements for Drinking & Cooking</b>";
var REAL_HEADER = "<b>Your Roof's Maximum Capacity</b>";

////// 		FOOTER 					//////
var FOOTER_TXT = "<a href='http://nbviewer.jupyter.org/github/caminosdeagua/rainwater-calculator/blob/master/data/Explanation.pdf' target='_blank'>How does this work?</a> | Created by <a href='https://www.caminosdeagua.org' target='_blank'>Caminos de Agua</a> | Data from <a href='http://smn.cna.gob.mx/es/informacion-climatologica-ver-estado?estado=gto' target='_blank'>SMN</a>";

//////////////////////////////////////////
//										//
//		MOBILE BRWOSER DISPLAY	 		//
//										//
//////////////////////////////////////////

var MOBILE_BROWSER_MESSAGE = "<big><b>We're sorry!</b></big><br>This rainwater harvesting calculator is not get available for mobile browers. You can view it on a laptop, desktop computer, or tablet. For more information on rainwater harvesting, check out our <a href='https://www.caminosdeagua.org'>website</a>.";