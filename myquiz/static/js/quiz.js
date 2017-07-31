
function getName(){
	login = document.getElementById("login").value;
	alert("Hi, " + login);
	return login;
}
function submitAnswers(answers){

	var total = answers.length;
	var score = 0;
	var choice = []


	//getting choices 
	/*
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
*/
//new dynamic method 1
	for(var i = 1; i <= total; i++){
		
		choice[i] = document.forms["quizForm"]["q"+i].value;
	}
 

	//validation
	/*
	for(i = 1; i <= total; i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('you missed question ' + i);
			return false;
		}
	}
	*/
	for(i = 1; i <= total; i++){
		if(choice[i] == null || choice[i] == ''){
			alert('you missed question ' + i);
			return false;
		}
	}


	//set correct answer
	//var answers = ["b", "d", "a", "c", "c"];
	//this variable  is replaced by database answer

	//check answer
	/*
	for(i = 1; i <= total; i++){
		if(eval('q' + i) == answers[i - 1]){
			score++;
		}
	}
	*/
	// new dynamic method 1 for checking answer
	for(i = 1; i <= total; i++){
		if(choice[i] == answers[i - 1]){
			score++;
		}
	}

	//Display Result
	var results = document.getElementById('results');
	results.innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span></h3>"
	alert("You scored " + score + " out of " + total);

	return false;
}

