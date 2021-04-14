addEventListener("resize", changePaddingTop);
window.addEventListener("load", changePaddingTop);

function changePaddingTop() {
  let nav = document.getElementById("nav");
  console.log("cargado");
  document.documentElement.style.setProperty("--padding-top-header", `${nav.offsetHeight}px`);
}
