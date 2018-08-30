var provider = new firebase.auth.GoogleAuthProvider();
var inicio= document.getElementById('iniciar');
var image= document.getElementById('imagen');

inicio.addEventListener('click', function iniciar(){
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
         image.append("<img src='"+result.user.photoURl+"'/>");
       });
    });

