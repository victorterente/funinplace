
window.onload = async function (id) {
    try {
         var id1 = toString()
      let informations = await $.ajax({
        url:("https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/local/"+id1),
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