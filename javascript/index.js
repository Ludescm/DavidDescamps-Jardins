window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.top = "-150px";
  } else {
    document.getElementById("header").style.top = "0";
  }
}