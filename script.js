const username = document.querySelector(".name");
const displayName = document.querySelector(".display-name");

username.addEventListener("keyup", () => {
  const inputValue = username.value;
  displayName.innerHTML = inputValue;
});
