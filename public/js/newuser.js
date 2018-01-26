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
  var login = $("#login");
  var signup = $("#signup");
  var email = $("#email");
  var password = $("#password");
  // var logout = $("#logout");

//user login
  login.on('click', function(event){
    console.log('login ran');
    //store user email and password
    event.preventDefault();
    var emailval = email.val();
    var pass = password.val();
    var auth = firebase.auth();
    console.log(emailval);
    console.log(pass);
    auth.signInWithEmailAndPassword(emailval, pass).then(function() {

      window.location.href = 'log.html';
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('sign-in error', error.code);
    })
  });

  //create new userData
  signup.on('click', function(event){
    console.log('signup ran');
    //get email and password
    event.preventDefault();
    var emailval = email.val().trim();
    var pass = password.val().trim();
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
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('sign-in error', error);


    })
  });

  //logout user
  // logout.on('click', function(){
  //   firebase.auth().signOut();
  //   window.location.href = "index.html";
  // });

  verify user
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      console.log("They're a user");
      var email = user.email;
      var uid = user.uid;
      console.log(email);
      console.log(uid);
    }else{
      console.log("Not a user");
    };
  });

  //create new user


  function userData(userData){
    $.post("/api/users", userData)
      .then(getUsers);
  }

//get user information
  function getUsers(user){
    $.get("/api/users", user);
  }



});
