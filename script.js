let linkText =  document.querySelector(".links");

linkText.onclick = changeText;

function changeText() {
  linkText.innerText = "Changed";
}
