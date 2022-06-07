var user = sessionStorage.getItem('user');
console.log(user);


window.onload = async function () {
    let html = ``
        
  if (user != null){
        html += `
        <li><a href="dashboard/admin.html">Dashboard</a></li>
        <li><a onclick="logout()">Lougout</a></li>`
    }
    else if(user == null){
        html += `<li><a href="contact.html">Login</a></li>`
}

    document.getElementById("barra").innerHTML = html;
    
}

function logout (){
    sessionStorage.removeItem("user");
    window.location.href = "index.html"
}