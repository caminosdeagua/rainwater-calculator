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
//		 RESULTS DISPLAY 		 		//
//										//
//////////////////////////////////////////

// Minimum water requirement text 
var MIN_HEADER = "Minimum Water Requirements for Drinking & Cooking";

var MIN_WATER_LBL = ["Annual Water Need", "liters", "This is calculated by assuming that each member of your household uses an average of 5 liters per day for essential uses (drinking and cooking). The 5 liters per day is multiplied by the number of people in your household and the number of days in a year (365)"];

var MIN_ROOF_LBL = ["Minimum Roof Area", "m<sup>2</sup>", "This number indicates the minimum roof area required for you to capture enough rainwater to meet your household's essential water need for the entire year. This result assumes that your cistern begins collecting water at the beginning of the rainy season and is based on average rainfall data."];

var MIN_TANK_LBL = ["Minimum Cistern Volume", "liters", "If you use the minimum roof area inidicated to the left, you need this cistern volume to capture all the water coming off of your roof. This cistern will be large enough to meet your household's essential water need year-round on a year with average rainfall"];

// Current water capacity text
var REAL_HEADER = "Your Roof's Maximum Capacity";

var REAL_WATER_LBL = ["Annual Maximum Water Collection", "liters", "The water your current roof can collect over an average year. Caution: even if your current roof can collect more water (this box) than you need (the above box), be careful. Unless the above boxes are green, your cistern could still go dry."];

var REAL_ROOF_LBL = ["Your Current Roof Area", "m<sup>2</sup>", "This is your roof area. It is calculated by multiplying the length by the width of your roof."];

var REAL_TANK_LBL = ["Required Cistern Volume", "liters.", "If you collect all the water that hits your roof during an average year, you would need this cistern volume."];

var L_ADDON_LBL = "liters";



var WATER_DISCREPENCY_MSG = "Note: It appears that you can capture more water than your household needs. Be careful! Based on when the rain falls, if you used your current roof size, your cistern would go dry at least once during the year. See the 'Minimum Requirements for Drinking & Cooking' for our suggested roof and cistern sizes."

////// 		FOOTER 					//////
var FOOTER_TXT = "<a href='http://nbviewer.jupyter.org/github/caminosdeagua/rainwater-calculator/blob/master/data/Explanation.pdf' target='_blank'>How does this work?</a> | Created by <a href='https://www.caminosdeagua.org' target='_blank'>Caminos de Agua</a> | Data from <a href='http://smn.cna.gob.mx/es/informacion-climatologica-ver-estado?estado=gto' target='_blank'>SMN</a>";
