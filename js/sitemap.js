window.addEventListener("load", function () {
  const subList = document.querySelectorAll(".sublist");
  const siteMap = this.document.querySelectorAll(".sitemap-list > li > a");
  const siteMapList = this.document.querySelectorAll(".sitemap-list > li");

  for (let i = 0; i < siteMapList.length; i++) {
    siteMap[i].addEventListener("click", function (event) {
      event.preventDefault();
      let activeSiteMap = siteMapList[i].classList.contains("active");
      if (!activeSiteMap) {
        siteMapList[i].classList.add("active");
        subList[i].classList.add("sublist-active");
      } else {
        siteMapList[i].classList.remove("active");
        subList[i].classList.remove("sublist-active");
      }
    });
  }
});
