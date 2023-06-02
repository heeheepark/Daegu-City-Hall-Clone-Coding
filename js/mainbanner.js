window.addEventListener("load", function () {
  let swBannerLeft;
  let swBannerRight;
  swBannerLeft = new Swiper(".sw-main-left", {
    // Optional parameters
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 34,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".count",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main-next-btn",
      prevEl: ".main-prev-btn",
    },
  });

  swBannerRight = new Swiper(".sw-main-img", {
    // Optional parameters
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".count",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main-next-btn",
      prevEl: ".main-prev-btn",
    },
  });

  new Swiper(".sw-weather", {
    // Optional parameters
    slidesPerView: 1,
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  const pauseBtn = this.document.querySelector(".main-pause-btn");
  let isPlay = "play";
  pauseBtn.onclick = function () {
    const isPlaying = isPlay === "play";
    swBannerLeft.autoplay[isPlaying ? "stop" : "start"]();
    swBannerRight.autoplay[isPlaying ? "stop" : "start"]();
    isPlay = isPlaying ? "stop" : "play";
    this.classList.toggle("main-play-btn");
  };
});
