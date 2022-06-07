
window.onload = async function () {
$('#CriarEvento').on('click', function(event) {

    // prevent form default behaviour
    event.preventDefault();

    // disabled the submit button
    $("#CriarEvento").prop("disabled", true);

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/evento/new",
        type: "POST",
        data: {
            desc: jQuery('[id=desc]').val(),
            morada: jQuery('[id=morada]').val(),
            geo: jQuery('[id=geo]').val(),
            data: jQuery('[id=data]').val(),
            cap: jQuery('[id=cap]').val(),
            img: jQuery('[id=img]').val(),
            nome: jQuery('[id=nome]').val()
        },

        dataType: 'json',

        error: function (result){
            alert("Fill in all blank spaces")
            console.log("ERROR: ", result)

            $("#CriarEvento").prop("disabled", false);
        },
        success: function(result) {
            alert("evento criado com sucesso")
            console.log("SUCCESS : ", result);
           



            
            $("#CriarEvento").prop("disabled", false);
        }

    });

});
}