function showRepositories(){
  var repos = JSON.parse(this.responseText);
  console.log(this.responseText);
  const repoList = '<ul>'${repos.map(r => '<li>' + r.name + '</li>')}
  for(var i=0; i<this.responseText.length; i++){
    repoList += '<li>' + this.responseText[i] + '</li>';
  }
  repoList += '</ul>';
  
  document.getElementById('repositories').innerHTML = repoList;
}

function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load',showRepositories);
  req.open('GET','https://api.github.com/users/octocat/repos');
  req.send();
}