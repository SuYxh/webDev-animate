const btn = document.querySelector("#btn");
const sidebar = document.querySelector(".sidebar");
const searchBtn = document.querySelector(".bx-search");
const listItems = document.querySelectorAll(".list li");


btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
})

searchBtn.addEventListener("click", () => {
  console.log(11)
  sidebar.classList.toggle("active");
})


listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((i) => {
      i.classList.remove('active')
    })
    item.classList.add('active')
  })
})
