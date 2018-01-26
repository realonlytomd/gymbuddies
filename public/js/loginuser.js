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
  var email = $("#email");
  var password = $("#password");
  var logout = $("#logout");

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

      //grab user email
      getUsers(emailval);

    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('sign-in error', error.code);
    })
  });


  //logout user
  logout.on('click', function(){
    firebase.auth().signOut();
    window.location.href = "index.html";
  });

  //verify if user is a user
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


//get user information
function getUsers(email) {
  $.get("/api/users/" + email, useremail
  )};

//function to call cookie function
function useremail(data){
  setCookie("gymbuddyid", data.id, 100);
  //redirect user to log.html page
  window.location.href = 'log.html';

}

//set cookie function to save information
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}




});
