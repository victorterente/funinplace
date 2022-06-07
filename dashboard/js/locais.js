$(document).ready(

    function(){
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/local",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#name').text(result)
                var obj = JSON.stringify(result);
                console.log(obj);
                let tabela3 = document.querySelector("#tableembpending2")
                let html = ""
                /*let buttons = 
                `<td><div class="btn-group">
                          <button type="button" class="btn btn-danger">Rejeitar</button>
                          <button type="button" class="btn btn-danger dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                            <span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <div class="dropdown-menu" role="menu">
                            <a class="dropdown-item" href="#">Rejeitar</a>
                            <a class="dropdown-item" href="#">Rejeitar e enviar mensagem</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>
                        <div class="btn-group">
                          <button type="button" class="btn btn-success">Aceitar</button>
                          <button type="button" class="btn btn-success dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                            <span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <div class="dropdown-menu" role="menu">
                            <a class="dropdown-item" href="#">Aceitar</a>
                            <a class="dropdown-item" href="#">Aceitar e enviar mensagem</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>`;*/
                for (let i in result)
                {
                    var contentString = result[i].lat + ", " + result[i].long;
                    html += `<tr>
                    <th>${result[i].local_id}</th>
                    <th>${result[i].local_nome}</th>
                    <th>${result[i].local_desc}</th>
                    <th>${result[i].local_morada}</th>
                    <th>${result[i].local_tlm}</th>
                    <th>${result[i].local_geo}</th>
                    <th>${contentString} </th>
                    <td><div class="btn-group">
                          <button type="button" id = "${result[i].local_id}" onclick= "removelocal(${result[i].local_id})" class="btn btn-danger">Remover</button>
                        
                        </div>
                        <div class="btn-group">
                          <button type="button" class="btn btn-success">Selecionar tipo</button>
                          <button type="button" class="btn btn-success dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                            <span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <div class="dropdown-menu" role="menu">
                            <a class="dropdown-item" href="#" onclick= "tipolocal(${result[i].local_id},1)">Tipo: Discoteca</a>
                            <a class="dropdown-item" href="#" onclick= "tipolocal(${result[i].local_id},2)">Tipo: Restaurante</a>
                            <a class="dropdown-item" href="#" onclick= "tipolocal(${result[i].local_id},3)">Tipo: Museu/Monumento</a>
                        </div>
                    </tr>`
                }

                tabela3.innerHTML = html
            }

        });
    }

);
function removelocal(id){
  $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/local/delete/"+id,
      type: "delete",
      dataType: 'json',
      success: function(result) {
          console.log(result);
      }
  });
}
function Refresh() {
  window.parent.location = window.parent.location.href;
}



function tipolocal(localId , tipolocalId){
  let obj = {localId,tipolocalId}
$.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/tl/tipo",
  type: "post",
  data:JSON.stringify(obj),
  dataType: 'json',
  contentType: "application/json",

  error: function (result){
      alert("local associado")
      console.log("ERROR: ", result)

  },
  success: function(result) {
      alert("local associado")
      console.log("SUCCESS : ", result);
      
  }

});
}