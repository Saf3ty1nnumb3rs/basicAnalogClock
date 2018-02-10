 var clocks = [
{
	city:"Local Time",
	cityId:"local",
	country:"Here",
	flag: "",
	clockIndex: "clock0"
	
}, 
{
	city: "New York",
	cityId:"new-york",
 	country:"USA",
 	flag: "Images/usFlag.png",
	clockIndex: "clock1"
 },
 {
	city: "London",
	cityId:"london",
 	country:"England",
 	flag: "Images/unionJack.jpg",
	clockIndex: "clock2"
 },
 {
	city: "Paris",
	cityId:"paris",
 	country:"France",
	flag: "Images/franceFlag.png",
	clockIndex: "clock3"
 },
 {
	city: "Tokyo",
	cityId:"tokyo",
 	country: "Japan",
	flag: "Images/japanFlag.jpg",
	clockIndex: "clock4"
 }
];


var date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	let hrPosition = (hr * 360/12) + ((min*360/60)/12);
	let hrPosition1 = 150 + hrPosition;
	let hrPosition2 = 180 + hrPosition;
	let hrPosition3 = 270 + hrPosition;
	let minPosition = (min*360/60) + ((sec*360/60)/60);
	let secPosition = (sec*360/60);


function runTheClock(){

	hrPosition = hrPosition + (3/360);
	hrPosition1 = hrPosition1 + (3/360);
	hrPosition2 = hrPosition2 + (3/360);
	hrPosition3 = hrPosition3 + (3/360);
	minPosition = minPosition + (6/60);
	secPosition = secPosition + 6;


	let HOURHAND0 = $(".hour0");
	let MINUTEHAND = $(".minute");
	var SECONDHAND = $(".second");

	let HOURHAND1 = $(".hour1");
	
	let HOURHAND2 = $(".hour2");
	
	let HOURHAND3 = $(".hour3");
	
	let HOURHAND4 = $(".hour4");
	
	HOURHAND0.css('transform', "rotate(" + hrPosition + "deg)");
	MINUTEHAND.css('transform', "rotate(" + minPosition + "deg)");
	SECONDHAND.css('transform', "rotate(" + secPosition + "deg)");;

	HOURHAND1.css('transform', "rotate(" + hrPosition + "deg)");
	HOURHAND2.css('transform', "rotate(" + hrPosition1 + "deg)");
	HOURHAND3.css('transform', "rotate(" + hrPosition2 + "deg)");
	HOURHAND4.css('transform', "rotate(" + hrPosition3 + "deg)");
}


clocks.forEach((clock, i)=>{
	let face = 'face' + [i]
	let hour = 'hour' + [i]
	let box = 'box' + [i]
	let nest = 'nest' + [i]
	let cityId = clocks[i].cityId
	let city = clocks[i].city
	let clockIndex = clocks[i].clockIndex
	
	let clockTemplate =
	
	`<div id="${cityId}" class="clockbox ${box}">
	
		<svg id="${clockIndex}" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 600 600">
	
			<g class="${face}">
				<circle class="circle" cx="302" cy="302" r="253.9" />
				<path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"
				/>
				<circle class="mid-circle" cx="300" cy="300" r="16.2" />
			</g>
	
			<g class="${hour}">
				<path class="hour-arm" d="M300.5 298V142" />
				<circle class="sizing-box" cx="300" cy="300" r="253.9" />
			</g>
	
			<g class="minute">
				<path class="minute-arm" d="M300.5 298V67" />
				<circle class="sizing-box" cx="300" cy="300" r="253.9" />
			</g>
	
			<g class="second">
				<path class="second-arm" d="M300.5 350V55" />
				<circle class="sizing-box" cx="300" cy="300" r="253.9" />
			</g>
	
		</svg>
	 </div>
	 <div class="${nest}">
	
		<h2 class="location">${city}</h2>
			
	 </div>
	
	`


	$('#clockWall').append(clockTemplate);
	});
	
	





	var interval = setInterval(runTheClock, 1000);


















/*var classChange = function(){
	for(i = 0; i < clocks.length; i ++) {
	let clockId = '#' + clocks[i].city;
		
	console.log(clockId)
	
	$(clockId).children('g.face').addClass('face' + i).removeClass('face');
	$(clockId).children('g.hour').addClass('hour' + i).removeClass('hour');
    // let clockId = getElementById(clocks[i].city);  <------vanilla JS of above
	//clockId.getElementsByClassName('face')[0].classList.add('face' + i); <------vanilla JS of above	
	}
}*/

/*const clockWall = $('#clockWall')
const cloneClocks = function(){
	for(i = 0; i < clocks.length; i ++){
		let clockOriginal = $("#local");
		let clockClone = clockOriginal.clone(true);
		clockClone.attr('data-id' , i).attr('id','clock' + [i]).addClass('box' + i).removeClass('one');
		clockClone.children('svg').attr('id' , clocks[i].city);
		clockWall.append(clockClone);
	}
classChange();
}

cloneClocks();*/

/*const assignLocale = function(){
	document.querySelectorAll("#location")[1].innerHTML=  "New York";
	for(i = 2; i < 5; i++){
	document.querySelectorAll("#location")[i].innerHTML=  clocks[i - 1].city;
	// ("#location")[i].text(clocks[i - 1].city); <--------explore this later - create variable for location and index and change to class in clone
	}
}
assignLocale();*/
/*change all class names for h.m.s. back to Id. alter those Ids through the DOM. Create references for each new clock - possibly in a loop*/
//assigns image from array to specific clockface
/*var popClockFace = function(){
	for (i = 0 ; i < clocks.length ; i++){
		//create cardElement as DOM element
		var clockElement = document.createElement('img');
		//assign attributes
		clockElement.setAttribute('src' , clocks[i].flag);
		clockElement.setAttribute('class' , 'box' + i);
		clockElement.setAttribute('id' , 'clock-face' + i);
		clockElement.setAttribute('data-id' , i);
		clockWall.appendChild(clockElement);
	}
}
popClockFace();*/




