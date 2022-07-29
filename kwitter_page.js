const firebaseConfig = {
    apiKey: "AIzaSyCnpJTEk0eW6wT9Mrs7EfQzKUYl3-vrD3Y",
    authDomain: "prueba-de-tditter.firebaseapp.com",
    databaseURL: "https://prueba-de-tditter-default-rtdb.firebaseio.com",
    projectId: "prueba-de-tditter",
    storageBucket: "prueba-de-tditter.appspot.com",
    messagingSenderId: "255250060734",
    appId: "1:255250060734:web:a7902a694107b081c2d5ef"
  };
  
  firebase.initializeApp(firebaseConfig);

//usa la variable user_name para guardar el nombre de usuario, usa el comando localStorage.getItem para obtenerlo
var user_name = localStorage.getItem("user_name");
//usa la variable room_name para guardar el nombre de la sala, usa el comando localStorage.getItem para obtenerlo
var room_name = localStorage.getItem("room_name");
//crea una función que se llame send 
function send(){
//almacena en la variable msg el mensaje que escribio el usuario, usa el comando document.getElementById("msg").value;
 msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); 

    //usa el comando document.getElementById("msg").value = ""; para dejar vacio el text input 
 document.getElementById("msg").value = "" ;
}


function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     childData = childSnapshot.val();
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inicia código clase 97
console.log(firebase_message_id);      
console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data ['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML += row ;
//Termina código
      } });  }); }


getData();

function logout()
{
    //usa el comando localStorage.removeItem() para borrar el nombre del usuario que teniamos almacenado
localStorage.removeItem("user_name");
    //usa el comando localStorage.removeItem() para borrar el nombre de la sala que teniamos almacenado
    localStorage.removeItem("room_name");
    // usa window.location para abrir la pagina de inicio index.html
window.location = "index.html" ;
// otra forma de poner este codigo es : window.location.replace("index.html")
}
