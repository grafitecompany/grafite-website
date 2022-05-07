function homePageStartup() {
  let pageWidth = screen.width;
  pageWidth += "px";

  /*let pageHeightMinusNavbar = window.innerHeight - document.getElementById("navbarWrapper").offsetHeight;
  pageHeightMinusNavbar += "px";*/

  let tabsHeight = window.outerHeight - window.innerHeight
  let screenHeightMinusTabs = tabsHeight - screen.height
  let wrapperHeight = screenHeightMinusTabs - document.getElementById("navbarWrapper").offsetHeight;
  wrapperHeight += "px";

  document.getElementById("homePageTopImageWrapper").style.height = tabsHeight;
  document.getElementById("homePageSeeOurPastWorkWrapper").style.height = tabsHeight;
  document.getElementById("homePageTopImage").style.width = pageWidth;
  //document.getElementById("getInTouchWrapper").style.marginTop = pageHeightMinusNavbar;
}
