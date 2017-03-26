////////////////////////////////////////////////////////////////////
////						function init() 					////
//// 															////
////	Loads the text in the correct language, and sets up 	////
////	some basic form parameters.	Initializes the form, 		////
////	stores the starting values in a global, and hides all	////
////	error messages and extra text that needs to be hidden. 	////
////////////////////////////////////////////////////////////////////

function init() {

    displayOutputs();

};

////////////////////////////////////////////////////////////////////
////			function displayOutputs				 			////
//// 															////
////	Takes the calculated outputs and displays them on the	////
////	right hand side panel. 									////
////////////////////////////////////////////////////////////////////


function displayOutputs() {

    // Headers

    // Min water requirements header
    document.getElementsByClassName("min_header")[0].innerHTML = MIN_HEADER;

    // Minimum water requirement
    //    document.getElementsByName("min_water_numb")[0].innerHTML = numberWithCommas(Math.round(o.minWater));
    var els = document.getElementsByName("min_water_lbl");
    els[0].innerHTML = MIN_WATER_LBL[0];
    els[1].innerHTML = MIN_WATER_LBL[1];
    els[2].innerHTML = MIN_WATER_LBL[0];
    els[3].innerHTML = MIN_WATER_LBL[2];
    // Minimum Roof requirement
    //    document.getElementsByName("min_roof_numb")[0].innerHTML = numberWithCommas(Math.round(o.minRoofArea));
    var els = document.getElementsByName("min_roof_lbl");
    els[0].innerHTML = MIN_ROOF_LBL[0];
    els[1].innerHTML = MIN_ROOF_LBL[1];
    els[2].innerHTML = MIN_ROOF_LBL[0];
    els[3].innerHTML = MIN_ROOF_LBL[2];

    // Minimum Cistern requirement
    //    document.getElementsByName("min_tank_numb")[0].innerHTML = numberWithCommas(Math.round(o.minTankVolume));
    var els = document.getElementsByName("min_tank_lbl");
    els[0].innerHTML = MIN_TANK_LBL[0];
    els[1].innerHTML = MIN_TANK_LBL[1];
    els[2].innerHTML = MIN_TANK_LBL[0];
    els[3].innerHTML = MIN_TANK_LBL[2];


    // Current water capacity header
    document.getElementsByClassName("real_header")[0].innerHTML = REAL_HEADER;

    // Current annual water
    //    document.getElementsByName("real_water_numb")[0].innerHTML = numberWithCommas(Math.round(o.actualWater));
    var els = document.getElementsByName("real_water_lbl");
    els[0].innerHTML = REAL_WATER_LBL[0];
    els[1].innerHTML = REAL_WATER_LBL[1];
    els[2].innerHTML = REAL_WATER_LBL[0];
    els[3].innerHTML = REAL_WATER_LBL[2];

    // Current roof area
    //    document.getElementsByName("real_roof_numb")[0].innerHTML = numberWithCommas(Math.round10(o.actualRoofArea, -2));
    var els = document.getElementsByName("real_roof_lbl");
    els[0].innerHTML = REAL_ROOF_LBL[0];
    els[1].innerHTML = REAL_ROOF_LBL[1];
    els[2].innerHTML = REAL_ROOF_LBL[0];
    els[3].innerHTML = REAL_ROOF_LBL[2];


    // Current roof area
    //    document.getElementsByName("real_tank_numb")[0].innerHTML = numberWithCommas(Math.round(o.actualTankVolume));    
    var els = document.getElementsByName("real_tank_lbl");
    els[0].innerHTML = REAL_TANK_LBL[0];
    els[1].innerHTML = REAL_TANK_LBL[1];
    els[2].innerHTML = REAL_TANK_LBL[0];
    els[3].innerHTML = REAL_TANK_LBL[2];



}
