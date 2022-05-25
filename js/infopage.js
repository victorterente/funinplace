window.onload = async function () {
    try {
      let infos = await $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/local/"+ idinfo,
        method: "get",
        dataType: "json",
      });



      let html17 = "<div class='ticket-list'>";
      for (let info of infos) {
        html17 += ` <h3 class="widget-title">${info.local_nome}</h3>
        /*<div class="row"><!-- first row -->     
          <div class="col-md-6"><!-- first column -->
                <div class="widget-item">
                    <h3 class="widget-title">${disco.local_nome}</h3>
                    <div class="sample-thumb">
                        <img src="images/about_1.jpg" alt="about us" title="about us">
                    </div> <!-- /.sample-thumb -->
                    <h4 class="consult-title">${disco.local_morada}</h4>
                    <p>${disco.local_desc}</p>
                    <a href="#" class="ticket-btn" id = "${disco.local_id}" onClick="reply_click(this.id)">Mais Informações</a>
                    </div> <!-- /.widget-item -->
                </div> <!-- /.col-md-4 -->*/
`;
      }
      document.getElementById("info").innerHTML = html17;
    } catch (err) {
      console.log(err);
    }
  };