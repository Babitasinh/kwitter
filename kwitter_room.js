// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function addroom()
{
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Ranu"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.HTML";
}

function redirectroom(name)
{
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.HTML";
}
function redirectToRoomName(name)
{
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}