var idinfo = 1;
function reply_click(clicked_id)
{
    alert(clicked_id);
    idinfo = clicked_id;
    console.log(clicked_id);
}

function Id(id) {
    sessionStorage.setItem("Id", id);
    window.location = "infopage.html";
    window.location = "index.html";
  }

    