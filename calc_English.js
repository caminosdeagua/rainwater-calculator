//////////////////////////////////////////
//										//
//	 HEADER MESSAGES & INSTRUCTIONS		//
//										//
//////////////////////////////////////////

var CALC_TITLE = "Rainwater Harvesting Calculator";

var HEADER = "Rainwater Harvesting in the Independence Watershed";

var SUB_HEADER = "Use this calculator to determine your household's water consumption and the required volume of rainwater storage to meet your annual water needs. With any questions, comments, or collaborations, please <a href='http://caminosdeagua.org/contact-1' target = '_blank'>contact us</a>!";

var INSTRUCTIONS = "<b>Answer the questions below about your household as best you can.</b><br><br>The calculator will approximate your daily ‘essential’ water need and your daily ‘total’ water need. <br><br>Your <b>essential water need</b> displays the number of liters your family needs for drinking and cooking. You should make sure that you only use water which is <a href='http://caminosdeagua.org/safe-healthy-sustainable-water/' target = '_blank'>safe and healthy</a> for drinking and cooking. <br>Your <b>total water need</b> is the number of liters your family needs for drinking and cooking plus other activities. You can chose by yourself which activities you want to do with your harvesting rainwater. <br><br>Secondly, the calculator will tell you how much rainwater storage you need to fulfill your needs, based on the rainfall in your municipality. <br><br> <b>Let's calculate</b>";


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
var SIZE_MIN_E1 = "Your roof can't have a length or width of 0";

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

//////		MUNICIPALITY			//////
var MUNI0_LBL = "Choose your area by clicking on the orange shapes below: ";
var MUNI_VAL0_LBL = "a";
var MUNI_VAL1_LBL = "bcd";
var MUNIS = [];

//////		PEOPLE IN HOUSEHOLD		//////
var PPL0_LBL = "How many people live in your house?";

//////		ROOF SIZE 				//////
var LENGTH0_LBL = "What is the length of your roof (meters)?:";
var WIDTH0_LBL = "What is the width of your roof (meters)?:";

//////		ROOF TYPE				//////
var ROOF0_LBL = "What kind of roof do you have?";
var CEMENT_ROOF_LBL = "Cement";
var SHEET_ROOF_LBL = "Corrugated sheet";
var SPANISH_ROOF_LBL = "Spanish tile";
var ROOF_TYPES = [CEMENT_ROOF_LBL, SHEET_ROOF_LBL, SPANISH_ROOF_LBL];

//////	NON-ESSENTIAL WATER USES	//////
var USES0_LBL = "Select all the daily activities for which you would like to use rainwater.";
var BRUSH_CHK_LBL = "Brushing your teeth";
var HANDS_CHK_LBL = "Washing your hands";
var GARDEN_CHK_LBL = "Watering your garden";
var DISHES_CHK_LBL = "Washing the dishes";
var BATH_CHK_LBL = "Taking a shower/bath";
var CLOTHES_CHK_LBL = "Doing the laundry";
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
//		LEFT HAND SIDE DISPLAY 			//
//										//
//////////////////////////////////////////

//////		GO BACK BUTTON 	   	 	//////
var BACK2INPUTS_BUTTON_LBL = "Change my information";

var LHS_DISPLAY_TITLE = "Great work!";
var LHS_INSTRUCTIONS = "Please make sure the following information was entered correctly. If not, press the button below to change your information. Your results are displayed in the panel to the right. If you want more info about any of the displayed results, just hover your mouse over it!"

var MUN_TXT = ["You live in <b>","</b>."];
var PPL_TXT = ["Your household has <b>"," </b>person."," </b>people."];
var LEN_WID_TXT = ["Your roof is <b>"," </b>meter(s) long by <b>"," </b>meter(s) wide."];
var ROOF_TYPE_TXT = ["You have a <b>","</b> roof."];
//var USE_TXT = ["Besides <b>drinking</b> and <b>cooking</b>, you use water for: "];
//var NO_USE = "Nothing";

///////////////////////////////////////////////////////////////// FINISH THIS SHIT !!!!!!!!!!!!!%%%%%%%$$$$$$$$$$###########

var DISPLAY_TXT = [];

//////////////////////////////////////////
//										//
//		SIMPLE RESULTS DISPLAY 		 	//
//										//
//////////////////////////////////////////

var ESSENTIAL_USE_LBL0 = "<b><i>Essential Water Need</b></i><br>Each day, your household needs about";
var ESSENTIAL_USE_LBL1 = "for <b>drinking</b> and <b>cooking</b>.";

var TOTAL_USE_LBL0 = "<b><i>Total Water Need</b></i><br>Each day, your household needs about";
var TOTAL_USE_LBL1 = "for ALL your water uses<br>(including drinking and cooking).";

var TANK_SIZE_LBL0 = "<b><i>Minimum Size of your Cistern</b></i><br>Based on your location, you can meet your household's entire ESSENTIAL water needs with a cistern of";
var TANK_SIZE_LBL1 = "";

var MORE_INFO_BUTTON_LBL = "More information";

var RHS_TITLE = "Results";
var YES_OR_NO_LBL = ["Your roof ", "large enough to support your household's essential water use of\xa0", "\xa0liters per day."];
var ADEQUATE_LBL = "IS";
var INADEQUATE_LBL = "IS NOT";

var L_ADDON_LBL = "<small> liters</small>";

////// 		FOOTER 					//////
var FOOTER_TXT = "<a href='https://www.caminosdeagua.org' target='_blank'>How does this work?</a> | Created by <a href='https://www.caminosdeagua.org' target='_blank'>Caminos de Agua</a> | Data from <a href='http://smn.cna.gob.mx/es/informacion-climatologica-ver-estado?estado=gto' target='_blank'>SMN</a>"

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
				
var TOOLTIP_TEXT = {
	yes_or_no: "This box indicates if you have a large enough roof to collect enough water for all of your household's essential water needs for the whole year, if you start collecting during the rainy season. This only takes drinking and cooking into account and is based on an average family who uses 5 liters per person per day. <br><br>Make sure that you only use water that is <a href='http://caminosdeagua.org/safe-healthy-sustainable-water/' target='_blank'>safe and healthy</a> for drinking and cooking!"
}