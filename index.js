function showRepositories(){
  var repos = JSON.parse(this.responseText);
  console.log(this.responseText);
  const repoList = `<ul>${repos
    .map(r => '<li>' + r.name +' - <a href="#" data-repo="'+r.name+'" onclick=getCommits(this)">Get Commits</a></li>')
    .join('')}</ul>`;
  
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el){
  const name = el.dataset.rep;
  const req = new XMLHttpRequest();
  
  req.addEventListener()
}

function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load',showRepositories);
  req.open('GET','https://api.github.com/users/octocat/repos');
  req.send();
}