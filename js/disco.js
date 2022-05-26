window.onload = async function () {
    try {
      let discos = await $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/tl/1",
        method: "get",
        dataType: "json",
      });



      let html1 = "<div class='ticket-list'>";
      for (let disco of discos) {
        html1 += `<div class="row"><!-- first row -->     
          <div class="col-md-6"><!-- first column -->
                <div class="widget-item">
                    <h3 class="widget-title">${disco.local_nome}</h3>
                    <div class="sample-thumb">
                        <img src="images/about_1.jpg" alt="about us" title="about us">
                    </div> <!-- /.sample-thumb -->
                    <h4 class="consult-title">${disco.local_morada}</h4>
                    <p>${disco.local_desc}</p>
                    <a href="infopage.html" class="ticket-btn" id ="${disco.local_id}" onclick="DiscoId(${disco.local_id})" >Mais Informações</a>
                    </div> <!-- /.widget-item -->
                </div> <!-- /.col-md-4 -->
`;
      }
      document.getElementById("disco").innerHTML = html1;
    } catch (err) {
      console.log(err);
    }
  };

  function DiscoId(id) {
    sessionStorage.setItem("discoId", id);
    window.location = "infopage.html";
  }