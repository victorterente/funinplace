var Id1;
var evento;
window.onload = async function () {
    try {
        Id1 = sessionStorage.getItem("Id");
         
      let informations = await $.ajax({
        url:("https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/evento/"+Id1),
        method: "get",
        dataType: "json",
      });


      let html18 = "<div></div>";
      for (let information of informations) {
        html18 += ` <div class="row"><!-- first row -->     
        <div class="col-md-6"><!-- first column -->
              <div class="widget-item">
                  <h3 class="widget-title">${information.evento_nome}</h3>
                  <div class="sample-thumb">
                      <img src="${information.evento_img}" alt="about us" title="about us">
                  </div> <!-- /.sample-thumb -->
                  <h4 class="consult-title">${information.evento_morada}</h4>
                  <p>${information.evento_desc}</p>
                  </div> <!-- /.widget-item -->
              </div> <!-- /.col-md-4 -->
        `;
        evento = 
        {
            lat: information.lat,
            lng: information.long
        };
          
        console.log(information.lat);  
        console.log(information.long);
        console.log(evento);



      }
      document.getElementById("info2").innerHTML = html18;
    } catch (err) {
      console.log(err);
    }
  };