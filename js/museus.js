window.onload = async function () {
    try {
      let museus = await $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/tl/3",
        method: "get",
        dataType: "json",
      });



      let html3 = "<div class='ticket-list'>";
      for (let museu of museus) {
        html3 += `
        <div class="row"><!-- first row -->     
          <div class="col-md-6"><!-- first column -->
                <div class="widget-item">
                    <h3 class="widget-title">${museu.local_nome}</h3>
                    <div class="sample-thumb">
                        <img src="${museu.local_img}" alt="about us" title="about us">
                    </div> <!-- /.sample-thumb -->
                    <h4 class="consult-title">${museu.local_morada}</h4>
                    <p>${museu.local_desc}</p>
                    <a href="infopage.html" class="ticket-btn" id ="${museu.local_id}" onclick="Id(${museu.local_id})" >Mais Informações</a>
                    </div> <!-- /.widget-item -->
                </div> <!-- /.col-md-4 -->
`;
      }
      document.getElementById("museu").innerHTML = html3;
    } catch (err) {
      console.log(err);
    }
  };

  function Id(id) {
    sessionStorage.setItem("Id", id);
    window.location = "infopage.html";
  }