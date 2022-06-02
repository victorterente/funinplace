
window.onload = async function () {

$(document).ready(function() {

    function getUsersList() {

        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/pessoa",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
            }
        });
    }
    getUsersList();
    $('#btnRegister').on('click', function(event) {

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnRegister").prop("disabled", true);

        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/pessoa/register",
            type: "POST",
            data: {
                email: jQuery('[id=email]').val(),
                pass: jQuery('[id=pass]').val(),
                morada: jQuery('[id=morada]').val(),
                dtnasc: jQuery('[id=dtnasc]').val(),
                tlm: jQuery('[id=tlm]').val(),
                genero: jQuery('[id=genero]').val(),
                nome: jQuery('[id=nome]').val()
            },

            dataType: 'json',

            error: function (result){
                alert("Username or Password are Incorrect")
                console.log("ERROR: ", result)

                $("#btnRegister").prop("disabled", false);
            },
            success: function(result) {
                console.log("SUCCESS : ", result);
                window.location.href = "index.html"



                window.localStorage.setItem('user', JSON.stringify(result));
                $("#btnRegister").prop("disabled", false);
            }

        });

    });

    $('#btnLogin').on('click', function(event) {

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnLogin").prop("disabled", true);

        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/pessoa/login",
            type: "POST",
            data: {
                email: jQuery('[name=EmailForm]').val(),
                pass: jQuery('[name=PasswordForm]').val()
            },

            dataType: 'json',

            error: function (result){
                alert("Username or Password are Incorrect")
                console.log("ERROR: ", result)

                $("#btnLogin").prop("disabled", false);
            },
            success: function(result) {
                console.log("SUCCESS : ", result);
                window.location.href = "events.html"



                window.localStorage.setItem('user', JSON.stringify(result));
                $("#btnLogin").prop("disabled", false);
            }

        });

    });



});
}