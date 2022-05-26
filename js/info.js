var Id1;
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
        html17 += ` <h3> ${information.local_nome}</h3>
        
        `;



      }
      document.getElementById("info").innerHTML = html17;
    } catch (err) {
      console.log(err);
    }
  };