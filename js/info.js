var Id1;
var local;
window.onload = async function () {
    try {
        Id1 = sessionStorage.getItem("Id");
         
      let informations = await $.ajax({
        url:("https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/local/"+Id1),
        method: "get",
        dataType: "json",
      });


      let html17 = "<div></div>";
      for (let information of informations) {
        html17 += ` <div class="row"><!-- first row -->     
        <div class="col-md-6"><!-- first column -->
              <div class="widget-item">
                  <h3 class="widget-title">${information.local_nome}</h3>
                  <div class="sample-thumb">
                      <img src="${information.local_img}" alt="about us" title="about us">
                  </div> <!-- /.sample-thumb -->
                  <h4 class="consult-title">${information.local_morada}</h4>
                  <p>${information.local_desc}</p>
                  <p>${information.local_tlm}</p>
                  </div> <!-- /.widget-item -->
              </div> <!-- /.col-md-4 -->
        `;
        local = 
        {
            lat: (information.lat1),
            lng: (information.long1),
        };
        console.log(local);


      }
      document.getElementById("info").innerHTML = html17;
    } catch (err) {
      console.log(err);
    }
  };