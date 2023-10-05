// function addMore() {
//     let alert = document.getElementById("task");
//     if (task.value === "") {
//         alert("Please insert a value");
//     }
// }



// document.querySelector('#btn').onclick = function () {
//     alert("Please Enter a Task")
// }



const form = document.getElementById("form");
const taskInput = document.getElementById("task");
const list = document.getElementById("list");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const task = taskInput.value;
    taskInput.value = "";


    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    label.textContent = task;
    deleteButton.textContent = "Delete";

    li.appendChild(checkbox).style = "margin-right:2rem; height:1rem;"
    li.appendChild(label);
    li.appendChild(deleteButton).style = "margin-left:2rem; font-size:10px; margin-bottom:10px; padding:0.2rem; border:2px solid #1c1c50; border-radius:10px; width:4rem;"
    list.appendChild(li).style = "text-align:center;"

    checkbox.addEventListener("click", function (event) {
        if (checkbox.checked) {
            label.classList.add("strike");
        } else {
            label.classList.remove("strike");
        }
    });

    deleteButton.addEventListener("click", function (event) {
        list.removeChild(li);
    });

});













// function add() {
//     let name = document.getElementById("name");
//     if (name.value === "") {
//         alert("Please insert a value");
//     }
// }



// function addMore() {

//     document.getElementById('error').innerHTML = "";

//     let name = document.getElementById('name').value;
//     if (name === '') {
//         document.getElementById('error').innerHTML = "Please Enter a value !";
//         alert("Please Enter a Value");
//     } else {
//         let box = document.getElementById('box');

//         let li = document.createElement('li');
//         li.textContent = name;

//         let a = document.createElement('a');
//         a.textContent = "X";
//         a.href = "javascript:void(0)";
//         a.className = "remove";
//         li.appendChild(a);

//         let pos = box.firstChildElementChild;

//         if (pos == null) {
//             box.appendChild(li);
//         } else {
//             box.insertBefore(li, pos);
//         }
//     }

//     document.getElementById('name').value = "";
// }

// let btn = document.querySelector('ul');
// btn.addEventListener('click', function (e) {
//     let box = document.getElementById('box');
//     let li = e.target.parentNode;
//     box.removeChild(li);
// })

