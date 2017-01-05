//////////////////////////////////////////
//										//
//	 HEADER MESSAGES & INSTRUCTIONS		//
//										//
//////////////////////////////////////////

var CALC_TITLE = "Rainwater Harvesting Calculator";

var HEADER = "Rainwater Harvesting in the Independence Watershed";

var SUB_HEADER = "Use this calculator to determine your household's water consumption and the required volume of rainwater storage to meet your annual water needs. With any questions, comments, or collaborations, please <a href='http://caminosdeagua.org/contact-1' target = '_blank'>contact us</a>!";

var INSTRUCTIONS = "<b>Please answer the following household questions as best you can</b>";

var MONTHS = ["Jan", "Feb", "Mar", "Apr",
				"May", "Jun", "Jul", "Aug",
				"Sep", "Oct", "Nov", "Dec"];

var FULL_MONTHS = ["January", "February", "March",
				"April", "May", "June",
				"July", "August", "September",
				"October", "November", "December"];
				
var RAINS = ["jan_rain", "feb_rain", "mar_rain", 
			"apr_rain", "may_rain", "jun_rain", 
			"jul_rain", "aug_rain", "sep_rain", 
			"oct_rain", "nov_rain", "dec_rain", ];
			
var MONTHLY_RAIN_LBL = "Enter your region's monthly rainfall data<br>in <b>milimeters (mm)</b>:";
				
//////////////////////////////////////////
//										//
//		ERROR MESSAGES TO DISPLAY		//
//										//
//////////////////////////////////////////

//////		TOO FEW PEOPLE			//////
var PPL_MIN_E1 = "You need at least "; 
var PPL_MIN_E2 = " person!";

//////		TOO MANY PEOPLE			//////
var PPL_MAX_E1 = "We don't allow more than ";
var PPL_MAX_E2 = " people. Sorry!";

//////		ROOF TOO SMALL			//////
var SIZE_MIN_E1 = "Your roof dimension must be at least 1";

//////		ROOF TOO BIG			//////
var SIZE_MAX_E1 = "We don't allow more than ";
var SIZE_MAX_E2 = " meters. Sorry!";

//////		FRACTIONAL PEOPLE		//////
var PPL_DECIMAL_E = "You can't have partial numbers of people";

//////////////////////////////////////////
//										//
//		FORM LABELS & OPTIONS			//
//										//
//////////////////////////////////////////

var CHECKBOX_LBL = "I have my own monthly rainwater data";

//////		MUNICIPALITY			//////
var MUNI0_LBL = "Choose your area by clicking on the orange shapes below: ";
var MUNI_VAL0_LBL = "a";
var MUNI_VAL1_LBL = "bcd";
var MUNIS = [];

//////		PEOPLE IN HOUSEHOLD		//////
var PPL0_LBL = "How many people live in your house?";

//////		ROOF SIZE 				//////
var LENGTH0_LBL = "What is the length of your roof (<b>meters</b>)?";
var WIDTH0_LBL = "What is the width of your roof (<b>meters</b>)?";

//////		ROOF TYPE				//////
var ROOF0_LBL = "What kind of roof do you have?";
var CEMENT_ROOF_LBL = "Cement";
var SHEET_ROOF_LBL = "Corrugated sheet";
var SPANISH_ROOF_LBL = "Spanish tile";
var ROOF_TYPES = [CEMENT_ROOF_LBL, SHEET_ROOF_LBL, SPANISH_ROOF_LBL];

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
var LHS_INSTRUCTIONS = "Please make sure the following information was entered correctly. If not, press the button below to change your information. Your results are displayed in the panel to the right. If you want more info about any of the displayed results, just hover your mouse over it!"

var MUN_TXT = ["You live in <b>","</b>."];
var MONTHLY_USE_TXT = "We're not sure where you live, but you've chosen to enter your own monthly water data. You've entered:"
var UNITS = "mm";
var PPL_TXT = ["Your household has <b>"," </b>person."," </b>people."];
var LEN_WID_TXT = ["Your roof is <b>"," </b>meter(s) long by <b>"," </b>meter(s) wide."];
var ROOF_TYPE_TXT = ["You have a <b>","</b> roof."];

var DISPLAY_TXT = [];

//////////////////////////////////////////
//										//
//		 RESULTS DISPLAY 		 		//
//										//
//////////////////////////////////////////


var YES_OR_NO_LBL = ["Your roof ", "large enough to support your household's essential water use of\xa0", "\xa0liters per day."];
var MIN_ROOF_LBL = ["Your household needs a minimum of", "square-meters of roof space to collect enough rainwater to provide for your essential needs."];
var MIN_TANK_LBL = ["If you use the minimum roof size, you need at least a", "liter cistern."];
var REAL_ROOF_LBL_GREEN = ["Your actual roof size of", "square meters <b><big>can</big></b> collect enough water to provide at least", "liters per day, your household's essential water need."]; 
var REAL_ROOF_LBL_RED = ["Your actual roof size of", "square meters <b>cannot</b> collect enough water to provide ", " liters per day, your household's essential water need."];
var REAL_TANK_LBL = ["If you want to collect all the water off your current roof, you need a cistern that's at least", "liters. Good luck!"];

var ADEQUATE_LBL = "IS";
var INADEQUATE_LBL = "IS NOT";

var L_ADDON_LBL = "<small> liters</small>";

var TOOLTIP_TEXT = {
	yes_or_no: "This box indicates if you have a large enough roof to collect sufficient water for all of your household's essential water needs for the whole year, if you start collecting during the rainy season. This only takes drinking and cooking into account and is based on an average family who uses 5 liters per person per day. <br><br>Make sure that you only use water that is <a href='http://caminosdeagua.org/safe-healthy-sustainable-water/' target='_blank'>safe and healthy</a> for drinking and cooking!",
	min_roof: "<b><big>Minimum roof area</big></b><br>This indicates the minimum roof size required for you to capture adequate rainwater to provide for your household's regular daily essential (drinking and cooking) water consumption for the entire year. <br><br>This assumes that your cistern begins collecting water at the beginning of the rainy season. ",
	min_tank: "<b><big>Minimum tank volume</big></b><br>If you use the minimum roof size inidicated to the right, you need this size cistern to capture all of the water coming off of your roof. This cistern is large enough to provide your household with drinking and cooking water year-round on a year with average rainfall.",
	real_roof: "<b><big>Your roof area</big></b><br>This is the roof size you entered on the previous page",
	real_tank: "<b><big>Tank volume to collect all of your roof's water</big></b><br>If you collect 100% of the water that hits your current full roof during an average year, you'd need this size of cistern."
}

var MIN_HEADER = "<b>Minimum Essential Requirements</b>";
var REAL_HEADER = "<b>Your Roof's Capacity</b>";

////// 		FOOTER 					//////
var FOOTER_TXT = "<a href='https://www.caminosdeagua.org' target='_blank'>How does this work?</a> | Created by <a href='https://www.caminosdeagua.org' target='_blank'>Caminos de Agua</a> | Data from <a href='http://smn.cna.gob.mx/es/informacion-climatologica-ver-estado?estado=gto' target='_blank'>SMN</a>";
