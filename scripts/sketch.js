var numRow=16;
var numCol=16;
var grdiv=$('div#grid');
$(document).ready(function(){
	makeTable();
	console.log(grdiv);
});
function makeTable(){ //will make default 16x16 table
	if (numRow === 0 || numCol===0){
		alert("Please enter values greater than 0");
	}
	else {
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
}
function getDimension(){
var dims=prompt("Please enter square sidelength","16");
numRow=dims;
numCol=dims;
makeTable();
}
function changeColor(){

}