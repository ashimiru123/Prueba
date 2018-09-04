var llamarJeison = document.getElementById("iniciodesession");

llamarJeison.addEventListener('click', function (){
    alert("hola")
    window.open("https://proyecto-15481.firebaseapp.com/jeison.html");
    var contenedor= document.getElementById("contenedor")
    contenedor.style.display="grid";
    contenedorDos.style.display="none";  
});