$(document).ready(function () {
    $.get("/api/exercises/" + getCookie("gymbuddyid"), renderTable);

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function renderTable (exercises) {
        
            for (var i = 0; i < exercises.length; i++) {
                createNewRow(exercises[i]);
            }
    }

    function createNewRow (exercise) {
        
        var title = exercise.title;
        var weight = exercise.weight;
        var reps= exercise.reps;
        var sets = exercise.sets;

        var newRow = $("<tr>");

        var firstTd = $("<td>").text(exercise.title);
        var secondTd = $("<td>").text(exercise.weight);
        var thirdTd = $("<td>").text(exercise.reps);
        var fourthTd = $("<td>").text(exercise.sets);

        newRow.append(firstTd);
        newRow.append(secondTd);
        newRow.append(thirdTd);
        newRow.append(fourthTd);

        $("#summary2").append(newRow);
    }

});