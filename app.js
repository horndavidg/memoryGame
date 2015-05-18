var div = document.querySelectorAll('div');

var colors = {
dog: "yellow",
cat: "pink",
pig: "green",
rat: "red",
bird: "purple",
horse: "blue",
rock: "grey",
tree: "orange"

}

var answers = [];
var compare = [];
var score = 0;
var indicator = document.querySelectorAll("h2");


for (var i = 0; i < div.length; i++) {

	var click;
	// var answers = [];
	// var compare = [];
	// var score = 0;
	var class1;
	var class2;

	div[i].addEventListener("click", function(){
     
// finds the first box clicked, sets the class to a var, and 
// sets the background color. Repeat for click2.

	var click = this.getAttribute('class');
	this.style.background = colors[click];
	compare.push(click);

// try doing the answers into and array?

		console.log(compare);

// if statement? do I need to loop through the answers
// that are pushed into the array?

if (compare[1] === undefined) {

	console.log("first guess");
}

else if (compare[0] === compare[1]) {

	answers.push(compare[0], compare[1])

	score += 1; 

	console.log(score);
	console.log(answers);
	compare = [];

	}

	// There are 2 values in the compare[] array and they match.
	// Reset compare[].


// else if (compare[0] !== compare[1]) {

else {
	
	console.log("no match!");
	
	class1 = "." + compare[1];
	// console.log(class1);
	var change1 = document.querySelectorAll(class1);
	// console.log(change1);
	
	
	setTimeout(function(){change1[0].style.background = "white"}, 600);
	setTimeout(function(){change1[1].style.background = "white"}, 600);

	//change1[0].style.background = "white";
	//change1[1].style.background = "white"

	//setInterval(function(){change1[0].style.background = "white"}, 500);
	//setInterval(function(){change1[1].style.background = "white"}, 500);
	
	class2 = "." + compare[0];
	//console.log(class2);
	
	var change2 = document.querySelectorAll(class2);
	
	setTimeout(function(){change2[0].style.background = "white"}, 600);
	setTimeout(function(){change2[1].style.background = "white"}, 600);

	//change2[0].style.background = "white";
	//change2[1].style.background = "white";

	//setInterval(function(){change2[0].style.background = "white"}, 500);
	//setInterval(function(){change2[1].style.background = "white"}, 500);
	
	compare = [];
	console.log(compare);
		
//this.style.background = "white"; 

// There are 2 values in the compare[] array and they do NOT match.
// Reset compare[].


		}



indicator[0].innerHTML = "Matches Made: " + score;

if (score === 8) {

	alert("You are a Champion!");

	for (var j = 0; j < answers.length; j++) {

		var end = "." + answers[j];		 
        var endchange = document.querySelectorAll(end);
		endchange[0].style.background = "white"; 
		endchange[1].style.background = "white";  

		// answers[j].style.background = "white";

	}

	answers = [];
	score = 0;
	compare = [];

console.log(answers);
console.log(compare);
console.log(score);

}

	})

};

var button = document.querySelectorAll('button');

//console.log(button);

	button[0].addEventListener("click", function(){
	
	answers = [];
	score = 0;
	compare = [];

	var reset = document.querySelectorAll('div');

	for (var k = 0; k < reset.length; k++) {

		reset[k].style.background = "white"; 
		
}

console.log(answers);
console.log(compare);
console.log(score);

});


// Need to figure out a way to access the two divs with given class(es) so
// that their backgrounds are set to white before clearing the compare array
// values. Maybe use "this" on the entire array.....


/////////////////////////////////////////////////////////

// First try, works but does not reset, simply pushes all inputs into the 
// solution array. It also is very verbos which is not a good thing.

// var square = document.querySelectorAll('div');

// // // console.log(square);
// // // Selects all of the div elements

// // for (var i = 0; i < square.length; i++) {

// // square[i].addEventListener("click", function() {
// // 	this.style.background = "black";
// // })
// // };

// var click1;
// var click2;
// var solution = [];
// var score;



// // click1 = function() { 

// // 	for (j = 0; j < square.length; j++) {

// // square[j].addEventListener("click", function() {	

// var pair1 = document.querySelectorAll('.cat');

// for (var i = 0; i < pair1.length; i++) {

// pair1[i].addEventListener("click", function() {
// 	this.style.background = "pink";
// 	solution.push("1");
// 	console.log(solution);

// // pair1[i].addEventListener("click", function() {
// // 	this.style.background = "white";

// // })


// })


// // pair1[i].addEventListener("click", function() {
// // 	this.style.background = "white";

// // })
// };

// var pair2 = document.querySelectorAll('.rat');

// for (var i = 0; i < pair2.length; i++) {

// pair2[i].addEventListener("click", function() {
// 	this.style.background = "red";
// 	solution.push("2");
// 	console.log(solution);
// })
// };

// var pair3 = document.querySelectorAll('.pig');

// for (var i = 0; i < pair3.length; i++) {

// pair3[i].addEventListener("click", function() {
// 	this.style.background = "green";
// 	solution.push("3");
// 	console.log(solution);
// })
// };

// var pair4 = document.querySelectorAll('.dog');

// for (var i = 0; i < pair4.length; i++) {

// pair4[i].addEventListener("click", function() {
// 	this.style.background = "yellow";
// 	solution.push("4");
// 	console.log(solution);
// })
// };

// var pair5 = document.querySelectorAll('.bird');

// for (var i = 0; i < pair5.length; i++) {

// pair5[i].addEventListener("click", function() {
// 	this.style.background = "purple";
// 	solution.push("5");
// 	console.log(solution);
// })
// };

// var pair6 = document.querySelectorAll('.tree');

// for (var i = 0; i < pair6.length; i++) {

// pair6[i].addEventListener("click", function() {
// 	this.style.background = "orange";
// 	solution.push("6");
// 	console.log(solution);
// })
// };

// var pair7 = document.querySelectorAll('.horse');

// for (var i = 0; i < pair7.length; i++) {

// pair7[i].addEventListener("click", function() {
// 	this.style.background = "blue";
// 	solution.push("7");
// 	console.log(solution);
// })
// };

// var pair8 = document.querySelectorAll('.rock');

// for (var i = 0; i < pair8.length; i++) {

// pair8[i].addEventListener("click", function() {
// 	this.style.background = "grey";
// 	solution.push("8");
// 	console.log(solution);
// })


// }

// })
// }
// }();

// }();



///////////////////////////////////////////////////////////


// (function() {

// 	document.querySelectorAll(cat).addEventListener("click", function() {
// 	this.style.background = "pink";
// })
// })();


// (function() {


// for (var i =0 ; i < 4; i++)
// {
// 	for (var j = 0; j < 4; j++)
// 	{
		
// 		var tile = document.createElement("div");
// 		tile.style.width = "4%";
// 		tile.style.height = "60px";
// 		tile.style.background = "white";
// 		tile.style.float = "left";
// 		tile.style.borderWidth= "1px";
// 		tile.style.borderColor= "black";
// 		tile.style.borderStyle= "solid";
// 		document.body.appendChild(tile);
// 	}
// }

// })();

// var tiles = document.querySelectorAll("div");
// var selected;

// 	tiles[0].style.background = "red";
// 	tiles[0].addEventListener("click", function(){

// 		selected = "red";
// 	})

// 	tiles[1].style.background = "orange";
// 	tiles[1].addEventListener("click", function(){

// 		selected = "orange";
// 	})
	
// 	tiles[2].style.background = "yellow";
// 	tiles[2].addEventListener("click", function(){

// 		selected = "yellow";
// 	})

// 	tiles[3].style.background = "green";
// 	tiles[3].addEventListener("click", function(){

// 		selected = "green";
// 	})

// 	tiles[4].style.background = "blue";
// 	tiles[4].addEventListener("click", function(){

// 		selected = "blue";
// 	})

// 	tiles[5].style.background = "indigo";
// 	tiles[5].addEventListener("click", function(){

// 		selected = "indigo";
// 	})

// 	tiles[6].style.background = "violet";
// 	tiles[6].addEventListener("click", function(){

// 		selected = "violet";
// 	})


// for (var i = 7; i < tiles.length; i++) {

// 	// tiles[0].style.background = "red";
// 	// tiles[1].style.background = "green";


// 	tiles[i].addEventListener("click", function(){

// 		this.style.background = selected;

// 	})
// }