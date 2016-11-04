//////////////////////////////////////////
//										//
//	 HEADER MESSAGES & INSTRUCTIONS		//
//										//
//////////////////////////////////////////

var CALC_TITLE = "Rainwater Harvesting Calculator";

var HEADER = "Independence Watershed Rainwater Harvesting Calculator";

var SUB_HEADER = "Use this calculator to determine your household's water consumption and the required volume of rainwater storage to meet your annual water needs. With any questions, comments, or collaborations, please contact <a href='http://caminosdeagua.org/contact-1'>Caminos de Agua</a>.";

var INSTRUCTIONS = "Fill out the following table with your household's information, as best you can. The calculator will approximate your annual 'essential' water consumption and your annual total water consumption. Then, based on your location, it will tell you how much rainwater storage capacity you need to meet your 'essential' water needs in an average year.";

//////////////////////////////////////////
//										//
//		ERROR MESSAGES TO DISPLAY		//
//										//
//////////////////////////////////////////

//////		TOO FEW PEOPLE			//////
var PPL_MIN_E1 = "Uh oh!  You need at least "; 
var PPL_MIN_E2 = " person!";

//////		TOO MANY PEOPLE			//////
var PPL_MAX_E1 = "Currently, we don't allow more than ";
var PPL_MAX_E2 = " people. Sorry!";

//////		ROOF TOO SMALL			//////
var SIZE_MIN_E1 = "That's shur a small ruff ya got thur!";

//////		ROOF TOO BIG			//////
var SIZE_MAX_E1 = "Currently, we don't allow more than ";
var SIZE_MAX_E2 = " meters. Sorry!";

//////		FRACTIONAL PEOPLE		//////
var PPL_DECIMAL_E = "You can't have partial numbers of people...stop chopping up your children!";

//////////////////////////////////////////
//										//
//		FORM LABELS & OPTIONS			//
//										//
//////////////////////////////////////////

//////		MUNICIPALITY			//////
var MUNI0_LBL = "Choose your municipaliy:";
var MUNI_VAL0_LBL = "San Miguel de Allende";
var MUNI_VAL1_LBL = "Dolores Hidalgo";
var MUNIS = [MUNI_VAL0_LBL, MUNI_VAL1_LBL];

//////		PEOPLE IN HOUSEHOLD		//////
var PPL0_LBL = "Number of people in your household:";

//////		ROOF SIZE 				//////
var LENGTH0_LBL = "Length of your roof (meters):";
var WIDTH0_LBL = "Width of your roof (meters):";

//////		ROOF TYPE				//////
var ROOF0_LBL = "What kind of roof do you have?";
var CEMENT_ROOF_LBL = "Cement";
var SHEET_ROOF_LBL = "Corrugated sheet";
var SPANISH_ROOF_LBL = "Spanish tile";
var ROOF_TYPES = [CEMENT_ROOF_LBL, SHEET_ROOF_LBL, SPANISH_ROOF_LBL];

//////	NON-ESSENTIAL WATER USES	//////
var USES0_LBL = "Select everything you do with water:";
var BRUSH_CHK_LBL = "Brushing your teeth";
var HANDS_CHK_LBL = "Washing your hands";
var GARDEN_CHK_LBL = "Watering a garden";
var DISHES_CHK_LBL = "Washing dishes";
var BATH_CHK_LBL = "Bathing";
var CLOTHES_CHK_LBL = "Laundry";
var TOILET_CHK_LBL = "Flushing the toilet";
var OTHER_CHK_LBL = "Other";

var USES = [BRUSH_CHK_LBL, HANDS_CHK_LBL, GARDEN_CHK_LBL,
			DISHES_CHK_LBL, BATH_CHK_LBL, CLOTHES_CHK_LBL,
			TOILET_CHK_LBL, OTHER_CHK_LBL];

//////////////////////////////////////////
//										//
//		HIDDEN EXTRA FIELDS:			//
//		 LABELS & OPTIONS				//
//										//
//////////////////////////////////////////

//////		GARDEN SIZE				//////
var GARDEN_EXTRA1_LBL = "How big is your garden? (square meters):";

//////		TYPE OF DISH WASHING	//////
var DISHES_EXTRA1_LBL = "I wash my dishes:";
var DISHES_EXTRA1_VAL0_LBL = "By hand";
var DISHES_EXTRA1_VAL1_LBL = "With a dishwasher";

//////		TYPE OF LAUNDRY			//////
var LAUNDRY_EXTRA1_LBL = "I do laundry:";
var LAUNDRY_EXTRA1_VAL0_LBL = "By hand";
var LAUNDRY_EXTRA1_VAL1_LBL = "With a laundry machine";

var OTHER_EXTRA1_LBL = "What else do you use water for??";
var OTHER_EXTRA3_LBL = "How much? (Liters per day):";

//////		CALCULATE BUTTON 	    //////
var CALC_BUTTON_LBL = "Calculate!";

//////////////////////////////////////////
//										//
//		LEFT HAND SIDE INPUTS DISPLAY 	//
//										//
//////////////////////////////////////////

//////		GO BACK BUTTON 	   	 	//////
var BACK2INPUTS_BUTTON_LBL = "Change my info";

var LHS_DISPLAY_TITLE = "Great work!";
var LHS_INSTRUCTIONS = "Please make sure the following information was entered correctly. If not, just press the button below to fix it. If it's good to go, your results are displayed in the orange pannel to the right!"

var MUN_TXT = ["You live in <b>","</b>."];
var PPL_TXT = ["Your household has <b>"," </b>person."," </b>people."];
var LEN_WID_TXT = ["Your roof is <b>"," </b>meter(s) long by <b>"," </b>meter(s) wide."];
var ROOF_TYPE_TXT = ["You have a <b>","</b> roof."];
var USE_TXT = ["Besides <b>drinking</b> and <b>cooking</b>, you use water for: "];
var NO_USE = "NOTHING!!!";
///////////////////////////////////////////////////////////////// FINISH THIS SHIT !!!!!!!!!!!!!%%%%%%%$$$$$$$$$$###########

var DISPLAY_TXT = [];
//////////////////////////////////////////
//										//
//		SIMPLE RESULTS DISPLAY 		 	//
//										//
//////////////////////////////////////////

var ESSENTIAL_USE0_LBL = "Each day, your household needs about";
var ESSENTIAL_USE2_LBL = "liters for drinking and cooking.";

var TOTAL_USE0_LBL = "Each day, your household needs about";
var TOTAL_USE2_LBL = "total liters for ALL your water uses.";

var TANK_SIZE0_LBL = "Based on your location,\nyou could meet your household's entire ESSENTIAL water\nneeds with only";
var TANK_SIZE2_LBL = "liters of storage tank capacity!";

var MORE_INFO_BUTTON_LBL = "More information";

var RHS_TITLE = "Results";

var L_ADDON_LBL = "<small> Liters</small>";

//////////////////////////////////////////
//										//
//		COMPLEX RESULTS DISPLAY 	 	//
//										//
//////////////////////////////////////////

var LESS_INFO_BUTTON_LBL = "Less information";

var TABLE_LBL = "Water collection, use, and inventory.\nAll values in Litres:"
var TABLE_TITLES = ["Month", "Water\nCollected", "Water\nConsumed", "Inventory"];

var MONTHS = ["Jan", "Feb", "Mar", "Apr",
				"May", "Jun", "Jul", "Aug",
				"Sep", "Oct", "Nov", "Dec"];