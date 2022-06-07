$(document).ready(

    function(){
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/evento",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#name').text(result)
                var obj = JSON.stringify(result);
                console.log(obj);
                let tabela2 = document.querySelector("#tableembpending1")
                let html = ""
                /*let buttons = 
                `<td><div class="btn-group">
                          <button type="button" id = "${result[i].evento_id}" class="btn btn-danger">Remover</button>
                          <button type="button" class="btn btn-danger dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                            <span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <div class="dropdown-menu" role="menu">
                            <a class="dropdown-item" href="#">Remover</a>
                          </div>
                        </div>
                        </div>`;*/
                for (let i in result)
                {
                    var contentString = result[i].lat + ", " + result[i].long;
                    html += `<tr>
                    <th>${result[i].evento_id}</th>
                    <th>${result[i].evento_nome}</th>
                    <th>${result[i].evento_desc}</th>
                    <th>${result[i].evento_morada}</th>
                    <th>${result[i].evento_cap}</th>
                    <th>${result[i].evento_geo}</th>
                    <th>${contentString} </th>
                    <td>
                      <div class="btn-group">
                            <button type="button" id = "${result[i].evento_id}" onclick= "removevento(${result[i].evento_id})" class="btn btn-danger">Remover</button>

                      </div>
                    </tr>`
                    

                }
                

                tabela2.innerHTML = html
            }

        });
    }


    

);

function removevento(id){
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/evento/delete/"+id,
        type: "delete",
        dataType: 'json',
        success: function(result) {
            console.log(result);
        }
    });
}