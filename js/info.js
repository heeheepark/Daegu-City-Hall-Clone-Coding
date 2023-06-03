window.addEventListener("load", function () {
  const swInfoWrap = this.document.querySelector(".sw-info .swiper-wrapper");
  const getData = async function () {
    try {
      let res = await fetch("../data/infodata.json");
      let result = await res.json();
      makeSlide(result);
    } catch (err) {
      console.log(err);
    }
  };

  function makeSlide(_data) {
    let html = ``;
    const infodata = _data.info;
    infodata.forEach((item, index) => {
      const data = infodata[index];
      let temp = `
      <div class="swiper-slide">
        <a href="${data.link}" class="info-img">
          <img
            src="images/${data.image}"
            alt="${data.alt}"
          />
        </a>
      </div>
    `;
      html += temp;
    });
    swInfoWrap.innerHTML = html;
  }

  const swInfo = new Swiper(".sw-info", {
    // Optional parameters
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 34,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".pages",
      type: "fraction",
    },
    navigation: {
      nextEl: ".info-next-btn",
      prevEl: ".info-prev-btn",
    },
  });

  const pauseBtn = this.document.querySelector(".info-right .pause-btn");
  let isPlay = "play";
  pauseBtn.onclick = function () {
    const isPlaying = isPlay === "play";
    swInfo.autoplay[isPlaying ? "stop" : "start"]();
    isPlay = isPlaying ? "stop" : "play";
    this.classList.toggle("info-play-btn");
  };

  getData();
});
