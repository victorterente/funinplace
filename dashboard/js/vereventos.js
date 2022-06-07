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
                    <th>${result[i].pessoa_id}</th>
                    <th>${result[i].pessoa_nome}</th>
                    <th>${result[i].evento_nome}</th>
                
                    <td>
                      
                    </tr>`
                    

                }
                

                tabela2.innerHTML = html
            }

        });
    }


    

);




