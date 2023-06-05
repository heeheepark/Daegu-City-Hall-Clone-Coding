window.addEventListener('load', function () {
  // gnb 메뉴
  const header = document.querySelector('.header');
  const logo = document.querySelector('h1');
  const gnb = document.querySelector('.gnb');
  const submenu = document.querySelectorAll('.submenu');
  const memList = document.querySelector('.member-list');
  const memLiSubMenu = this.document.querySelectorAll('.member-list > ul > li > a');
  const memLiSubMenuUl = document.querySelectorAll('.member-list > ul > li > ul');

  memLiSubMenu.forEach((item, index) => {
    let menuOpen = true;
    item.addEventListener('click', () => {
      if (menuOpen) {
        item.classList.add(`${item.className}-active`);
        memLiSubMenuUl[index].style.display = 'block';
        menuOpen = false;
      } else {
        item.classList.remove('login-active');
        item.classList.remove('language-active');
        memLiSubMenuUl[index].style.display = 'none';
        menuOpen = true;
      }
    });
  });

  gnb.addEventListener('mouseenter', function () {
    header.classList.add('header-active');
    gnb.classList.add('gnb-active');
    logo.style.display = 'none';
    memList.style.display = 'none';
    submenu.forEach((item) => {
      item.style.display = 'block';
    });
  });
  gnb.addEventListener('mouseleave', function () {
    header.classList.remove('header-active');
    gnb.classList.remove('gnb-active');
    logo.style.display = 'block';
    memList.style.display = 'block';
    submenu.forEach((item) => {
      item.style.display = 'none';
    });
  });

  // search-btn 클릭, 닫기 버튼
  const searchBtn = document.querySelector('.header-searchBtn');
  const closeBtn = document.querySelector('.close-btn');
  const dim = document.querySelector('.back-dim');
  const searchWrap = document.querySelector('.search-wrap');
  const body = this.document.querySelector('body');
  searchBtn.addEventListener('click', function () {
    dim.style.display = 'block';
    searchWrap.style.display = 'flex';
    body.style.overflow = 'hidden';
  });
  closeBtn.addEventListener('click', function () {
    dim.style.display = 'none';
    searchWrap.style.display = 'none';
    body.style.overflow = 'visible';
  });
});
