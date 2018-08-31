var provider = new firebase.auth.GoogleAuthProvider();
var inicio= document.getElementById('iniciar');


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
    });

});

