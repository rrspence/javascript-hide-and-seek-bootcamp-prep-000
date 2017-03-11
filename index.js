function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  // document.getElementById('nested').getElementsByClassName('target')
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(i + n)
  }
}

function deepestChild() {
  var nodes = document.querySelectorAll('div#grand-node');
  if(!nodes.length) return false;
  return nodes[nodes.length-1];
}
