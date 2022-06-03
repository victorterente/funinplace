
function logout (){
    sessionStorage.removeItem("user");
    window.location.href = "index.html"
}