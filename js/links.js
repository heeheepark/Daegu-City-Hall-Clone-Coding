window.addEventListener("load", function () {
  const swLinks = new Swiper(".sw-links", {
    slidesPerView: "auto",
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".links-next-btn",
      prevEl: ".links-prev-btn",
    },
    breakpoints: {
      1400: {
        slidesPerView: 6, //브라우저가 768보다 클 때
      },
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
