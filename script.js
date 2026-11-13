
document.querySelectorAll('.chip').forEach(function(ch){
  ch.addEventListener('click', function(){
    document.querySelectorAll('.chip').forEach(function(c){c.classList.remove('active')});
    ch.classList.add('active');
    var tag = ch.getAttribute('data-tag');
    document.querySelectorAll('#grid .card').forEach(function(cd){
      cd.style.display = (!tag || (cd.getAttribute('data-tags')||'').indexOf(tag) > -1) ? '' : 'none';
    });
  });
});
