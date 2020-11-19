

    let articleOne = document.querySelector('.article-one')
    let grandeArticle = document.querySelector('#grande-article')
    
    let xhr = new XMLHttpRequest();
    function extraire(){
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status ==200){
                let donnees = JSON.parse(xhr.responseText);
                affichage(donnees);
            }
        }
    }
    xhr.open("GET","./bd.json", true);
    xhr.send();
    extraire();

function affichage(data){
    let txt = "";
    
    for(let i = 0; i < data.length; i++){
        
        txt += `
            <div class="col-4" >
                <div  class="card" style="width-max:400px">
                    <img class="card-img-top" src="${data[i].img}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${data[i].title}</h4>
                        <p class="card-text">${data[i].description}</p>
                        <p class="read card-text " > 
                        <a href="page3.html?id=${data[i].id}" data-id ="${data[i].id}">Lire... </a>
                        </p>
                    </div>
                </div>
            </div>
                ` ;
            console.log(data[i].id  )  
        }
    articleOne.innerHTML = txt
}


    let req = new XMLHttpRequest();
    function extraire2(){
        req.onreadystatechange = function(){
            if(req.readyState == 4 && req.status ==200){
                let donnees = JSON.parse(req.responseText);
                affichage2(donnees);
            }
        }
    }

req.open("GET","./bd.json", true);
    req.send();
    extraire2();
    

function affichage2(data){
    let a = "";
    let c
    
        for(key in data){
            if(id==data[key].id){
            a += `
                <div class="cont-img-p3">
                    <img src="${data[key].img}" alt="Nature" width="100%" height="auto">
                </div>
                <div class="cont-text">
                    <div class="vue">
                        <h3 class="title-art" >${data[key].title}</h3>
                        ${data[key].text}
                    </div>
                </div>
                `;  
        }
    }
        
    
    
    grandeArticle.innerHTML = a;
}
function getParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  let id = getParam('id');
console.log(id +"++++")