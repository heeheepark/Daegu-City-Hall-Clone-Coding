window.addEventListener("load", function (event) {
  const communityList = this.document.querySelector(".community-list");

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      let data = JSON.parse(req.response);
      makeCommunityHtml(data);
    }
  });
  xhr.open("GET", "data/communitydata.json");
  xhr.send();

  let jsonData;

  function makeCommunityHtml(_data) {
    let html = ``;
    jsonData = _data.notice.list;
    let obj;
    for (let i = 0; i < jsonData.length; i++) {
      obj = jsonData[i];
      let temp = `
        <li>
          <a href="${obj.link}">
            <div class="list-top">
              <span class="list-date">${obj.date}</span>
              <span class="list-department">${obj.department}</span>
            </div>
            <div class="list-mid">
              <p class="list-title">${obj.title}</p>
            </div>
            <div class="list-bottom">
              <p class="list-contents">${obj.contents}</p>
            </div>
          </a>
        </li>
        `;
      html += temp;
    }
    communityList.innerHTML = html;
  }
});
