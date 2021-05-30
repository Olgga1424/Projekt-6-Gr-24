
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
},5000);








//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// η εικονα που μεγαλωνει
var elem;
function fullScreen(elem){
   if( elem.requestFullScreen ){
       elem.requestFullScreen();
   } else if( elem.webkitRequestFullscreen ){
       elem.webkitRequestFullscreen();
   } else if( elem.mozRequestFullScreen ){
       elem.mozRequestFullScreen();
   } else if( elem.msRequestFullscreen ){
       elem.msRequestFullscreen();
   }
}

/* to κειμενο που γραφεται μονο του ΑΡΧΗ  */

var myString = 'QuadSAT is a Danish company founded in 2017 that supplies drone-based antenna testing and tracking solutions to the satellite.' ;
var myArray = myString.toString().split(' ');
var loopTimer;
function frameLooper() {
	if(myArray.length > 0) {
		document.getElementById("myTypingText").innerHTML += myArray.shift();
	} else {
		clearTimeout(loopTimer);
                return false;
	}
	loopTimer = setTimeout('frameLooper()',70);
}
frameLooper();

/* to κειμενο που γραφεται μονο του ΤΕΛΟΣ */





var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



/*η ΓΗ που γυριζει ΑΡΧΗ */

var looper;
var degrees = 0;
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
	document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}

rotateAnimation("img1",30);


/*η ΓΗ που γυριζει ΤΕΛΟΣ*/
