const accordians = document.querySelectorAll(".accordian");
accordians.forEach((accordian) => {
    const icon = accordian.querySelector(".icon");
    const ans= accordian.querySelector(".answer");
    accordian.addEventListener("click", () => {
        icon.classList.toggle("active");
        ans.classList.toggle("active");
    })
})