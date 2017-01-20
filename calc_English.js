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

var CHECKBOX_LBL = "I have my own monthly rainfall data ";

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
var LHS_INSTRUCTIONS = "Please make sure that the following information was entered correctly. If not, press the button below to change your information. Your results are displayed in the panel to the right. For an explanation of each result, hover your mouse over the relevant box. <br><br>These results refer to your household's <b>essential water</b> need - the amount of water needed for drinking and cooking only."
var PS_NOTE = "<i>Note: These results assume that your rainwater collection begins at the start of the rainy season. Starting at any other time of the year increases the risk of not always having enough rainwater stored during your system's first year.</i>";

var MUN_TXT = ["You live in <b>","</b>."];
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


var MIN_ROOF_LBL = ["Your household needs a minimum of", "square-meters of roof area to collect enough rainwater to cover your essential water needs."];
var MIN_TANK_LBL = ["If you use the minimum roof area, you need at least a", "liter cistern."];
var REAL_ROOF_LBL_GREEN = ["Your actual roof area of", "square-meters <b><big>can</big></b> collect enough water to provide at least", "liters per day, which is your household's essential water need."]; 
var REAL_ROOF_LBL_RED = ["Your actual roof area of", "square-meters <b>cannot</b> collect enough water to provide ", " liters per day, which is your household's essential water need."];
var REAL_TANK_LBL = ["If you want to collect all the water off your current roof, you need a cistern that is at least", "liters."];

var L_ADDON_LBL = "<small> liters</small>";

var TOOLTIP_TEXT = {
	min_roof: "<b><big>Minimum roof area</big></b><br>This number indicates the minimum roof area required for you to capture enough rainwater to meet your household's essential water need for the entire year. <br><br><i>This result assumes that your cistern begins collecting water at the beginning of the rainy season and is based on average rainfall data</i>. ",
	min_tank: "<b><big>Minimum cistern volume</big></b><br>If you use the minimum roof area inidicated to the left, you need this cistern volume to capture all the water coming off of your roof. This cistern will be large enough to meet your household's essential water need year-round on a year with <i>average rainfall</i>.",
	real_roof: "<b><big>Your actual roof area</big></b><br>This is your roof area. It is calculated by multiplying together the length and width of your roof.",
	real_tank: "<b><big>Required cistern volume using your current roof</big></b><br>If you collect all the water that hits your roof during an average year, you would need this cistern volume."
}

var MIN_HEADER = "<b>Minimum Essential Requirements</b>";
var REAL_HEADER = "<b>Your Roof's Capacity</b>";

////// 		FOOTER 					//////
var FOOTER_TXT = "<a href='https://www.caminosdeagua.org' target='_blank'>How does this work?</a> | Created by <a href='https://www.caminosdeagua.org' target='_blank'>Caminos de Agua</a> | Data from <a href='http://smn.cna.gob.mx/es/informacion-climatologica-ver-estado?estado=gto' target='_blank'>SMN</a>";

//////////////////////////////////////////
//										//
//		MOBILE BRWOSER DISPLAY	 		//
//										//
//////////////////////////////////////////

MOBILE_BROWSER_MESSAGE = "<big><b>We're sorry!</b></big><br>This rainwater harvesting calculator is not get available for mobile browers. You can view it on a laptop, desktop computer, or tablet. For more information on rainwater harvesting, please check out our <a href='https://www.caminosdeagua.org'>website</a>.";