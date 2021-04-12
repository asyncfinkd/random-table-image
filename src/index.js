const input = document.getElementById("input");
const buttonGenerate = document.getElementById("button[generate]");
const form = document.getElementById("form");
const random = document.getElementById("button[reload]");
const randomImage = document.getElementById("button[generate-image]");

// Image Generator

randomImage.addEventListener("click", () => {
  if (!input.value) {
    alert("Please use number");
  } else {
    input.classList.add("hidden");
    buttonGenerate.classList.add("hidden");
    randomImage.classList.add("hidden");
    random.classList.remove("hidden");
    const table = document.createElement("table");
    let body = document.getElementsByTagName("body")[0];

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    spiralArray = function (edge) {
      var arr = Array(edge),
        x = 0,
        y = edge,
        total = edge * edge--,
        dx = 1,
        dy = 0,
        i = 0,
        j = 0;
      while (y) arr[--y] = [];
      while (i < total) {
        arr[y][x] = i++;
        x += dx;
        y += dy;
        if (++j == edge) {
          if (dy < 0) {
            x++;
            y++;
            edge -= 2;
          }
          j = dx;
          dx = -dy;
          dy = j;
          j = 0;
        }
      }
      return arr;
    };
    arr = spiralArray((edge = input.value));
    arr.map((item1, i) => {
      let row = document.createElement("tr");

      item1.map((item, ii) => {
        console.log(item);
        let cell = document.createElement("td");
        let img = document.createElement("img");
        let cellText = document.createTextNode(item);
        cell.appendChild(cellText);
        cell.appendChild(img);
        img.setAttribute(
          `src`,
          `https://source.unsplash.com/collection/${item}`
        );
        img.setAttribute(`style`, `width: 120px; height: 120px; `);
        row.appendChild(cell);
      });

      tblBody.appendChild(row);
    });
    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    tbl.setAttribute("border", "1");
  }
});

buttonGenerate.addEventListener("click", () => {
  if (!input.value || typeof input == "string") {
    alert("Please use number");
  } else {
    input.classList.add("hidden");
    buttonGenerate.classList.add("hidden");
    randomImage.classList.add("hidden");
    random.classList.remove("hidden");
    // create Element.
    const table = document.createElement("table");
    let body = document.getElementsByTagName("body")[0];
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    spiralArray = function (edge) {
      var arr = Array(edge),
        x = 0,
        y = edge,
        total = edge * edge--,
        dx = 1,
        dy = 0,
        i = 0,
        j = 0;
      while (y) arr[--y] = [];
      while (i < total) {
        arr[y][x] = i++;
        x += dx;
        y += dy;
        if (++j == edge) {
          if (dy < 0) {
            x++;
            y++;
            edge -= 2;
          }
          j = dx;
          dx = -dy;
          dy = j;
          j = 0;
        }
      }
      return arr;
    };
    arr = spiralArray((edge = input.value));
    arr.map((item1, i) => {
      let row = document.createElement("tr");

      item1.map((item, ii) => {
        console.log(item);
        let cell = document.createElement("td");
        let img = document.createElement("img");
        let cellText = document.createTextNode(item);
        cell.appendChild(cellText);
        cell.appendChild(img);
        cell.setAttribute(
          `style`,
          `background-color: rgb(${item + item + 10}, ${item + item + 40}, ${
            item + item + 40
          })`
        );

        // img.setAttribute(`src`, `https://source.unsplash.com/collection/${item}`)
        // img.setAttribute(`style`, `width: 120px; height: 120px; `)
        row.appendChild(cell);
      });

      tblBody.appendChild(row);
    });
    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    tbl.setAttribute("border", "1");
  }
});

// reload page click reload.
random.addEventListener("click", () => {
  window.location.reload();
});
