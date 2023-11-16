const lista = document.querySelector(".list-projects");

function getApiGithub(){
  fetch("https://api.github.com/users/Dex64ter/repos")
    .then(async response => await response.json())
    .then(data => data.map(repo => {
      if (repo.has_pages){
        let li = document.createElement("li");
        const description = repo.description ? repo.description : "Sem descrição";
        const created_at = new Date(repo.created_at).toLocaleDateString('pt-BR');
        
        console.log(JSON.stringify(repo, null, 2));
        li.innerHTML = `
          <a href="/${repo.name}">
            <h3>${repo.name}</h3>
            ${description}
            <span>${created_at}</span>
          </a>
        `;
        lista.appendChild(li);
      }
    }));
}

getApiGithub();