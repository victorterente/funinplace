window.onload = async function () {
    try {
      let restaurantes = await $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/tl/2",
        method: "get",
        dataType: "json",
      });



      let html2 = "<div class='ticket-list'>";
      for (let restaurante of restaurantes) {
        html2 += `<div class="row"><!-- first row -->     
          <div class="col-md-6"><!-- first column -->
                <div class="widget-item">
                    <h3 class="widget-title">${restaurante.local_nome}</h3>
                    <div class="sample-thumb">
                        <img src="images/about_1.jpg" alt="about us" title="about us">
                    </div> <!-- /.sample-thumb -->
                    <h4 class="consult-title">${restaurante.local_morada}</h4>
                    <p>${restaurante.local_desc}</p>
                    <a href="infopage.html" class="ticket-btn" id ="${restaurante.local_id}" onclick="Id(${restaurante.local_id})" >Mais Informações</a>
                    </div> <!-- /.widget-item -->
                </div> <!-- /.col-md-4 -->
`;
      }
      document.getElementById("restaurante").innerHTML = html2;
    } catch (err) {
      console.log(err);
    }
  };

  function Id(id) {
    sessionStorage.setItem("Id", id);
    window.location = "infopage.html";
  }












/*<div class="ticket-list">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="ticket-item">
                            <h4><a href="#">Airlines</a></h4>
                            <p>Travel HTML Template is provided by <span class="blue">template</span><span class="green">mo</span>. Download, modify and use this layout for your travel or tour websites.<br><br> Aliquam justo lectus, fermentum vitae libero sollicitudin, tincidunt accumsan magna.Vestibulum congue lorem odio, at sodales nisi luctus quis.</p>
                            <a href="#" class="ticket-btn">Buy a ticket</a>
                        </div> <!-- /.ticket-item -->
                    </div> <!-- /.col-md-3 -->
                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </div> <!-- /.ticket-list -->

*/
