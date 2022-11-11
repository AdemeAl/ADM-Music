document.querySelector('#myFileInput').addEventListener('change', function () {
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    localStorage.setItem('recent-image', reader.result);
  })
  reader.readAsDataURL(this.files[0]);
});

document.addEventListener('DOMContentLoaded', () => {
  const recentImageDataUrl = localStorage.getItem('recent-image');

  if (recentImageDataUrl) {
    document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl);
  }
});










function darkmode() {
  var SetTheme = document.body;
  SetTheme.classList.toggle("dark-mode")
  var theme;
  if (SetTheme.classList.contains("dark-mode")) {
    console.log("Dark mode");
    theme = "DARK";
  } else {
    console.log("Light mode");
    theme = "LIGHT";
  }
  // save to localStorage
  localStorage.setItem("PageTheme", JSON.stringify(theme));
  // ensure you convert to JSON like i have done -----JSON.stringify(theme)


}


