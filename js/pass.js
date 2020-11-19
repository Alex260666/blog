
document.querySelector(".but").onclick = function(){
    let user =document.querySelector("#email")
    let pass =document.querySelector("#password")
    user=user.value
    pass=pass.value
    
    let xhr = new XMLHttpRequest();
        function extraire(){
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status ==200){
                    let donnees = JSON.parse(xhr.responseText);
                    affichage(donnees);
                }
            }
        }
        xhr.open("GET","./user.json", true);
        xhr.send();
        extraire();

    function affichage(data){
        for(let key in data){
            if(user == data[key].user && pass == data[key].pass){
                window.location.replace("./admin.html");
            }else{
                document.querySelector(".alert").innerHTML=`<div class=" alert-warning" role="alert" display="non">Mail ou mot de passe est invalide!</div>`;
                user=user.value=""
                pass=pass.value=""
            }
        }
    }
}


