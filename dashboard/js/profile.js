var user = sessionStorage.getItem('user');
console.log(user);
var admin = user.includes("admin");
var moderador = user.includes("monitor");

console.log(moderador);
console.log(admin);


window.onload = async function () {
    let html = `<li class="nav-item">
    <a href="perfil.html" class="nav-link">
      <i class="far fa-circle nav-icon"></i>
      <p>Perfil</p>
    </a>
  </li>`
        
  if (admin == true){
        html += `
      <li class="nav-item">
        <a href="utilizadores.html" class="nav-link">
          <i class="far fa-circle nav-icon"></i>
          <p>Gerir Pessoas</p>
        </a>
      </li>
      <li class="nav-item">
        <a href="locais.html" class="nav-link">
          <i class="far fa-circle nav-icon"></i>
          <p>Gerir Locais</p>
        </a>
      </li>
      <li class="nav-item">
        <a href="gerireventos.html" class="nav-link">
          <i class="far fa-circle nav-icon"></i>
          <p>Gerir Eventos</p>
        </a>
      </li>
      <li class="nav-item">
      <a href="criarlocal.html" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Adicionar local</p>
      </a>
    </li>
    <li class="nav-item">
    <a href="criarevento.html" class="nav-link">
      <i class="far fa-circle nav-icon"></i>
      <p>Adicionar evento</p>
    </a>
  </li>`
    }
    else if(moderador == true){
        html += `
      <li class="nav-item">
        <a href="locais.html" class="nav-link">
          <i class="far fa-circle nav-icon"></i>
          <p>Gerir Locais</p>
        </a>
      </li>
      <li class="nav-item">
        <a href="mapamanag.html" class="nav-link">
          <i class="far fa-circle nav-icon"></i>
          <p>Gerir Eventos</p>
        </a>
      </li>
      <li class="nav-item">
      <a href="criarlocal.html" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Adicionar local</p>
      </a>
    </li>
    <li class="nav-item">
    <a href="criarevento.html" class="nav-link">
      <i class="far fa-circle nav-icon"></i>
      <p>Adicionar evento</p>
    </a>
  </li>`
}
getUserName();



    document.getElementById("dashboard").innerHTML = html;
}
function getUserName(){
    
    for (var i =0 ; i< (user).length; i++) {
    console.log(user[i]);
    /*if(user[i] == "pessoa_nome")
    var nome = user[i+1];
    console.log((nome));

    return nome;*/
    }
}