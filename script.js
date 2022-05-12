/*
* Event listener will wait until all document elements are loaded, and then set the size of the top image wrapper.
*/
document.addEventListener('DOMContentLoaded', function() {
  var homepageTopImageWrapper = document.getElementById("homePageTopImageWrapper");
  var homePageSeeOurPastWorkWrapper = document.getElementById("homePageSeeOurPastWorkWrapper");

  // Check what browser is being used
  let userAgent = navigator.userAgent;
  let browserName;

  if(userAgent.match(/firefox|fxios/i)){
    browserName = "firefox";
  }


  var browserBarsHeight = window.outerHeight - window.innerHeight;
  var height = window.screen.availHeight - browserBarsHeight - 58;

  // If broswer is firefox, add pixels to wrapper height (depending on screen aspect ratio) to account for strange line at bottom
  if(browserName == "firefox"){
    let aspectRatio = (screen.width / screen.height).toFixed(1);
    if (aspectRatio == 1.8) {
      height += 16;
    } else if (aspectRatio == 1.6) {
      height += 14;
    }
  }

  height += "px";
  homePageTopImageWrapper.style.height = height;
  homePageSeeOurPastWorkWrapper.style.height = height;
}, false);


window.addEventListener('resize', function() {
  var homepageTopImageWrapper = document.getElementById("homePageTopImageWrapper");
  var homePageSeeOurPastWorkWrapper = document.getElementById("homePageSeeOurPastWorkWrapper");

  // Check what browser is being used
  let userAgent = navigator.userAgent;
  let browserName;

  if(userAgent.match(/firefox|fxios/i)){
    browserName = "firefox";
  }


  var browserBarsHeight = window.outerHeight - window.innerHeight;
  var height = window.screen.availHeight - browserBarsHeight - 58;

  // If broswer is firefox, add pixels to wrapper height (depending on screen aspect ratio) to account for strange line at bottom
  if(browserName == "firefox"){
    let aspectRatio = (screen.width / screen.height).toFixed(1);
    if (aspectRatio == 1.8) {
      height += 16;
    } else if (aspectRatio == 1.6) {
      height += 14;
    }
  }

  height += "px";
  homePageTopImageWrapper.style.height = height;
  homePageSeeOurPastWorkWrapper.style.height = height;
}, false)
