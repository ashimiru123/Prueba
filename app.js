var provider = new firebase.auth.GoogleAuthProvider();
var inicio= document.getElementById('iniciar');

var guardar= document.getElementById('guardar');

inicio.addEventListener('click', function iniciar(){
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
        var img = document.createElement("img");
        var h = document.createElement("H1");
        img.src = result.user.photoURL;
        var imagen= document.getElementById('imagen');
        var nombre= document.getElementById('nombre');
        var h = document.createElement("H1");
        var t = document.createTextNode(result.user.displayName);
        nombre.appendChild(t);
        imagen.appendChild(img);
        var datos={
            nombre:result.user.displayName
        }

        var variable=firebase.database();
        variable.setData("usuarios/",datos);
    });

});

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