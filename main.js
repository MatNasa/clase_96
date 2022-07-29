function addUser()
{
  //crea una variable que se llame user_name y usa el comando document.getElementById( ).value; para obtener el nombre del usuario de la etiqueta input, agrega el id de la etiqueta adentro de los parentesis  -->
 var user_name = document.getElementById("user_name").value; 
//usa el comando localStorage.setItem() para guardar de forma local la variable user_name , agrega entre los parentesis el nombre de la variable y su identificador
  localStorage.setItem("user_name", user_name);
  //usa el comando  window.location para abrir la siguiente página kwitter_room.html
window.location = "kwitter_room.html";
}    
