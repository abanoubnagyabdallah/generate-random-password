const random_Input = document.querySelector("input");
const copyButton = document.querySelector(".input-group-text i");
const generateButton = document.querySelector(".btn");
let inputGroup = document.querySelector("span");
let copied = document.querySelector(".copied");

const characters = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "123456789";
const specialChars = "!@#$%^&*()|";
const all = [...characters, ...numbers, ...specialChars];

generateButton.addEventListener("click", () => {
  let password = ""; // password=""
  while (all.length > password.length) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  random_Input.value = password;
});

copyButton.addEventListener("click", () => {
  let copyValue = random_Input.value;
  navigator.clipboard.writeText(copyValue);
  inputGroup.innerHTML = '<i class="fas fa-check"></i>';
  random_Input.value = "";
  setTimeout(() => {
    copied.style.display = "block";
  }, 500);
  setTimeout(() => {
    copied.style.display = "none";
    inputGroup.innerHTML='<i class="fas fa-clone"></i>'

  }, 5000);
});





