var $ = jQuery;

$(document).ready(function() {

	var exerciseSelect = $("#exercise");

	$(document).on("change", "#category", getExerciseList);

	function getExerciseList() {
		var bodyPart = $("#category").val();
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
  	};

});