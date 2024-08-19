const notesContainer = document.querySelector(".notesContainer");
const btn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");


function showStorage() {
    notesContainer.innerHTML = localStorage.getItem("notes");

}

showStorage();

btn.addEventListener("click", () => {
    updateStorage();
    const inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    const img = document.createElement("img");
    img.src = "./images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
});
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(e => {
            e.onkeyup = function () {


                updateStorage();
            }

        });
    }
})
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

document.addEventListener("keydown",event=>{
    if(event.key==="Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
