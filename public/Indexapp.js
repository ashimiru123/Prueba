var llamarJeison = document.getElementById("iniciodesession");

llamarJeison.addEventListener('click', function (){
    alert("hola")
    window.open("http://127.0.0.1:51206/jeison.html");
    var contenedor= document.getElementById("contenedor")
    contenedor.style.display="grid";
    contenedorDos.style.display="none";  
});