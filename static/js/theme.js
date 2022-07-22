window.onload = () => {
  let theme = localStorage.getItem("theme");
  if (theme === null) {
    localStorage.setItem("theme", "light");
    theme = "light";
  }

  const switchTheme = document.querySelector("#switch-theme");
  switchTheme.addEventListener("change", (e) => {
    console.log(e);
  });
};
