

			////////////////////////////////////////////////////////////////////
			////						function init() 					////
			//// 															////
			////	Loads the text in the correct language, and sets up 	////
			////	some basic form parameters.	Initializes the form, 		////
			////	stores the starting values in a global, and hides all	////
			////	error messages and extra text that needs to be hidden. 	////
			////////////////////////////////////////////////////////////////////

			function init() {
				if(detectMobile()) {	// check if the browser is a mobile browser

					applyMobileDisplay()

				} else {
					location.hash = 0;	// hashes (#) are used as a hack to allow the user to navigate
										//	back/forward in their web browser, since this web-app's
										//	functionality doesn't involve server calls and is entirely
										//	javascript- and browser-based.
										//	See the functions incrementHash() and onhashchange() for details.

					initForm();
					initEmbeddedMap();

					hideComplexOutput();

					setTimeout(function() {			// a 1 second timeout allows the geojson rain data to load
						loadStartingValues();
						displayStuff = inputs2outputs(allData);
						displayOutputs(displayStuff);
						addLanguageText();
					}, 1000)

					startInterrupt();

				}
			};

			////////////////////////////////////////////////////////////////////
			////				function detectMobile()						////
			//// 															////
			////	Checks to see if the user is on a mobile browser.		////
			////	Args:	none.											////
			////	Returns: true if mobile, false otherwise				////
			////////////////////////////////////////////////////////////////////

			function detectMobile() {	// Thanks to Michael Zaporozhets for this function: http://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
				var check = false;
				(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
				return check;
			};


			////////////////////////////////////////////////////////////////////
			////				function applyMobileDisplay()				////
			//// 															////
			////	Applies the mobile display, removes desktop display.	////
			////////////////////////////////////////////////////////////////////

			function applyMobileDisplay() {
				document.getElementById("mobile_browser_message").innerHTML = MOBILE_BROWSER_MESSAGE;
				document.getElementById("everything").style.display = "none";
				document.getElementById("mobile_browser_display").style.display = "block";


			}

			////////////////////////////////////////////////////////////////////
			////				function addLanguageText()					////
			//// 															////
			////	Loads the text in the correct display language.			////
			////////////////////////////////////////////////////////////////////

			function addLanguageText(){
				document.getElementById("header").innerHTML = HEADER; 				// Puts the correct language text on the page
				document.getElementById("sub_header").innerHTML = SUB_HEADER;		//	for all elements
				document.getElementById("instructions").innerHTML = INSTRUCTIONS;
				document.getElementById("useMonthly_lbl").innerHTML = CHECKBOX_LBL;
				document.getElementById("muni0").innerHTML = MUNI0_LBL;
				document.getElementById("ppl0").innerHTML = PPL0_LBL;
				document.getElementById("length0").innerHTML = LENGTH0_LBL;
				document.getElementById("width0").innerHTML = WIDTH0_LBL;
				document.getElementById("roof0").innerHTML = ROOF0_LBL;
				document.getElementById("cement_roof").nextSibling.data = CEMENT_ROOF_LBL;
				document.getElementById("sheet_roof").nextSibling.data = SHEET_ROOF_LBL;
				document.getElementById("spanish_roof").nextSibling.data = SPANISH_ROOF_LBL;
				document.getElementById("calc_button").innerHTML = CALC_BUTTON_LBL;
				document.getElementById("back2inputs_button").innerHTML = BACK2INPUTS_BUTTON_LBL;
				document.getElementById("header_display").innerHTML = HEADER;
				document.getElementById("sub_header_display").innerHTML = LHS_DISPLAY_TITLE;
				document.getElementById("instructions_display").innerHTML = LHS_INSTRUCTIONS;
				document.getElementById("monthly_rain_lbl").innerHTML = MONTHLY_RAIN_LBL;
				document.getElementById("ps_note").innerHTML = PS_NOTE;

				var els = document.getElementsByClassName("footer")
				for (var i=0; i<els.length; i++) {
					els[i].innerHTML = FOOTER_TXT;
				};

				// label the monthly rain boxes	//
				els = document.getElementsByName("rain_lbl")
				for(var i=0; i<els.length; i++) {
					els[i].innerHTML = MONTHS[i]+":";
				}


				// grab the helper images //
				els = document.getElementsByName("roof_imgs");
				for(var i=0; i<els.length; i++) {
					els[i].innerHTML = "<a href="+ROOF_URLS[i]+"target='_blank'><img src="+ROOF_URLS[i]+" style='height: 126px; width: 126px; margin: 2px; border: 0px; border-radius: 15px;'></img></a>";
				}

				updateOutputText();
			}

			////////////////////////////////////////////////////////////////////
			////				function initForm()							////
			//// 															////
			////	Initializes the form to not auto-validate so we can 	////
			////	display our own error messages.							////
			////////////////////////////////////////////////////////////////////

			function initForm() {
				form = document.getElementById("calc_form");						// Sets the global form so everyone can access it;
				form.noValidate = true;												// Turns off auto-validate so we can self-validate
				form.onchange = validateForm;
				form.onsubmit = validateForm;
				form.onkeyup = validateForm;


			}

			////////////////////////////////////////////////////////////////////
			////				function loadStartingValues()				////
			//// 															////
			////	Loads the starting values into a global array.			////
			////////////////////////////////////////////////////////////////////

			function loadStartingValues() {

				document.getElementById("useMonthly").checked = false; 				// make sure checkbox defaults to map-view

				allData = {															// initializes the structure of the global, allData
					place: mun,
					municipality_name: MUN_STARTING_VALUE,
					station_name: STATION_STARTING_VALUE,
					ppl: Number(document.getElementById("ppl").value),				// 	and feeds in initial conditions.
					length: Number(document.getElementById("length").value),
					width: Number(document.getElementById("width").value),
					roof_type: 0,
					useMonthly: Boolean(document.getElementById("useMonthly").checked)
				};


				els = document.getElementsByName("roof_type");
				for (var i=0; i<els.length; i++) {
					if(els[i].checked) {allData.roof_type = els[i].value}
				}

			}

			////////////////////////////////////////////////////////////////////
			////				function hideComplexOutput()				////
			//// 															////
			////	Hides the LHS_display.									////
			////////////////////////////////////////////////////////////////////

			function hideComplexOutput() {
				document.getElementById("LHS_display").style.opacity = 0;
				document.getElementById("LHS_display").hidden = true;
			}


			////////////////////////////////////////////////////////////////////
			////				function updateLHS(el) 						////
			//// 															////
			////	Updateds the LHS depending on whether the use_Monthly	////
			////	checkbox is checked. It takes in an HTML element and 	////
			////	adjusts the display on the LHS accordingly.				////
			////////////////////////////////////////////////////////////////////

			function updateLHS(el) {

				if (el.id == "useMonthly") {	// if checkbox is the changed element
					if (el.checked) { 			// if using monthly data
						fadeOut(WaterMapDiv, true)
						fadeIn(MonthlyUseDiv)
					} else {					// if using data from the map
						fadeOut(MonthlyUseDiv, true)
						fadeIn(WaterMapDiv)
						document.getElementById("calc_button").disabled = false;
					};
				}

				if (document.getElementById("useMonthly").checked) {
					if (anyRain()) {
						document.getElementById("calc_button").disabled = false;
					} else {
						document.getElementById("calc_button").disabled = true;
					}
				}
			}

			////////////////////////////////////////////////////////////////////
			////				function anyRain()							////
			//// 															////
			////	returns true if there's any rain, otherwise returns 	////
			////	false.													////
			////////////////////////////////////////////////////////////////////

			function anyRain() {		//
				var els = document.getElementsByName("rain");
				var totalRain = 0;
				for (var i=0; i<MONTHS.length; i++) {
					totalRain += Number(els[i].value);
				}

				var people = Number(document.getElementById("ppl").value);
				var sensitivity = totalRain/people;
				if (sensitivity > EPSILON) {return true}
				else {return false}
			}


			////////////////////////////////////////////////////////////////////
			////				function updateOutputText() 				////
			//// 															////
			////	Updates the text that's displayed on the LHS display	////
			////	screen after the user submits the form.					////
			////////////////////////////////////////////////////////////////////


			function updateOutputText() {
				var indent = "\xa0\xa0\xa0";

				// print monthly rainfall if entered manually.
				if (allData.useMonthly) {
					DISPLAY_TXT[0] = MONTHLY_USE_TXT+"<br>"
					for (var i=0; i<MONTHS.length; i++) {
						DISPLAY_TXT[0] += indent+FULL_MONTHS_DISPLAY[i]+": <b>"+allData[RAINS[i]]+"</b>"+UNITS+"<br>";


					}

				} else { 		// otherwise display person's location
					DISPLAY_TXT[0] = MUN_TXT[0]+allData.municipality_name+MUN_TXT[1]; 	// Display municipality message
				}

				// print # of people in household
				if (allData.ppl > 1) { 													// Parse person (1) or people (>1)
					DISPLAY_TXT[1] = PPL_TXT[0]+allData.ppl+PPL_TXT[2];
				} else {
					DISPLAY_TXT[1] = PPL_TXT[0]+allData.ppl+PPL_TXT[1];
				}

				// print roof dimensions
				if (allData.length == 1 && allData.width == 1) {
					DISPLAY_TXT[2] = LEN_WID_TXT[0]+allData.length+SINGULAR_DIMENSION+LEN_WID_TXT[1]+allData.width+SINGULAR_DIMENSION+LEN_WID_TXT[2];
				} else if (allData.length == 1) {
					DISPLAY_TXT[2] = LEN_WID_TXT[0]+allData.length+SINGULAR_DIMENSION+LEN_WID_TXT[1]+allData.width+PLURAL_DIMENSION+LEN_WID_TXT[2];
				} else if (allData.width == 1) {
					DISPLAY_TXT[2] = LEN_WID_TXT[0]+allData.length+PLURAL_DIMENSION+LEN_WID_TXT[1]+allData.width+SINGULAR_DIMENSION+LEN_WID_TXT[2];
				} else {
					DISPLAY_TXT[2] = LEN_WID_TXT[0]+allData.length+PLURAL_DIMENSION+LEN_WID_TXT[1]+allData.width+PLURAL_DIMENSION+LEN_WID_TXT[2];
				}

				// print roof type
				DISPLAY_TXT[3] = ROOF_TYPE_TXT[0]+ROOF_TYPES_LOWER[allData.roof_type]+ROOF_TYPE_TXT[1];


				var els = document.getElementsByClassName("water_use"); 	// Display all other water uses.

				var els = document.getElementsByName("display_text"); 		// Actually update all the <p> elements
				for (var i=0; i<els.length; i++) {
					els[i].innerHTML = DISPLAY_TXT[i];
				};
			}

			////////////////////////////////////////////////////////////////////
			////	function keydown(event) [Prevent form submit on enter]	////
			//// 															////
			////	checks to see if the key that was pressed was 			////
			////	key #13 (enter/return). If so, it prevents the default 	////
			////	behavior of submitting the form. That way, we never 	////
			////	send the data anywhere, just calculate some stuff with 	////
			////	it here. 												////
			////////////////////////////////////////////////////////////////////


			$(document).ready(function() {
				$(window).keydown(function(event){
					if(event.keyCode == 13) {
					event.preventDefault();
					return false;
					}
				});
			});

			////////////////////////////////////////////////////////////////////
			////	function keypress(event) [check validity of keystroke]	////
			//// 															////
			////	checks to see if the key that was pressed was 			////
			////	a valid key. If not, doesn't allow keypress.			////
			////////////////////////////////////////////////////////////////////

			$('input').bind('keypress', function (event) {
				if (event.target.type == "number") { 								// If it's being entered in a numeric field
					//console.log(event)
					//console.log("key pressed is: "+event.originalEvent.charCode)
					if (!event.originalEvent.charCode) {
						return true;
					} else if (!numAcceptableKeys.includes(event.originalEvent.charCode)) { 	// If the key isn't a number or a movement key
						event.preventDefault(); 									// 	prevent behavior
						return false;
					} else {
						return true;
					};
				} else { 							// If the field isn't a number, allow all behavior.
					return true;
				};
			});

			////////////////////////////////////////////////////////////////////
			////					fucntion validateForm(event)			////
			//// 															////
			////	Takes an element, el. If the value of el is forbidden	////
			////	or outside of the relevant ranges, replaces it with the	////
			////	closest reasonable alternative.							////
			////	This is called every time the form is changed (user		////
			////	leaves the relevant element by pressing tab or clicking	////
			////	outside). At the end, this function calls updateLHS(el)	////
			////	to update the left hand side to account for personal	////
			////	monthly rainwater data entry. 							////
			////////////////////////////////////////////////////////////////////


			function validateForm(event) {
				event = (event ? event : window.event);
				var el = (event.target ? event.target : event.srcElement);
				var value = Number(el.value);
				if (event.type != 'keyup') {
					if (el.id == "ppl") {
						if (value < el.min)	{
							el.value = el.min;
						} else if (value > el.max) {
							el.value = el.max;
						} else if (value % 1 != 0 & el.id == "ppl") {
							el.value = parseInt(value, 10);
						};
					} else if (el.id == "length" | el.id == "width") {
						if (value < el.min) {
							el.value = el.min;
						} else if (value > el.max) {
							el.value = el.max;
						};
					};
				}
				updateLHS(el)
			}

			////////////////////////////////////////////////////////////////////
			////				functions fadeIn(el), fadeOut(el) 			////
			//// 															////
			////	Fades in or out the passed element by adjusting the 	////
			////	the div element's opacity in steps. Many thanks to:		////////////////////
			////	http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/ 	////
			////	for this simple and lovely bit of js. Cheers! 							////
			////	If the div is visible, fadeIn does nothing. If it's not, fade out 		////
			////	does nothing. 															////
			////////////////////////////////////////////////////////////////////////////////////

			function fadeOut(el, hide){
				(function fade() {
					if ((el.style.opacity -= .09) < 0) {
					el.style.opacity = 0;
					} else {
					requestAnimationFrame(fade);
					}
				})();

				if (hide) {
					el.style.display = "none";
				};
				el.hidden = true;
			}

			function fadeIn(el){

				el.style.opacity = 0;
				el.hidden = false;
				el.style.display = "inline-block";

				(function fade() {
					var val = parseFloat(el.style.opacity);
					if (!((val += .075) > 1)) {
					el.style.opacity = val;
					requestAnimationFrame(fade);
					}
				})();

			}

			////////////////////////////////////////////////////////////////////
			////		--- BUG FIX FOR QUICK BACK/FORWARD CLICK --- 		////
			////	function startInterrupt() / checkAndPatchLayout()		////
			//// 															////
			////	This interrupt checks to make sure the correct display	////
			////	is being shown. For even hashes (#0, #2, #4, etc.) the	////
			////	input panel should be full-window. For odd hashes, the 	////
			////	LHS display and RHS results should share the window.	////
			////	startInterrupt() initializes the interrupt which calls	////
			////		checkAndPatchLayout().								////
			////	checkAndPatchLayout() adjusts the display LHS/RHS widths////
			////	based on the hash's parity.								////
			////////////////////////////////////////////////////////////////////


			function startInterrupt() {
				var myInterval = setInterval( "checkAndPatchLayout()", INTERRUPT_INTERVAL);  // interrupts to make sure the panels are being displayed correctly
			}

			function checkAndPatchLayout() {		// this corrects for people rapidly clicking the browser's "back" or "forward" buttons.
				var hash = Number(location.hash.substring(1));
				if (hash%2 == 0) { 	// if the hash is even, display the input pane
					document.getElementById("left_hand_side").style.width = INPUT_WIDTH_BEFORE;
					document.getElementById("right_hand_side").style.width = OUTPUT_WIDTH_BEFORE;
					document.getElementById("caminos_logo2").style.display = "none";
				} else {		// if the hash is odd, display the output/display panes
					document.getElementById("left_hand_side").style.width = INPUT_WIDTH_AFTER;
					document.getElementById("right_hand_side").style.width = String(window.innerWidth - INPUT_WIDTH_AFTER_RAW - 1)+"px";
					document.getElementById("caminos_logo2").style.display = "block";
				}
			}

			////////////////////////////////////////////////////////////////////
			////			function displayOutputs				 			////
			//// 															////
			////	Takes the calculated outputs and displays them on the	////
			////	right hand side panel. 									////
			////////////////////////////////////////////////////////////////////


			function displayOutputs(o) {
				// Display RHS headers
				document.getElementById("min_header").innerHTML = MIN_HEADER;
				document.getElementById("real_header").innerHTML = REAL_HEADER;

				// Display all text
				var elRealRoof = document.getElementsByName("real_roof")[0]
				var elRealTank = document.getElementsByName("real_tank")[0]
				var elRealTankLbls=document.getElementsByName("real_roof_lbl");

				var elMinRoof = document.getElementsByName("min_roof")[0]
				var elMinWater = document.getElementsByName("min_water")[0]
				var elMinTank = document.getElementsByName("min_tank")[0]
				var elMinRoofLbls = document.getElementsByName("min_roof_lbl");
				var elMinWaterLbls = document.getElementsByName("min_water_lbl");
				var elMinTankLbls = document.getElementsByName("min_tank_lbl");

				// if the user's roof IS large enough
				if (o.minRoofArea <= o.actualRoofArea) {
					elMinRoof.style.backgroundColor = GREEN;
					elMinWater.style.backgroundColor = GREEN;
					elMinTank.style.backgroundColor = GREEN;

					elMinRoofLbls[0].innerHTML = MIN_ROOF_LBL_GREEN[0];
					elMinRoofLbls[1].innerHTML = MIN_ROOF_LBL_GREEN[1];
					document.getElementsByName("real_tank_numb")[0].innerHTML = numberWithCommas(Math.round(o.actualTankVolume));

				} else {			// if the user's roof is TOO SMALL
					elMinRoof.style.backgroundColor = RED;
					elMinWater.style.backgroundColor = RED;
					elMinTank.style.backgroundColor = RED;
					elMinRoofLbls[0].innerHTML = MIN_ROOF_LBL_RED[0];
					elMinRoofLbls[1].innerHTML = MIN_ROOF_LBL_RED[1];
					document.getElementsByName("real_tank_numb")[0].innerHTML = numberWithCommas(Math.round(Math.max.apply(null, [o.actualTankVolume, o.maxMonthlyCollection])));

				}

				// Display all the numbers, rounded to 0 or 2 decimal places, depending
				document.getElementsByName("min_roof_numb")[0].innerHTML = numberWithCommas(Math.round(o.minRoofArea));
				document.getElementsByName("min_tank_numb")[0].innerHTML = numberWithCommas(Math.round(o.minTankVolume));
				document.getElementsByName("real_roof_numb")[0].innerHTML = numberWithCommas(Math.round10(o.actualRoofArea, -2));
				document.getElementsByName("min_water_numb")[0].innerHTML = numberWithCommas(Math.round(o.minWater));
				document.getElementsByName("real_water_numb")[0].innerHTML = numberWithCommas(Math.round(o.actualWater));


				// Fill in more language text
				var els=document.getElementsByName("real_tank_lbl");
				for (var i=0; i<els.length; i++) {
					els[i].innerHTML = REAL_TANK_LBL[i];
				}

				var els=document.getElementsByName("min_tank_lbl");
				for (var i=0; i<els.length; i++) {
					els[i].innerHTML = MIN_TANK_LBL[i];
				}

				var els=document.getElementsByName("real_roof_lbl");
				for (var i=0; i<els.length; i++) {
					els[i].innerHTML = REAL_ROOF_LBL[i];
				}

				var els=document.getElementsByName("min_water_lbl");
				els[0].innerHTML = MIN_WATER_LBL[0];
				els[1].innerHTML = MIN_WATER_LBL[1]+"<b><big>"+numberWithCommas(Math.round(o.essentialDailyUse)) +"</big></b>"+MIN_WATER_LBL[2];

				var els=document.getElementsByName("real_water_lbl");
				for (var i=0; i<els.length; i++) {
					els[i].innerHTML = REAL_WATER_LBL[i];
				}

			}

			////////////////////////////////////////////////////////////////////
			////			function incrementHash			 				////
			//// 															////
			////	Grabs the current hash from the URL and stores it in	////
		 	////	the global "hash". Then increments the URL's hash by 1.	////
			////////////////////////////////////////////////////////////////////

			function incrementHash() {
				hash = Number(location.hash.substring(1));
				location.hash = hash+1;
			}

			////////////////////////////////////////////////////////////////////
			////			function onhashchange			 				////
			//// 															////
			////	When the hash changes, if the parity is the same, do 	////
			////	nothing. Otherwise, toggle to the other state. After	////
			////	toggling, adjust the global "hash" to the current value	////
			////////////////////////////////////////////////////////////////////

			window.onhashchange = function() {
			var hashNumb = Number(location.hash.substring(1));
				if (hashNumb%2 != hash%2) {	// if we're going to a new page, do some stuff...

					if (hashNumb%2 == 1) { // if the new hash is odd, display the output panel
						left2right();
					} else { 										// if the hash is even, display the input panel
						right2left();
					}
					hash = Number(location.hash.substring(1));	// update so that current previous hash = current hash

				}

			}

			////////////////////////////////////////////////////////////////////
			////	functions left2right / right2left / replace(e0, e1)		////
			//// 															////
			////	The functions execute the preliminary steps in switching////
			////	from the input (left) panel to the display/results		////
			////	(right) panel:											////
			////	left2right --- do all calculations! swap out the LHS 	////
			////		content, then shift the panel widths.				////
			////	right2left --- same as above but without the calcs.		////
			////	replace(e0, e1) --- fades out e0 and fades in e1. e0 is	////
			////		hidden in the process.
			////////////////////////////////////////////////////////////////////

			function left2right() {
				calculateStuff();
				replace('LHS_inputs','LHS_display');
				widthShift();

			}

			function right2left() {
				replace('LHS_display','LHS_inputs');
				widthShift();
			}

			function replace(e2hide, e2show) {
				fadeOut(document.getElementById(e2hide), true);
				fadeIn(document.getElementById(e2show));
			}

			////////////////////////////////////////////////////////////////////
			////			function widthShift				 				////
			//// 															////
			////	Toggles between the input and results panels.			////
			////	Slides all scrollbars to the top after each toggle.		////
			////////////////////////////////////////////////////////////////////

			function widthShift() {

				var lhs = document.getElementById("left_hand_side").offsetWidth;
				var rhs = document.getElementById("right_hand_side").offsetWidth;

				if (lhs > rhs) {
					document.getElementById("left_hand_side").style.width = INPUT_WIDTH_AFTER;
					document.getElementById("right_hand_side").style.width = String(window.innerWidth - INPUT_WIDTH_AFTER_RAW - 1)+"px";
					document.getElementById("caminos_logo2").style.display = "block";
					$("#right_hand_side").scrollTop(0);
					$("#LHS_display").scrollTop(0);

				} else {
					document.getElementById("left_hand_side").style.width = INPUT_WIDTH_BEFORE;
					document.getElementById("right_hand_side").style.width = OUTPUT_WIDTH_BEFORE;
					document.getElementById("caminos_logo2").style.display = "none";
					$("#right_hand_side").scrollTop(0);
					$("#LHS_inputs").scrollTop(0);
				};
			}



			////////////////////////////////////////////////////////////////////
			////			function inputs2outputs				 			////
			//// 															////
			////	Takes the user's entered inputs and converts them into	////
			////	outputs. This is the function that contains all of the 	////
			////	citeable-materials, it is the backbone of the actual	////
			////	calculation process.									////
			////															////
			////	Arguments:												////
			////		inputs --- a dictionary of all of the user inputs	////
			////															////
			////	Returns:												////
			////		outputs --- a dictionary of things to display to 	////
			////					user. Fields include:					////
			////						essentialDailyUse [L/day]			////
			////						totalOtherUse [L/day]				////
			////						minTankSize [L]						////
			////						montlyUse [L] (a 1x12 array with a 	////
			////							cell for each month's use)		////
			////						monlyCollection [L] (1x12 array) 	////
			////						minWater [L]						////
			////						actualWater [L]						////
			////															////
			////	Algorithm: 												////
			////		CHANTAL WILL FILL OUT THIS SECTION OF THE COMMENTS	////
			////		WITH HER USUAL FOCUS ON STYLE AND CLARITY =)		////
			////															////
			////	Update/Revision History:								////
			////		aaron krupp 	2/Nov/2016	empty function written	////
			////									comments header written ////
			////////////////////////////////////////////////////////////////////

			function inputs2outputs(inputs) {
				var outputs = {essentialDailyUse: 0,
					minTankVolume: 0,
					minRoofArea: 0,
					actualRoofArea: 0,
					actualTankVolume: 0,
					maxMonthCollection: 0
				};

				//////////////////////////////////////////////////////////////////
				//	This next sextion calculates the minimum adequate roof 		//
				//	and cistern sizes for the provided family size and area.	//
				//////////////////////////////////////////////////////////////////

				var essential = ESSENTIAL_DAILY_USE * (inputs.ppl);      // essential daily use / household

				var rainfall;
				if (inputs.useMonthly) { 					// grab monthly use rain
					rainfall = [inputs.jan_rain, inputs.feb_rain, inputs.mar_rain, inputs.apr_rain, inputs.may_rain, inputs.jun_rain, inputs.jul_rain, inputs.aug_rain, inputs.sep_rain, inputs.oct_rain, inputs.nov_rain, inputs.dec_rain];
				} else {
					rainfall = getRainfall(inputs.place); 	// grabs rainfall from geojson data for the selected polygon.
				}

				// next lines are for displaying used rain data//
				var	totalRain = 0;
				for (var i=0; i<12; i++){
					console.log(FULL_MONTHS[i]+": "+rainfall[i]+" mm");		// use the english version of months so debugging can be consistently in English (in case we do lots of other languages)
					totalRain += Number(rainfall[i]);
				}
				console.log("TOTAL RAINFALL: "+totalRain+" mm");
				/////////////////////////////////////////////////

				var testArea = 0;							// start with area of 0 (it gets bumped up to 1 in the first loop itteration);
				var testAreaAdequate = false;				// default: user doesn't have adequate roof space.

				if (rainfall[0] != -1 && totalRain != 0) {		// as long as something's been entered for rainfall: i.e.  if the rainfall data has loaded:

					while (!testAreaAdequate) {				// while there isn't enough roof area
						testArea=testArea+1;				// increment the area

						var test;
						if (inputs.useMonthly) {
							test = getCisternSize(rainfall, testArea, EFFS[inputs.roof_type], essential ,-1 , inputs.useMonthly) 	// get the cistern size for entered monthly rainfall
						} else {
							test = getCisternSize(rainfall, testArea, EFFS[inputs.roof_type], essential , SMA_START_MONTH, inputs.useMonthly) // get cistern size for Independence watershed
						}

						testAreaAdequate = test.adequate;	// and store whether this roof is adeqaute
					}
				} else {									// If the rainfall data hasn't loaded yet
					var test = {adequate: false, volume: 0}// 	fill with some made up data
					testArea = 99999999999999;				// This is just an outrageously large number
				}											//	so that it will say "your roof isn't big enough!"
															//	if the user hasn't entered a roof size.

				//////////////////////////////////////////////////////////////////
				//	This next sextion calculates the required minimum cistern 	//
				//	size if the user wanted to collect 100% of the water off	//
				//	their provided roof size in the average year. 				//
				//////////////////////////////////////////////////////////////////

				var actualArea = inputs.length * inputs.width;
				var actual;
				if(inputs.useMonthly) {
					actual = getCisternSize(rainfall, actualArea, EFFS[inputs.roof_type], essential, -1, inputs.useMonthly);
				} else {
					actual = getCisternSize(rainfall, actualArea, EFFS[inputs.roof_type], essential, SMA_START_MONTH, inputs.useMonthly);
				}

				var maxRain = Math.max.apply(null, rainfall);
				var maxMonthlyCollection = maxRain*actualArea;

				outputs.essentialDailyUse = essential; 		// Water consumption for cooking & drinking [L/day]
				outputs.minTankVolume = test.volume;		// once the roof size is adequate, this is the volume of the requisite cistern [L]
				outputs.actualRoofArea = actualArea;		// the user-provided roof area [m2]
				outputs.minRoofArea = testArea;				// and this holds the minimum acceptable roof size for supporting the given population [m2]
				outputs.actualTankVolume = actual.volume;	// cistern volume required to capture 100% of rainfall on user-provided roof area [L]
				outputs.maxMonthlyCollection = maxMonthlyCollection // maximum volume collectible in a month
				outputs.minWater = 365*essential;		// Total water collected off the minimum roof area [L/year]
				outputs.actualWater = actual.totalCollected;// Total water collected off the actual roof area [L/year]

				return outputs

			}

			////////////////////////////////////////////////////////////////////
			////			function getCisternSize				 			////
			//// 															////
			////	Args:													////
			////		rainfall 	1x12 array with monthly rainfall [mm]	////
			////		area		area of the roof [m2]					////
			////		eff			efficiency of roof [0,1]				////
			////		dailyUse 	household's daily avg water consumption	////
			////					[L/day]									////
			////															////
			////	Returns:												////
			////		.adequate 	tells if a roof is large enough to 		////
			////					support the provided daily use for the 	////
			////					entire year. [boolean]					////
			////		.volume		returns the cistern volume required to	////
			////					capture 100% of rainwater from the 		////
			////					provided roof area and rainfall [L].	////
			////															////
			////	Algorithm:												////
			////		Loops through all months. Calculates 				////
			////		inventory[i] = inventory[i-1] + collected[i] - use[i] //
			////		Begins this process at START_MONTH which can be set ////
			////		in globals.js. If any month has an inventory of 0,	////
			////		then .adequate returns false. otherwise, it returns	////
			////		true. 												////
			////////////////////////////////////////////////////////////////////

			function getCisternSize(rainfall, area, eff, dailyUse, startMonth, useMonthly) {
				var results = {adequate: true, volume: 0, totalCollected: 0};
				var inventory = Array.apply(null, Array(DAY_MON.length)).map(Number.prototype.valueOf,0);

				var single_first_flush = area*CLEANLINESS_FACTOR;	// number of liters removed in 1st flush system

				if(startMonth == -1) {

					startMonth = rainfall.indexOf(Math.max.apply(null, rainfall));
				}

				var totalCollectedWater = 0;
				var monthlyCollectedWater;

				for (var i=startMonth; i<DAY_MON.length+startMonth; i++) {
					var monthlyUse = dailyUse*DAY_MON[i%DAY_MON.length];							// people * L/(people*day) * day/month = [L/month]
					var losses2first_flush = single_first_flush*RAIN_EVENTS[i%DAY_MON.length]		// (liters flushed / rain event) * # of rain events
					if (useMonthly) {
						losses2first_flush = single_first_flush*NULL_RAIN_EVENTS[i%DAY_MON.length]		// if the user isn't from SMA, don't account for 1st flush losses.
					}

					monthlyCollectedWater = rainfall[i%DAY_MON.length]*area*eff;				// get the collected water for the month
					totalCollectedWater = monthlyCollectedWater + totalCollectedWater;			// store it to calculate how much water is collected total.
					inventory[i%DAY_MON.length] = (monthlyCollectedWater - losses2first_flush)- monthlyUse;		// (collectible rainfall - amount 1st flushed per month) - monthly consumption = [L stored/month]


					if ( i%DAY_MON.length != startMonth ) {					// For all months but the first one,
						if (i%DAY_MON.length == 0) {
							inventory[i%DAY_MON.length]=inventory[DAY_MON.length-1]+inventory[i%DAY_MON.length];// if january, add to inventory of december
						} else {																				//	add the current inventory to the previous. (even when its 0).
							inventory[i%DAY_MON.length]=inventory[(i-1)%DAY_MON.length]+inventory[i%DAY_MON.length];
						}
					}

					if (inventory[i%DAY_MON.length]<0) { 							// Make sure that inventory is >=0
						inventory[i%DAY_MON.length]=0;								// 	if not, set it to zero
						results.adequate = false;						// 	and indicate that the roof space is inadequate for the family's needs
					}
				}
				//console.log("rainfall: "+rainfall)
				//console.log("area: "+area)
				//console.log("eff: "+eff)
				//console.log(inventory)
				//console.log(results.adequate)
				results.volume = Math.max.apply(null, inventory);		// The volume of the tank is the max value of the inventory.
				results.totalCollected = totalCollectedWater;
				return results
			}

			////////////////////////////////////////////////////////////////////
			////			function addTooltipText(el)			 			////
			//// 															////
			////	Adds the appropriate text to a tooltip when the user 	////
			////	hovers their mouse over the corresponding div.			////
			////////////////////////////////////////////////////////////////////

			function addTooltipText(el) {
				var name = el.getAttribute("name"); 			// grab the element name
				if (name != currentTooltipName) {				// if we're on a new name
					for(var i=0; i<el.children.length; i++) {	// loop through all children
						if (el.children[i].nodeName != "BR") {	// make sure to ignore any <br> elements
							el.children[i].innerHTML = TOOLTIP_TEXT[name];
							break;								// set the next element to the desired inner HTML
						}										//	then break out of the for-loop.
					}
				}
			}

			////////////////////////////////////////////////////////////////////
			////			function numberWithCommas		 				////
			//// 															////
			////	Adds commas between every 3rd digit for the standard 	////
			////	US/Mexico numerical display format. Returns the number  ////
			//// 	as a string.											////
			////////////////////////////////////////////////////////////////////

			function numberWithCommas(x) {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}

			////////////////////////////////////////////////////////////////////
			////			function highlight(el)				 			////
			//// 															////
			////	Changes the background color of the arg element to 		////
			////	light blue.												////
			////////////////////////////////////////////////////////////////////

			function highlight(el) {
				el.style.color = LIGHT_BLUE;
			}

			////////////////////////////////////////////////////////////////////
			////			function unHighlight(el)						////
			//// 															////
			////	Changes the background color of the arg element to 		////
			////	black.													////
			////////////////////////////////////////////////////////////////////

			function unHighlight(el) {
				el.style.color = BLACK;
			}

			////////////////////////////////////////////////////////////////////
			////			function calulateStuff(el)						////
			//// 															////
			////	Super original function name, I know...					////
			////	This grabs all the current form values and stores them	////
			////	in the global "allData". Then it calls three functions,	////
			////	updateOutputText(), inputs2outputs(allData), and 		////
			////	displayOutputs(inputs2outputs(allData)) which in turn	////
			////	execute all calculations and update all display data.	////
			////////////////////////////////////////////////////////////////////

			function calculateStuff() {
				allData.jan_rain = Number(document.getElementById("jan_rain").value);
				allData.feb_rain = Number(document.getElementById("feb_rain").value);
				allData.mar_rain = Number(document.getElementById("mar_rain").value);
				allData.apr_rain = Number(document.getElementById("apr_rain").value);
				allData.may_rain = Number(document.getElementById("may_rain").value);
				allData.jun_rain = Number(document.getElementById("jun_rain").value);
				allData.jul_rain = Number(document.getElementById("jul_rain").value);
				allData.aug_rain = Number(document.getElementById("aug_rain").value);
				allData.sep_rain = Number(document.getElementById("sep_rain").value);
				allData.oct_rain = Number(document.getElementById("oct_rain").value);
				allData.nov_rain = Number(document.getElementById("nov_rain").value);
				allData.dec_rain = Number(document.getElementById("dec_rain").value);
				allData.ppl = Number(document.getElementById("ppl").value);
				allData.length = Number(document.getElementById("length").value);
				allData.width = Number(document.getElementById("width").value);
				allData.useMonthly = document.getElementById("useMonthly").checked;
				allData.municipality_name = String(geojson._layers[mun].feature.properties.NOMGEO);
				allData.station_name = String(geojson._layers[mun].feature.properties.Station);
				allData.place = mun;

				var radios = document.getElementsByName("roof_type");
				for (var i=0; i<radios.length; i++) {
					if (radios[i].checked) {
						allData.roof_type = radios[i].value;
					}
				}

				updateOutputText();						// Update LHS display
				displayStuff = inputs2outputs(allData); // calculate!
				displayOutputs(displayStuff); 			// display the calcuated values on the RHS!



			}

			////////////////////////////////////////////////////////////////////
			////			function onresize(event)				 		////
			//// 															////
			////	When the window is resized, adjusts the display widths.	////
			////////////////////////////////////////////////////////////////////

			window.onresize = function(event) {
				var lhs = document.getElementById("left_hand_side").offsetWidth;
				var rhs = document.getElementById("right_hand_side").offsetWidth;
				if (rhs != 0) {
					document.getElementById("left_hand_side").style.width = INPUT_WIDTH_AFTER;
					document.getElementById("right_hand_side").style.width = String(window.innerWidth - INPUT_WIDTH_AFTER_RAW - 1)+"px";
					$("#right_hand_side").scrollTop(0);
				}
			};

			////////////////////////////////////////////////////////////////////
			////			function decimalAdjust()				 		////
			//// 															////
			////	Used for adjusting decimal places/rounding. See 		////
			////	comments below for details. 							////
			////////////////////////////////////////////////////////////////////
			(function() {
				/**
				* Decimal adjustment of a number.
				*
				* @param {String}  type  The type of adjustment.
				* @param {Number}  value The number.
				* @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
				* @returns {Number} The adjusted value.
				*/
				function decimalAdjust(type, value, exp) {
					// If the exp is undefined or zero...
					if (typeof exp === 'undefined' || +exp === 0) {
					return Math[type](value);
					}
					value = +value;
					exp = +exp;
					// If the value is not a number or the exp is not an integer...
					if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
					return NaN;
					}
					// Shift
					value = value.toString().split('e');
					value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
					// Shift back
					value = value.toString().split('e');
					return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
				}

				// Decimal round
				if (!Math.round10) {
					Math.round10 = function(value, exp) {
					return decimalAdjust('round', value, exp);
					};
				}
				// Decimal floor
				if (!Math.floor10) {
					Math.floor10 = function(value, exp) {
					return decimalAdjust('floor', value, exp);
					};
				}
				// Decimal ceil
				if (!Math.ceil10) {
					Math.ceil10 = function(value, exp) {
					return decimalAdjust('ceil', value, exp);
					};
				}
			})()
