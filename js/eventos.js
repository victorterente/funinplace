/*var PessoaId = sessionStorage.getItem("PessoaId");
var AdminId = sessionStorage.getItem("AdminId");
var monitor = sessionStorage.getItem("monitorId");*/

window.onload = async function () {
  try {
    let eventos = await $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/evento",
      method: "get",
      dataType: "json",
    });   

      let html = "<div class='ticket-list'>";
      for (let evento of eventos) {
        html += `<div class="row"><!-- first row -->     
          <div class="col-md-6"><!-- first column -->
                <div class="widget-item">
                    <h3 class="widget-title">${evento.evento_nome}</h3>
                    <div class="sample-thumb">
                        <img src="${evento.evento_img}" alt="about us" title="about us">
                    </div> <!-- /.sample-thumb -->
                    <h4 class="consult-title">${evento.evento_morada}</h4>
                    <p>${evento.evento_desc}</p>
                    <a href="infopage2.html" class="ticket-btn" id ="${evento.evento_id}" onclick="Id(${evento.evento_id})" >Mais Informações</a>
                    </div> <!-- /.widget-item -->
                </div> <!-- /.col-md-4 -->
`;
      }
    document.getElementById("evento").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

function Id(id) {
    sessionStorage.setItem("Id", id);
    window.location = "infopage2.html";
    window.location = "index.html";
  }