// Initialize Firebase

var config = {
    apiKey: "AIzaSyAK4bIuK-XZfMjlk7p-F6tI97ts8Y4J9XM",
    authDomain: "urban-tadka.firebaseapp.com",
    databaseURL: "https://urban-tadka.firebaseio.com",
    projectId: "urban-tadka",
    storageBucket: "urban-tadka.appspot.com",
    messagingSenderId: "222821319835",
    appId: "1:222821319835:web:b3233f6c940949badb723e",
    measurementId: "G-V6L7P4NH2T"
  };
  firebase.initializeApp(config);
  
  // Reference feedback collection
  var messagesRef = firebase.database().ref('feedback');
  
  // Listen for form submit
  document.getElementById('feedbackForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('sub');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, subject, message);
    // show modal
  $(document).ready(function(){
    $("#thanks").modal('show');
});

    // Clear form
    document.getElementById('feedbackForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, sub, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      subject: sub,
      message: message
    });
  }