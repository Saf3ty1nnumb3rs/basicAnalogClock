 var clocks = [
 {
 	city: "NewYork",
 	country:"USA",
 	flag: "Images/usFlag.png",

 },
 {
 	city: "London",
 	country:"England",
 	flag: "Images/unionJack.png",

 },
 {
 	city: "Paris",
 	country:"France",
 	flag: "Images/franceFlag.png",
 },
 {
 	city: "Tokyo",
 	country: "Japan",
 	flag: "Images/japanFlag.jpg",
 }
];


var date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	let hrPosition = (hr * 360/12) + ((min*360/60)/12);
	let hrPosition1 = 150 + (hr * 360/12) + ((min*360/60)/12);
	let hrPosition2 = 180 + (hr * 360/12) + ((min*360/60)/12);
	let hrPosition3 = 270 + (hr * 360/12) + ((min*360/60)/12);
	let minPosition = (min*360/60) + ((sec*360/60)/60);
	let secPosition = (sec*360/60);


function runTheClock(){

	hrPosition = hrPosition + (3/360);
	hrPosition1 = hrPosition1 + (3/360);
	hrPosition2 = hrPosition2 + (3/360);
	hrPosition3 = hrPosition3 + (3/360);
	minPosition = minPosition + (6/60);
	secPosition = secPosition + 6;


	let HOURHAND = document.querySelector(".hour");
	let MINUTEHAND = document.querySelector(".minute");
	var SECONDHAND = document.querySelector(".second");

	let HOURHAND0 = document.querySelector(".hour0");
	let MINUTEHAND0 = document.querySelector(".minute0");
	let SECONDHAND0 = document.querySelector(".second0");

	let HOURHAND1 = document.querySelector(".hour1");
	let MINUTEHAND1 = document.querySelector(".minute1");
	var SECONDHAND1 = document.querySelector(".second1");

	let HOURHAND2 = document.querySelector(".hour2");
	let MINUTEHAND2 = document.querySelector(".minute2");
	var SECONDHAND2 = document.querySelector(".second2");

	let HOURHAND3 = document.querySelector(".hour3");
	let MINUTEHAND3 = document.querySelector(".minute3");
	var SECONDHAND3 = document.querySelector(".second3");


	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

	HOURHAND0.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND0.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND0.style.transform = "rotate(" + secPosition + "deg)";

	HOURHAND1.style.transform = "rotate(" + hrPosition1 + "deg)";
	MINUTEHAND1.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND1.style.transform = "rotate(" + secPosition + "deg)";

	HOURHAND2.style.transform = "rotate(" + hrPosition2 + "deg)";
	MINUTEHAND2.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND2.style.transform = "rotate(" + secPosition + "deg)";

	HOURHAND3.style.transform = "rotate(" + hrPosition3 + "deg)";
	MINUTEHAND3.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND3.style.transform = "rotate(" + secPosition + "deg)";


}
var classChange = function(){
	for(i = 0; i < clocks.length; i ++) {
	var clockId = document.getElementById(clocks[i].city);
	clockId.getElementsByClassName('face')[0].classList.add('face' + i);
	clockId.getElementsByClassName('hour')[0].classList.add('hour' + i);
	clockId.getElementsByClassName('minute')[0].classList.add('minute' + i);
	clockId.getElementsByClassName('second')[0].classList.add('second' + i);
	}
}

var clockWall = document.getElementById("clockWall");
var cloneClocks = function(){
	for(i = 0; i < clocks.length; i ++){
		var clockOriginal = document.querySelector("#local");
		var clockClone = clockOriginal.cloneNode(true);
		clockClone.setAttribute('data-id' , i);
		var clockId = clockClone.getAttribute('data-id');
		console.log(clockId);
		clockClone.setAttribute('id', 'clock' + i);
		clockClone.classList.remove('one');
		clockClone.classList.add('box' + i);
		clockClone.querySelector('svg').setAttribute('id' , clocks[i].city);
		clockWall.appendChild(clockClone);
	}
classChange();
}

cloneClocks();

var assignLocale = function(){
	document.querySelectorAll("#location")[1].innerHTML=  "New York";
	for(i = 2; i < 5; i++){
	document.querySelectorAll("#location")[i].innerHTML=  clocks[i - 1].city;
	}
}
assignLocale();
/*change all class names for h.m.s. back to Id. alter those Ids through the DOM. Create references for each new clock - possibly in a loop*/
var popClockFace = function(){
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
popClockFace();

var interval = setInterval(runTheClock, 1000);

