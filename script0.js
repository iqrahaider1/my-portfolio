const btn = document.getElementById("darkBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (btn.innerText.includes("Dark")) {
    btn.innerText = " Light Mode";
  } else {
    btn.innerText = " Dark Mode";
  }
});
