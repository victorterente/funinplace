$(document).ready(

    function(){
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/pessoa",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#name').text(result)
                var obj = JSON.stringify(result);
                console.log(obj);
                let tabela = document.querySelector("#tableuser")
                let html = ""
                let buttons = 
                "<td><div class='btn-group'>" +
                "<button type='button' class='btn btn-danger'>Action</button>" +
                "<button type='button' class='btn btn-danger dropdown-toggle dropdown-hover dropdown-icon' data-toggle='dropdown'>" +
                  "<span class='sr-only'>Toggle Dropdown</span>" +
                "</button>" +
                    "<div class='dropdown-menu' role='menu'>" +
                        "<a class='dropdown-item' href='#'>Action</a>" +
                        "<a class='dropdown-item' href='#'>Another action</a>" +
                        "<a class='dropdown-item' href='#'>Something else here</a>" +
                    "<div class='dropdown-divider></div>" +
                    "<a class='dropdown-item' href='#'>Separated link</a>" +
                    "</div>" +
                "</div>" +
                "<div class='btn-group'>" +
                "<button type='button' class='btn btn-success'>Action</button>" +
                "<button type='button' class='btn btn-success dropdown-toggle dropdown-hover dropdown-icon' data-toggle='dropdown'>" +
                  "<span class='sr-only'>Toggle Dropdown</span>" +
                "</button>" +
                    "<div class='dropdown-menu' role='menu'>" +
                        "<a class='dropdown-item' href='#'>Action</a>" +
                        "<a class='dropdown-item' href='#'>Another action</a>" +
                        "<a class='dropdown-item' href='#'>Something else here</a>" +
                    "<div class='dropdown-divider'></div>" +
                    "<a class='dropdown-item' href='#'>Separated link</a>" +
                    "</div>" +
                "</div>" +
                "<div class='btn-group'>" +
                "<button type='button' class='btn btn-warning'>Action</button>" +
                "<button type='button' class='btn btn-warning dropdown-toggle dropdown-hover dropdown-icon' data-toggle='dropdown'>" +
                  "<span class='sr-only'>Toggle Dropdown</span>" +
                "</button>" +
                    "<div class='dropdown-menu' role='menu'>" +
                        "<a class='dropdown-item' href='#'>Action</a>" +
                        "<a class='dropdown-item' href='#''>Another action</a>" +
                        "<a class='dropdown-item' href='#'>Something else here</a>" +
                    "<div class='dropdown-divider'></div>" +
                    "<a class='dropdown-item' href='#'>Separated link</a>" +
                    "</div>" +
                "</div>" +
                "<div class='btn-group'>" ;
                for (let i in result)
                {
                    html += `<tr>
                    <th>${result[i].pessoa_id}</th>
                    <th>${result[i].pessoa_nome}</th>
                    <th>${result[i].pessoa_dtnasc}</th>
                    <th>${result[i].pessoa_genero}</th>
                    <th>${result[i].pessoa_email}</th>
                    <th>${result[i].pessoa_tlm}</th>
                    <th>${result[i].pessoa_morada}</th>
                    ${buttons}</tr>`
                }

                tabela.innerHTML = html
            }

        });
    }

);