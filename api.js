const lista = document.getElementById("list-projects");

function getApiGithub(){
  fetch("https://api.github.com/users/Dex64ter/repos")
    .then(async response => await response.json())
    .then(data => data.map(repo => {
      let li = document.createElement("li");
      let barra = repo.full_name.indexOf("/");
      li.innerHTML = `
        <p>
          <h3>${repo.full_name.substring(barra+1,repo.full_name.length-1)}</h3>
          <a href="${repo.html_url}" target="_blank">${repo.html_url}</a>
        </p>
      `;
      lista.appendChild(li);
    }));

}

getApiGithub();