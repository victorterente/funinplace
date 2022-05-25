window.onload = async function () {
    try {
      let discos = await $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/tl/1",
        method: "get",
        dataType: "json",
      });



      let html1 = "<ul class='list-group'>";
      for (let disco of discos) {
        html1 += `<li class="widget-item">
            <h7>${disco.local_nome}</h7>
                <p></p>
                <p></p>
                <p></p>
                <h1>${disco.local_desc}</h1>
                <a href = ""class="slider-btn">INFO</a>
                </li>`;
      }
      document.getElementById("disco").innerHTML = html1;
    } catch (err) {
      console.log(err);
    }
  };