'use strict'

//fetch (ajas) peticiones asincronas
var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#div_janet');


var usuarios = [];

getUsuarios()
    .then(data=> data.json())
    .then(users=>{
        usuarios= users.data;
        console.log(usuarios);
        listarUsuarios(users.data);
        return getJanet();
                
    })
    .then(data => data.json())
    .then(user =>{
        listarJanet(user.data)
    });


    function getUsuarios(){
       return fetch('https://reqres.in/api/users');
    }

   function getJanet(){
    return fetch('https://reqres.in/api/users/2');
   }

    function listarUsuarios(usuarios){
        usuarios.map((user,i)=>{
            let nombre = document.createElement('h2');
            nombre.innerHTML = i +"."+ user.first_name + " " + user.last_name;
            div_usuarios.appendChild(nombre);

            document.querySelector('.loading').style.display ="none";
        });

    }
    function listarJanet (user){
        
            let nombre = document.createElement('h3');
            let avatar = document.createElement('img');
            nombre.innerHTML =  user.first_name + " " + user.last_name;

            avatar.src = user.avatar;
            avatar.width ='100';
            div_janet.appendChild(nombre);
            div_janet.appendChild(avatar);

            document.querySelector('#div_janet .load').style.display ='none';
    

    }
