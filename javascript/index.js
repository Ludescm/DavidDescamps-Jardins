// Script pour faire remonter en haut de la page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  // Script pour afficher le bouton en fonction de la position de la page
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btn-top").style.display = "block";
    } else {
      document.getElementById("btn-top").style.display = "none";
    }
  }