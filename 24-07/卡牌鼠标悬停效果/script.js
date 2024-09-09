const cards = document.querySelectorAll('.card')
const background = document.querySelector('.background')

cards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    const rect = card.getBoundingClientRect()
    x = rect.left + window.scrollX + rect.width / 2;
    y = rect.top + window.scrollY + rect.height / 2;

    background.style.width = rect.width + "px";
    background.style.height = rect.height + "px";
    background.style.opacity = 1;
    background.style.left = rect.left + window.scrollX + "px";
    background.style.top = rect.top + window.scrollY + "px";
  });

  card.addEventListener("mouseleave", function () {
    background.style.opacity = 0;
    background.style.width = "0px";
    background.style.height = "0px";
  });

});
