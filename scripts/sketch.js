var numRow=16;
var numCol=16;
var grdiv=$('div#grid');
var curColor="red";
var rainbow=['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
$(document).ready(function(){
	makeTable();
	//applyHover();
});
function makeTable(){ //will make default 16x16 table
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
function getDimension(){
	var dims=prompt("Enter desired sidelength","16");
	numRow=dims;
	numCol=dims;
	makeTable();
}
function changeColor(){
	var check=false;
	var selectc=prompt("Colors: " + rainbow, "red");
	for (var i=0; i<rainbow.length; i++){
		if (rainbow[i] === selectc){
			curColor=selectc;
			check=true;
			applyHover();
		}
	}
	if(!check && selectc!=red){
		alert("Please enter a valid rainbow color");
	}
}
//var cnt=0;
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
//cnt+=1;
$("div#grid td").on('mouseover', function () {
	$(this).addClass("hover" + curColor);
//cnt+=1;
});
}





















