window.addEventListener("load", function (event) {
  const serviceMenuBottom = this.document.querySelector(".service-menu-bottom");
  console.log(serviceMenuBottom);

  const swService = new Swiper(".sw-service", {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".service-bt-next",
      prevEl: ".service-bt-prev",
    },
  });

  const pauseBtn = this.document.querySelector(".service-btns .pause-btn");
  let isPlay = "play";
  pauseBtn.onclick = function () {
    const isPlaying = isPlay === "play";
    swService.autoplay[isPlaying ? "stop" : "start"]();
    isPlay = isPlaying ? "stop" : "play";
    this.classList.toggle("service-play-btn");
  };
});
