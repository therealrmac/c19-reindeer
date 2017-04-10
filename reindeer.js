var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", 
"Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", 
"Comet", "Cupid", "Donner", "Blitzen"];
var hohohoElement = document.getElementById("reindeer").innerHTML;

var newText=" ";
for(i=0; i <reindeer.length; i++){
	newText= colors[i]+ " " + reindeer[i] +", ";
	document.getElementById('text').append(newText);
	
}


