// Create a reference for the canvas
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var img_width = 300;
var img_height = 100;

var img_image;

var img_x = 100;
 var img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
			aplhabetkey();
			document.getElementById("d1").innerHTML="You Pressed an Alphabet Key";
			console.log("alphabet key");
		}
		else {
			otherkey();
			document.getElementById("d1").innerHTML="You Pressed an UNKNOWN Key";

		}
		//write a code to check the type of key pressed
		
	

	if (keyPressed >=48 && keyPressed <=57) {
		numberkey();
		document.getElementById("d1").innerHTML="You Pressed a Number Key";
		console.log("Number key pressed");
	} 

}

function aplhabetkey()
{
	//upload respective image with the message. 

	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
