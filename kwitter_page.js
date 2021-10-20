var firebaseConfig = {
    apiKey: "AIzaSyBbNazrzuhoF1p6aZytTfgsfR-Rja4Xn9I",
    authDomain: "kwitternew-5f5fc.firebaseapp.com",
    databaseURL: "https://kwitternew-5f5fc-default-rtdb.firebaseio.com",
    projectId: "kwitternew-5f5fc",
    storageBucket: "kwitternew-5f5fc.appspot.com",
    messagingSenderId: "707151259271",
    appId: "1:707151259271:web:825a71fa964b25b906ba22"
  };

  
  firebase.initializeApp(firebaseConfig);
    
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");

 function send(){
     msg=document.getElementById("msg").value ;
     firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
     });
     document.getElementById("msg").value="";
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

