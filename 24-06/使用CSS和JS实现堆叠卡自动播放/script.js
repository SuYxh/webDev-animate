const stack = document.querySelector(".stack");

let autoplayInterval = setInterval(moveCard, 4000);

function moveCard() {
  const lastCard = stack.firstElementChild;
  lastCard.classList.add("swap");

  setTimeout(() => {
    lastCard.classList.remove("swap");
    stack.appendChild(lastCard);
  }, 1200);
}

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.firstElementChild) {
    card.classList.add("swap");

    setTimeout(() => {
      card.classList.remove("swap");
      stack.appendChild(card);
    }, 1200);
  }
});

stack.addEventListener("mouseover", function (e) {
  clearInterval(autoplayInterval)
})

stack.addEventListener("mouseout", function (e) {
  autoplayInterval = setInterval(moveCard, 4000);
})
