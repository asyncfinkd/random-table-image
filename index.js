const input = document.getElementById("input");
const buttonGenerate = document.getElementById("button[generate]");
const form = document.getElementById("form");
const random = document.getElementById("button[reload]");

buttonGenerate.addEventListener("click", () => {
    // const color = "66, 135, 245";
    if (!input.value || typeof input == "string") {
        alert("Please use number");
    } else {
        // create Element.
        let body = document.getElementsByTagName("body")[0];
        let table = document.createElement("table");
        let tableBody = document.createElement("tbody");
        // create array
        const tableArray = [];
        // push array (input => *length);
        Array.from({ length: input.value*input.value }, (x, i) => {
            tableArray.push(i);
        })
        let firstColor = 66;
        let secondColor = 135;
        let thirdColor = 245;
        tableArray.map(item => {
            if(item == 0 || item % input.value == 0) {
                let row = document.createElement("tr");
                Array.from({length: input.value}, (x, i) => {
                    // create element, create text node
                    let cell = document.createElement("td");
                    secondColor = secondColor + 3;
                    let cellText = document.createTextNode("cell in row" + item + "column" + item);
                    cell.appendChild(cellText);
                    cell.setAttribute(`style`, `background-color: rgb(${firstColor}, ${secondColor}, ${thirdColor})`);
                    row.appendChild(cell);
                })
                // tableBody take appendChild
                tableBody.appendChild(row);
            }
        })
        // hide elements
        input.classList.add("hidden");
        buttonGenerate.classList.add("hidden");
        random.classList.remove("hidden");
        // appendChild (components)
        table.appendChild(tableBody);
        body.appendChild(table);
        table.setAttribute("border", "1");
    }
})

// reload page click reload.
random.addEventListener("click", () => {
    window.location.reload();
})

// Form For Click Enter Call The Function

form.addEventListener("submit", e => {
    e.preventDefault();
})