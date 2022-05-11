document.addEventListener('DOMContentLoaded', function() {
  setInterval(function() {
    var homepageTopImageWrapper = document.getElementById("homePageTopImageWrapper");
    //var browserBarsHeight = window.outerHeight - window.innerHeight;

    var browserBarsHeight = window.outerHeight - window.innerHeight;
    var height = window.screen.availHeight - browserBarsHeight - 58;
    height += "px";
    homePageTopImageWrapper.style.height = height;

    console.log(window.outerHeight - screen.availHeight);

  }, 100);
}, false);
