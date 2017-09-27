/*1. Create the necessary variables to hold: number of wins, number of losses,
randomized number, player's score, each crystal's number, 
and the sum of all the 

2. Create a function that is run everytime any of the crystals are clicked.
     - Within the function let the crystals each pick a random number and maintain
      that number within a variable. Each time the crystals are picked, the number
      gets added to the player's score variable.

     - Write an if-then statement comparing the player's score and randomized number
     whereby it calls the win or loss variable and adds 1 to it. if numbers are ===,
     then win++, else if player score is > random number, loss++, else keep adding
     into the player score variable.

     -At the end of the function, let the function call another 
     random number into the random number variable and replace the html with it,
     and then repeat the function itself. */



$(document).ready(function(){
 
	//holds random number
	var randomNumber = 0;
	//holds number of wins
	var winCount = 0;
	//holds losses
	var lossCount = 0;
	//hold the sum of each crystal that is clicked
	var scoreCount = 0;
	var crystal1 = 0;
	var cyrstal2 = 0;
	var crystal3 = 0;
	var crystal4 = 0;


	

	function resetGame () {
		randomNumber = math.floor(math.random( * 120) + 19);
		$("random").innerhtml("<div> + randomNumber + </div>")
    crystal1 = math.floor(math.random( * 12 ) + 1);
    crystal2 = math.floor(math.random( * 12 ) + 1);
    crystal3 = math.floor(math.random( * 12 ) + 1);
    crystal4 = math.floor(math.random( * 12 ) + 1);
    }
    
    function clickCrystal () {
      scoreCount = 
    }


    function

	$("first").on("click", function(){
		scoreCount = scoreCount + 
        
    });

    $("second").on("click", function(){
		scoreCount = scoreCount + 
        
    });
    $("third").on("click", function(){
		scoreCount = scoreCount + 
        
    });
    $("fourth").on("click", function(){
		scoreCount = scoreCount + 
        
    });


}