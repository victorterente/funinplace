
var perfilid = sessionStorage.getItem('userid');


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
                      html += `<span class="bg-secondary p-1 px-4 rounded text-white">${data[i].pessoa_role}</span>
                      <h5 class="mt-2 mb-0">${data[i].pessoa_nome}</h5>
                      <span>UI/UX Designer</span>
                      
                      <div class="px-4 mt-1">
                          <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                      
                      </div>
                      
                       <ul class="social-list">
                          <li><i class="fa fa-facebook"></i></li>
                          <li><i class="fa fa-dribbble"></i></li>
                          <li><i class="fa fa-instagram"></i></li>
                          <li><i class="fa fa-linkedin"></i></li>
                          <li><i class="fa fa-google"></i></li>
                      </ul>
                      
                      <div class="buttons">
                          
                          <button class="btn btn-outline-primary px-4">Message</button>
                          <button class="btn btn-primary px-4 ms-3">Contact</button>
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