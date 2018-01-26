$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCvOdlR0PHGHaPadekVBNv14HlkSSNqKQE",
    authDomain: "gymbudy-78ae6.firebaseapp.com",
    databaseURL: "https://gymbudy-78ae6.firebaseio.com",
    projectId: "gymbudy-78ae6",
    storageBucket: "gymbudy-78ae6.appspot.com",
    messagingSenderId: "943371493046"
  };
  firebase.initializeApp(config);

  //Variables
    var database = firebase.database();
    var auth = firebase.auth();
    var user = firebase.auth().currentUser;
    var signup = $("#signup");
    var email = $("#email");
    var password = $("#password");
    var password2 = $("#password2");
    var fullname = $("#fullname");
    var username = $("#username");

    //create new userData
    signup.on('click', function(event){
      console.log('signup ran');

      //get email and password
      event.preventDefault();
      var emailval = email.val().trim();
      var pass = password.val().trim();
      var user = username.val().trim();
      var pass2 = password2.val().trim();
      var name = fullname.val().trim();
      var auth = firebase.auth();
      console.log(emailval);
      console.log(pass);
      auth.createUserWithEmailAndPassword(emailval, pass).then(function(){
        userData({
          email: email
          .val()
          .trim()
        });
        window.location.href='login.html';
        window.signup.hide();
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('sign-in error', error);


      })
    });

      function userData(userData){
        $.post("/api/users", userData)
          .then(getUsers);
      }
      function getUsers() {
        $.get("/api/users", function();
        };

  });
