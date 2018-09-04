var provider = new firebase.auth.GoogleAuthProvider();
var guardar= document.getElementById('guardar');
var Aceptar = document.getElementById("botonaceptar");

Aceptar.addEventListener("mouseover", quitar);
Aceptar.addEventListener("mouseout", poner);
function quitar() {
document.getElementById("botonaceptar").style.color = "orange";
}
function poner() {
document.getElementById("botonaceptar").style.color = "brown";
}
Aceptar.addEventListener('click', function iniciar(){
firebase.auth()
.signInWithPopup(provider)
.then(function(result) {
var img = document.createElement("img");
img.src = result.user.photoURL;
var nombre= document.getElementById('contenedorimagen1');
var h1 = document.createElement('h1');
nombre.appendChild(h1);
h1.createTextNode(result.user.displayName);   


var imagen= document.getElementById('contenedorimagen2');
img.className = "imagenperfil";
var imagenperfil = document.getElementById("imagenperfil");
console.log(result.user)
imagen.appendChild(img);
//var variable=firebase.database();
//variable.setData("usuarios/",datos);
});
});





/*
guardar.addEventListener('click', function insertar_valor() {
var id = document.getElementById('id').value;
var Nombre = document.getElementById('Nombre').value;
var Apellido = document.getElementById('Apellido').value;
var Telefono = document.getElementById('Telefono').value;
var Dirección = document.getElementById('Dirección').value;
var Correo = document.getElementById('Correo').value;
alert(Nombre+Apellido+Telefono+Dirección+Correo)
var dataToImport = {
id:id,
Nombre: Nombre,
Apellido: Apellido,
Telefono: Telefono,
Dirección: Dirección,
Correo: Correo
};
firebase.database().ref("Profesores/"+id).set(dataToImport);
});


*/