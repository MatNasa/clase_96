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

  var room_name = "" ;
var user_name = localStorage.getItem ("user_name");

document.getElementById("user_name").innerHTML = "Hola " + user_name ;

function addRoom()
{
room_name = document.getElementById("room_name").value;
//copia el siguiente comando para conectarnos a firebase:  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"  });
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"  });
//usa el comando localStorage.setItem("room_name", room_name); para gaurdar el nombre de la sala 
localStorage.setItem("room_name", room_name);
//usa el comando window.location para abrir la pagina web kwitter_page.html
window.location = "kwitter_page.html";
}

function getData()
{
firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;

console.log("Room name", Room_names);

 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 

document.getElementById("output").innerHTML += row ;

});

});
}

getData();

function redirectToRoomName(name)
{
//imprime en la consola el nombre de la sala guardado en la variable name
console.log(name);
//usa el comando localStorage.setItem para guardar el nombre de la sala almacenado en la variable name usa el id "room_name"
localStorage.setItem(name);
// usa el comando window.location para abrir la página kwitter_page.html
window.location = "kwitter_page.html" ;
}

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