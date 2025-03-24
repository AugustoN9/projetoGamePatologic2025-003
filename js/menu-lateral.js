var menuItem = document.querySelectorAll(".item-menu");

function selectLink() {
  menuItem.forEach((item) => {
    item.classList.remove("ativo");
  });
  this.classList.add("ativo");
  //if(!ativo)
}

menuItem.forEach((item) => {
  item.addEventListener("click", selectLink);
});

var btnExp = document.querySelector("#btn-exp");
var btnClo = document.querySelector("#btn-close");
var menuSide = document.querySelector(".menu-lateral");
var txtLink = document.querySelectorAll('.txt-link')

btnExp.addEventListener("click", function () {
  menuSide.classList.toggle("expandir");
  btnExp.style.display = 'none';
  btnClo.style.display = 'block';
});

btnClo.addEventListener("click", function () {
    menuSide.classList.remove("expandir");
    btnClo.style.display = 'none';
    btnExp.style.display = 'block';
  });
  