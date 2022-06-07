var perfilid = sessionStorage.getItem('userid');
console.log(perfilid);

$(document).ready(

    function(){
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/reserva/"+perfilid,
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#name').text(result)
                var obj = JSON.stringify(result);
                console.log(obj);
                let tabela2 = document.querySelector("#tableembpending4")
                let html = ""
                for (let i in result)
                {
                    
                    html += `<tr>
                    <th>${result[i].inscricao_id}</th>
                    <th>${result[i].pessoa_nome}</th>
                    <th>${result[i].evento_nome}</th>
                    <td>
                    <div class="btn-group">
                          <button type="button" id = "${result[i].inscricao_id}" onclick="removereserva(${result[i].inscricao_id})" class="btn btn-danger">Cancelar Inscrição</button>

                    </div>
                  </tr>`
                  console.log(result[i].inscricao_id);
                    

                }
                

                tabela2.innerHTML = html
            }

        });
    }
);
function removereserva(id){
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/reserva/delete/"+id,
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




