const firebaseConfig = {
    apiKey: "AIzaSyBydEraUlvx1Ob3toHdU8jqtFeNXBl_BQo",
    authDomain: "kwitter-e0477.firebaseapp.com",
    databaseURL: "https://kwitter-e0477-default-rtdb.firebaseio.com",
    projectId: "kwitter-e0477",
    storageBucket: "kwitter-e0477.appspot.com",
    messagingSenderId: "189297064370",
    appId: "1:189297064370:web:59b9c485c55bbcdf91ccab"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


username=localStorage.getItem("user_name");
roomname=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref("roomname").push({
        name:username,
        message:msg,
        like:0
    });
}
getData();
function getData()
 {
     firebase.database().ref("/"+roomname). on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val();
         if(childKey != "purpose") 
     { firebase_message_id = childKey; message_data = childData;
        //Start code 
        console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name']; 
         message = message_data['message']; 
         like = message_data['like'];
          name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
          like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"
           row = name_with_tag + message_with_tag +like_button + span_with_tag;
            document.getElementById("output").innerHTML += row;
        } }); }); }


function updatelike(message_id)
{
     buttonid=message_id;
     likes=document.getElementById(buttonid).value;
     updatelikes=Number(likes)+1;
     firebase.database().ref(roomname).child(message_id).update({
        like:updatelikes
     })    
}