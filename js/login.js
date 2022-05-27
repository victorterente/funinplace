
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