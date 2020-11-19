
let articleOne = document.querySelector('.article-one')
    
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
                <tr>
                  
                  <td>${data[i].id}</td>
                  <td><img class="img-admin" src="${data[i].img}" alt="${data[i].title}" ></td>
                  <td>${data[i].title}</td>
                  <td>${data[i].description}</td>
                  <td>${data[i].text}</td>
                </tr>
                        
                ` ;
            
        }
    articleOne.innerHTML = txt
}

