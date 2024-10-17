let url = 'https://jsonplaceholder.typicode.com/users'  //esta url hace referencia al origen de los datos

//al aplicar el siguiente código se mostrará en consola el arreglo de objetos que está en la url
//las .then y .catch, lo que está dentro de ellas son funciones flecha
fetch(url) //aquí havemos una solicitud a la url
.then(response => response.json()) // se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato utilizando la función correspondiente, en este caso estamos utilizando .Json
.then(data => mostrarData(data))//Aqui se lee el objeto data y lo mostraremos por consola, data es el arreglo que contiene los objetos
.catch(error => console.log(error))//Si hay un error será atrapado con la palabra reservada catch

const mostrarData =(data) => {//esta funcion mostraData tiene conexión con la de arriba, deben escribirse iguales

console.log(data);
let body = ""
for (var i = 0; i < data.length; i++) {      
   body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
}
document.getElementById('data').innerHTML = body
}

//El método .then() en JavaScript se utiliza para manejar promesas. Una promesa (Promise) es un objeto que representa la eventual resolución (éxito) o el rechazo (error) de una operación asincrónica.


//Cuando utilizas fetch(), se hace una solicitud HTTP (por ejemplo, para obtener datos de un servidor). fetch() devuelve una promesa que se resuelve cuando la solicitud ha completado (con éxito o no). El método .then() se puede usar para especificar qué hacer cuando la promesa se resuelve exitosamente, y si quieres manejar un error, puedes usar .catch().