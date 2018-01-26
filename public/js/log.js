var $ = jQuery;

$(document).ready(function() {

// 	// Initialize Firebase
// 	var config = {
// 		apiKey: "AIzaSyCvOdlR0PHGHaPadekVBNv14HlkSSNqKQE",
// 		authDomain: "gymbudy-78ae6.firebaseapp.com",
// 		databaseURL: "https://gymbudy-78ae6.firebaseio.com",
// 		projectId: "gymbudy-78ae6",
// 		storageBucket: "gymbudy-78ae6.appspot.com",
// 		messagingSenderId: "943371493046"
// 	};
// 	firebase.initializeApp(config);
//
// //Variables
// 	var database = firebase.database();
// 	var auth = firebase.auth();
// 	var user = firebase.auth().currentUser;
// 	var logout = $("#logout");
//
// 	//logout user
// 	logout.on('click', function(){
// 		console.log('logout ran');
// 		firebase.auth().signOut();
// 			window.location.href = 'index.html';
// 		});
//


	var exerciseSelect = $("#exercise");

	$(document).on("change", "#body-part", getExerciseList);

	function getExerciseList() {
		var bodyPart = $("#body-part").val();
		if(bodyPart !== "") {
			getExercises(bodyPart);
		};
	};

	// A function to get exercises and then render our list of exercises
	function getExercises(bodyPart) {
		$.get("/api/exercise-list/" + bodyPart, renderExerciseList);
	};

	// Function to render a list of exercises
    function renderExerciseList(data) {
    	var rowsToAdd = [];
    	for (var i = 0; i < data.length; i++) {
     		rowsToAdd.push(createExerciseOption(data[i]));
    	};
    	exerciseSelect.empty();
    	exerciseSelect.append(rowsToAdd);

  	};

	// Creates the options in the dropdown
  	function createExerciseOption(exercise) {
    	var exerciseOption = $("<option>");
    	exerciseOption.attr("value", exercise.title);
    	exerciseOption.text(exercise.title);
    	return exerciseOption;
  	};

});
