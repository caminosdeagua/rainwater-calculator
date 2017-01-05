//////////////////////////////////////////
//										//
//	 HEADER MESSAGES & INSTRUCTIONS		//
//										//
//////////////////////////////////////////

var CALC_TITLE = "Rainwater Harvesting Calculator";

var HEADER = "Rainwater Harvesting Calculator";

var SUB_HEADER = "This calculator can be used to size a rainwater harvesting system which provides enough safe  drinking and cooking water - your household’s essential water need. With any questions, comments, or collaborations, please <a href='http://caminosdeagua.org/contact-1' target = '_blank'>contact us</a>!";

var INSTRUCTIONS = "<b>Please answer the questions below about your household as best as you can.</b>";

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

var CHECKBOX_LBL = "I do not live in this region but have my own monthly rainfall data ";

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
var LHS_INSTRUCTIONS = "Please make sure that the following information was entered correctly. If not, press the button below to change your information. Your results are displayed in the panel to the right. An explanation of any of the displayed results can be seen when you hover your mouse over any box. <br><br><br><big>All the results refer to your household's <b>essential water</b> needs - the amount of water needed for drinking and cooking only.</big> <br><br><b>These results assume that collecting rainwater is started at the beginning of the rainy season. If you do so, it is likely that you can meet your essential water needs from the first year on. Starting at any other time of the year can increase the risk of not always having enough rainwater stored during the first year.</b>"

var MUN_TXT = ["You live in <b>","</b>."];
var MONTHLY_USE_TXT = "You have chosen to enter your own monthly rainfall data and entered:"
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


//var YES_OR_NO_LBL = ["Your roof ", "large enough to support your household's essential water use of\xa0", "\xa0liters per day."];
var MIN_ROOF_LBL = ["Your household needs a minimum of", "square-meters of roof area to collect enough rainwater to cover your essential water needs."];
var MIN_TANK_LBL = ["If you use the minimum roof area, you need at least a", "liter cistern."];
var REAL_ROOF_LBL_GREEN = ["Your actual roof area of", "square-meters <b><big>can</big></b> collect enough water to provide at least", "liters per day, which is your household's essential water need."]; 
var REAL_ROOF_LBL_RED = ["Your actual roof area of", "square-meters <b>cannot</b> collect enough water to provide ", " liters per day, which is your household's essential water need."];
var REAL_TANK_LBL = ["If you want to collect all the water off your current roof, you need a cistern that is at least", "liters."];

//var ADEQUATE_LBL = "IS";
//var INADEQUATE_LBL = "IS NOT";

var L_ADDON_LBL = "<small> liters</small>";

var TOOLTIP_TEXT = {
//	yes_or_no: "This box indicates if you have a large enough roof to collect sufficient water for all of your household's essential water needs for the whole year, if you start collecting during the rainy season. This only takes drinking and cooking into account and is based on an average family who uses 5 liters per person per day. <br><br>Make sure that you only use water that is <a href='http://caminosdeagua.org/safe-healthy-sustainable-water/' target='_blank'>safe and healthy</a> for drinking and cooking!",
	min_roof: "<b><big>Minimum roof area</big></b><br>This number indicates the minimum roof area required for you to capture enough rainwater to provide for your household's daily essential water needs for the entire year. <br><br>This result assumes that your cistern begins collecting water at the beginning of the rainy season. ",
	min_tank: "<b><big>Minimum cistern volume</big></b><br>If you use the minimum roof area inidicated to the left, you need this cistern volume to capture all the water coming off of your roof. This cistern will be large enough to provide your household with their essential water need year-round on a year with average rainfall.",
	real_roof: "<b><big>Your actual roof area</big></b><br>This is your roof area which is calculated by multiplying the length and width of your roof which you have entered on the previous page.",
	real_tank: "<b><big>Required cistern volume when using your current roof area</big></b><br>If you collect 100% of the water that hits your current full roof during an average year, you would need this cistern volume."
}

var MIN_HEADER = "<b>Minimum Essential Requirements</b>";
var REAL_HEADER = "<b>Your Roof's Capacity</b>";

////// 		FOOTER 					//////
var FOOTER_TXT = "<a href='https://www.caminosdeagua.org' target='_blank'>How does this work?</a> | Created by <a href='https://www.caminosdeagua.org' target='_blank'>Caminos de Agua</a> | Data from <a href='http://smn.cna.gob.mx/es/informacion-climatologica-ver-estado?estado=gto' target='_blank'>SMN</a>";
