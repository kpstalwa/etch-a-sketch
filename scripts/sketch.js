var numRow=16;
var numCol=16;
var grdiv=$('div#grid');
var curColor="red";
//can add as many colours as desired
var rainbow=['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];
$(document).ready(function(){
	makeTable();
});
function makeTable(){ //will make default 16x16 table on first run
	if (numRow === 0 && numCol===0){
		alert("Please enter values greater than 0");
	}
	else {
		curColor="red"; //set default upon grid change
		ntable=document.createElement('table');
		for (var i = 0; i < numRow; i++) {	
			nrow=document.createElement('tr');
			for (var j = 0; j < numCol; j++) {
				ncol=document.createElement('td');
				nrow.appendChild(ncol);
			}
			ntable.appendChild(nrow);
		}
		grdiv.html(ntable);
	}
	applyHover(); 
}
function getDimension(){ //gets the square dimension
	var dims=prompt("Enter desired sidelength:","16");
	numRow=dims;
	numCol=dims;
	makeTable();
}
//selects and makes sure a valid colour is entered
function changeColor(){
	var check=false;
	var selectc=prompt("Colors (type white to erase): " + rainbow, "red");
	for (var i=0; i<rainbow.length; i++){
		if (rainbow[i] === selectc){
			curColor=selectc;
			check=true;
			applyHover();
		}
	} //check against valid color
	if(!check && selectc!="red"){
		alert("Please enter a valid rainbow color. Reverting to last used color");
	}
}
//applyHover() applies a class to the element
//that has a mouse pointer on it.
function applyHover(){
	var element = document.createElement('style'),
	sheet;
// Append style element to head
document.head.appendChild(element);
// Reference to the stylesheet
sheet = element.sheet;
$("head").append('<style id="new-animations" type="text/css"></style>');
var sheet = $("#new-animations").get(0).sheet;
var styles = '.hover' + curColor + '{';
styles += 'background-color:' + curColor + ';';
styles += '}';
// Add the first CSS rule to the stylesheet
sheet.insertRule(styles, 0);
//add a dynamic class with a .hoverred etc, for rule
$("div#grid td").on('mouseover', function () {
	if (!(this.classList.contains('hover' + curColor))){
		//remove all classes associated with this if it already has a class
		$(this).removeClass();
	}
	//emsures this has no class, so allows overlapping of colours
	$(this).addClass("hover" + curColor);

});
}