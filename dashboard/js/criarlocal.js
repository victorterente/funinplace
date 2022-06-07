
window.onload = async function () {
    $('#CriarLocal').on('click', function(event) {
    
        // prevent form default behaviour
        event.preventDefault();
    
        // disabled the submit button
        $("#CriarLocal").prop("disabled", true);
    
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/local/new",
            type: "POST",
            data: {
                desc: jQuery('[id=desc]').val(),
                morada: jQuery('[id=morada]').val(),
                geo: jQuery('[id=geo]').val(),
                tlm: jQuery('[id=tlm]').val(),
                img: jQuery('[id=img]').val(),
                nome: jQuery('[id=nome]').val()
            },
    
            dataType: 'json',
    
            error: function (result){
                alert("Something went wrong")
                console.log("ERROR: ", result)
    
                $("#CriarLocal").prop("disabled", false);
            },
            success: function(result) {
                alert("local criado com sucesso")
                console.log("SUCCESS : ", result);
               
    
    
    
               
                $("#CriarLocal").prop("disabled", false);
            }
    
        });
    
    });
    }