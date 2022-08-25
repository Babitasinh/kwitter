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

  function addUser()
  {
    username=document.getElementById("username").value;
    firebase.database().ref("/").child(username).update( {
        purpose:"Unnati"
    });
  }