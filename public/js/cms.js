$(document).ready(function () {
  // Getting jQuery references to the post body, title, form, and author select
  var bodypartSelect = $("#body-part");
  var exerciseSelect = $("#exercise");
  var weightInput = $("#weight");
  var repsInput = $("#reps");
  var setsInput = $("#sets");
  var workoutForm = $("#workoutLog");

  // Adding an event listener for when the form is submitted
  $("#enterWorkout").on("click", handleFormSubmit);  

  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var exerciseId;
  var usersId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

 // Otherwise if we have an author_id in our url, preset the author select box to be our Author
  if (url.indexOf("?user_id=") !== -1) {
    usersId = url.split("=")[1];
  }

  // Getting the authors, and their posts
  // getUsers();
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
  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    var id= getCookie("gymbuddyid");
    console.log(id);
    //Wont submit tp the workout if we are missing a body-part and exercise
    if (!bodypartSelect.val() === undefined && !exerciseSelect.val() === undefined) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newWorkout= {
      title: exerciseSelect.val(),
      body_part: bodypartSelect.val(),
      sets: setsInput
        .val()
        .trim(),
      reps: repsInput
        .val()
        .trim(),
      weight: weightInput
        .val()
        .trim(),
      UserId: id
    };


    submitExercise(newWorkout);


    //     // clear the fields
    // $("#body-part").val("");
    // $("#exercise").val("");
    // $("#weight").val("");
    // $("#reps").val("");
    // $("#sets").val("");


    var newRow = $("<tr>");

    var firstTd = $("<td>").text(exerciseSelect.val());
    var secondTd = $("<td>").text(weightInput.val());
    var thirdTd = $("<td>").text(repsInput.val());
    var fourthTd = $("<td>").text(setsInput.val());

    newRow.append(firstTd);
    newRow.append(secondTd);
    newRow.append(thirdTd);
    newRow.append(fourthTd);

    $("#tbody-new-row").append(newRow);

          // clear the fields
    $("#body-part").val("");
    $("#exercise").val("");
    $("#weight").val("");
    $("#reps").val("");
    $("#sets").val("");

  //   // If we're updating a post run updatePost to update a post
  //   // Otherwise run submitPost to create a whole new post
  //   if (updating) {
  //     newPost.id = postId;
  //     updatePost(newPost);
  //   }
  //   else {
  //     submitPost(newPost);
  //   }
  // }
  // submitExercise(newWorkout);
  }
  $("#viewWorkout").on("click", viewSummary);
  function viewSummary(event) {
    event.preventDefault();
    window.location.href = "/summary";
  }
  //   Submits a new exercise and brings user to log page upon completion
  function submitExercise(post) {
    $.post("/api/exercises", post, function () {
    });
  }
});







  // Submits a new exercise and brings user to log page upon completion
//   function submitExerciseLog(post) {
//     $.post("/api/exercises", post, function() {
//       window.location.href = "/log";
//     });
//   }

//  }


  // // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
  // function getPostData(id, type) {
  //   var queryUrl;
  //   switch (type) {
  //     case "post":
  //       queryUrl = "/api/posts/" + id;
  //       break;
  //     case "author":
  //       queryUrl = "/api/authors/" + id;
  //       break;
  //     default:
  //       return;
  //   }
  //   $.get(queryUrl, function(data) {
  //     if (data) {
  //       console.log(data.AuthorId || data.id)
  //       // If this post exists, prefill our cms forms with its data
  //       titleInput.val(data.title);
  //       bodyInput.val(data.body);
  //       authorId = data.AuthorId || data.id;
  //       // If we have a post with this id, set a flag for us to know to update the post
  //       // when we hit submit
  //       updating = true;
  //     }
  //   });
  // }

  // // A function to get Authors and then render our list of Authors
  // function getAuthors() {
  //   $.get("/api/authors", renderAuthorList);
  // }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  // function renderAuthorList(data) {
  //   if (!data.length) {
  //     window.location.href = "/authors";
  //   }
  //   var rowsToAdd = [];
  //   for (var i = 0; i < data.length; i++) {
  //     rowsToAdd.push(createAuthorRow(data[i]));
  //   }
  //   authorSelect.empty();
  //   console.log(rowsToAdd);
  //   console.log(authorSelect);
  //   authorSelect.append(rowsToAdd);
  //   authorSelect.val(authorId);
  // }

  // // Creates the author options in the dropdown
  // function createAuthorRow(author) {
  //   var listOption = $("<option>");
  //   listOption.attr("value", author.id);
  //   listOption.text(author.name);
  //   return listOption;
  // }

  // // Update a given post, bring user to the blog page when done
  // function updatePost(post) {
  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/posts",
  //     data: post
  //   })
  //   .then(function() {
  //     window.location.href = "/blog";
  //   });
  // }

