const popup = document.querySelector("#popup");
const popupCloseBtn = popup.querySelector("button");
const agree = document.querySelector("#agree");

function createCookie(name, value, expire) {
  let today = new Date();
  today.setDate(today.getDate() + expire);
  document.cookie = `${name}=${value}; Expires=${today.toString()}`;
}

if (document.cookie.includes("popup=닫기")) {
  popup.close();
} else {
  popup.showModal();
}

popupCloseBtn.addEventListener("click", () => {
  popup.close();
  if (agree.checked) {
    createCookie("popup", "닫기", 1);
  } else {
    createCookie("popup", "닫기", -1);
  }
});
