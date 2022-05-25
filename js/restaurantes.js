window.onload = async function () {
    try {
      let restaurantes = await $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/tl/2",
        method: "get",
        dataType: "json",
      });



      let html2 = "<div class='ticket-list'>";
      for (let restaurante of restaurantes) {
        html2 += ` <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="ticket-item">
                    <h4><a href="#">${restaurante.local_nome}</a></h4>
                    <p>Travel HTML Template is provided by <span class="blue">template</span><span class="green">mo</span>. Download, modify and use this layout for your travel or tour websites.<br><br> Aliquam justo lectus, fermentum vitae libero sollicitudin, tincidunt accumsan magna.Vestibulum congue lorem odio, at sodales nisi luctus quis.</p>
                    <a href="#" class="ticket-btn">Buy a ticket</a>
                </div> <!-- /.ticket-item -->
            </div> <!-- /.col-md-3 -->
        </div> <!-- /.row -->
    </div> <!-- /.container -->
</div> <!-- /.ticket-list -->`;
      }
      document.getElementById("restaurante").innerHTML = html2;
    } catch (err) {
      console.log(err);
    }
  };












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
