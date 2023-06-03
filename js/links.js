window.addEventListener("load", function () {
  const swLinks = new Swiper(".sw-links", {
    slidesPerView: 6,
    spaceBetween: 0,
    slidesPerGroup: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".links-next-btn",
      prevEl: ".links-prev-btn",
    },
  });

  const pauseBtn = this.document.querySelector(".links .btns .pause-btn");
  let isPlay = "play";
  pauseBtn.onclick = function () {
    const isPlaying = isPlay === "play";
    swLinks.autoplay[isPlaying ? "stop" : "start"]();
    isPlay = isPlaying ? "stop" : "play";
    this.classList.toggle("links-play-btn");
  };
});
