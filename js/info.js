var discoId;
window.onload = async function () {
    try {
        discoId = sessionStorage.getItem("discoId");
         
      let informations = await $.ajax({
        url:("https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/local/"+discoId),
        method: "get",
        dataType: "json",
      });


      let html17 = "<div></div>";
      for (let information of informations) {
        html17 += ` <h3> ${information.local_nome}</h3>
        
        `;



      }
      document.getElementById("info").innerHTML = html17;
    } catch (err) {
      console.log(err);
    }
  };