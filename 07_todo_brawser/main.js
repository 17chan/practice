const buttonList = document.querySelectorAll("button");
const buttonAdd = document.getElementById("btn-add");

// buttonList.forEach((button) => {
//     button.addEventListener("click", () => {
//         const li = button.closest("li");
//         li.classList.add("done");
//     })
// });


buttonAdd.addEventListener("click", () => {
    const input = document.getElementById("new-todo");
    const li = document.createElement("li");
    li.innerText = input.value;

    const doneButton = document.createElement("button");
    doneButton.innerText = "done";
    li.appendChild(doneButton);
    doneButton.addEventListener("click", () => {
        const li = doneButton.closest("li");
        li.classList.add("done");
    })

    const ul = document.querySelector("ul");
    ul.appendChild(li);

    input.value = "";


})