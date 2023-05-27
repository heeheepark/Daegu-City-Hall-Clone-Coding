window.addEventListener("load", function () {
  // gnb 메뉴
  const gnb = document.querySelector(".gnb");
  const gnbList = document.querySelectorAll(".gnb > ul > li");
  const hInner = document.querySelector(".header .inner");
  const header = document.querySelector(".header");
  const submenu = document.querySelectorAll(".submenu");
  const logo = document.querySelector("h1");
  const memList = document.querySelector(".member-list");

  gnb.addEventListener("mouseenter", function () {
    gnb.classList.add("gnb-active");
    hInner.classList.add("inner-active");
    header.classList.add("header-active");
    logo.style.display = "none";
    memList.style.display = "none";
    submenu.forEach((item) => {
      item.style.display = "block";
    });
  });
  gnb.addEventListener("mouseleave", function () {
    gnb.classList.remove("gnb-active");
    hInner.classList.remove("inner-active");
    header.classList.remove("header-active");
    logo.style.display = "block";
    memList.style.display = "block";
    submenu.forEach((item) => {
      item.style.display = "none";
    });
  });
});
