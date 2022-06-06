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
                let tabela = document.querySelector("#tableembpending")
                let html = ""
                let buttons = 
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
                        </div>`;
                for (let i in result)
                {
                    var contentString = result[i].lat + ", " + result[i].long;
                    html += `<tr>
                    <th>${result[i].local_id}</th>
                    <th>${result[i].local_nome}</th>
                    <th>${result[i].local_desc}</th>
                    <th>${result[i].local_morada}</th>
                    <th>${result[i].local_tlm}</th>
                    <th>${contentString} </th>
                    <td><div class="btn-group">
                          <button type="button" id = "${result[i].local_id}" onclick= "removelocal(this.id)" class="btn btn-danger">Remover</button>
                          <button type="button" class="btn btn-danger dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                            <span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <div class="dropdown-menu" role="menu">
                            <a class="dropdown-item" href="#">Remover</a>
                          </div>
                        </div>
                        </div></tr>`
                }

                tabela.innerHTML = html
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