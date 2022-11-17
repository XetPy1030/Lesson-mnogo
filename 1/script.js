const parent = document.querySelector(".parent");
parent.addEventListener("click", function (e) {
  let targetItem = e.target;
  console.log(targetItem);
  if (targetItem.closest(".btn")) {
    targetItem.closest(".btn").classList.add("done");
    targetItem.innerHTML = "нажата";
  }
});

const buttonAdd = document.querySelector(".btn__add");
buttonAdd.addEventListener("click", function (a) {
  parent.insertAdjacentHTML(
    "beforeend",
    '<button class="btn">Кнопка (новая)</button>'
  );
});
