var eventoid;
var evento;
var pessoaId;
var AdminId;
var Pessoaid = sessionStorage.getItem(pessoaId);

window.onload = async function () {
    try {
        eventoid = sessionStorage.getItem("Id");
        
      let informations = await $.ajax({
        url:("https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/evento/"+eventoid),
        method: "get",
        dataType: "json",
      });
      
      let html18 = "<div></div> ";
      
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
<<<<<<< HEAD
                  <p>Data: ${information.evento_data}</p>
                  <p>Capacidade: ${information.evento_cap}</p>
=======
                  
>>>>>>> 17468e07deb263e29d357f1a6d0c2ebbe90188a5
                  </div> <!-- /.widget-item -->
              </div> <!-- /.col-md-4 -->
              
            `;
       
            html18 += `<section>
            <p><input type="button"  onclick="reservarCampo()" value="Inscrever"></p></section>`;
              document.getElementById("info2").innerHTML = html18;
             
            

              evento = 
        {
            lat1: information.lat1,
            lng1: information.long1
        };
          
        console.log(information.lat1);  
        console.log(information.long1);
        console.log(evento);



      }
    
    } catch (err) {
      console.log(err);
    }
    async function reservarCampo(eventoid, pessoaId){
      try {
        semana = document.getElementById("info2").value;
        console.log(semana);
          pessoaId = sessionStorage.getItem("PessoaId");
          eventoid = sessionStorage.getItem("Id");
          let obj = {eventoid, pessoaId, semana}
          let reservas = await $.ajax({
            url: `/api/campos/${eventoid}/reservas`,
            method: "post",
            dataType: "json",
            data: JSON.stringify(obj),
            contentType: "application/json",
      });
          alert("Reserva efetuada com sucesso");
  
        } catch (err) {
          document.getElementById("msg").innerText = err.responseJSON.msg;
        }
    }
  
  };