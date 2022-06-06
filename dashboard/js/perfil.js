
var perfilid = sessionStorage.getItem('userid');
console.log(perfilid);


window.onload = async function () {
$.ajax(  
    {   
      url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/pessoa/"+ perfilid,
      type: "GET",
      dataType: 'json',
      success: successHandler, error: errorHandler   
    });   
    function successHandler(data)   
    {   
      console.log(data); 
      let perfil = document.querySelector("#perfil")
      let html = ""  
      for (let i in data)
                  {
                      html += `
                      <div class="text-center">
                      <img src="https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus.png" width="100" class="rounded-circle">
                    </div>
                      <div class="text-center mt-3" >
                      <span class="bg-secondary p-1 px-4 rounded text-white">${data[i].pessoa_role}</span>
                      <h5 class="mt-2 mb-0">${data[i].pessoa_nome}</h5>
                      <span>${data[i].pessoa_email}</span>
                      
                      <div class="px-4 mt-1">
                          <p class="fonts"> ${data[i].pessoa_nome} , utilizador do sexo ${data[i].pessoa_genero} , nascido a ${data[i].pessoa_dtnasc}  </p>
                          <p class="fonts">Reside em : ${data[i].pessoa_morada}</p>
                      </div>
                      
              
                      
                      <div class="buttons">
                          
                          <button class="btn btn-outline-primary px-4" id="p1" onclick="copyToClipboard('#p1')" >${data[i].pessoa_tlm}</button>
                          <button class="btn btn-primary px-4 ms-3"    id="p2" onclick="copyToClipboard('#p2')" >${data[i].pessoa_email}</button>
                      </div>
                      `
                  }

                  perfil.innerHTML = html
    }   
    function errorHandler(error)   
    {   
      alert(JSON.stringify(error));   
    }  
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  alert("Copied to clipboard");
  $temp.remove();
}