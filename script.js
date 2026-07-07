const date = document.getElementById("date");
const formular = document.getElementById("form");
const aplica = document.getElementById("aplica");
const table = document.getElementById("table");
const getdb = localStorage.getItem("db");
if (getdb) {
  table.innerHTML = JSON.parse(getdb);
} else {
  table.innerHTML = ``;
}

formular.addEventListener("submit", function (e) {
  e.preventDefault();
  const dateValue = date.value;
  const nameValue = document.getElementById("name").value;
  const descValue = document.getElementById("desc").value || "";
  const startValue = document.getElementById("start").value;
  const endValue = document.getElementById("end").value;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.checked = false;
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${dateValue}</td><td>${nameValue}</td><td>${descValue}</td><td>${startValue}</td><td>${endValue}</td><td><input type="checkbox"></td>`;
  table.appendChild(tr);
  localStorage.setItem("db", JSON.stringify(table.innerHTML));
});

const filter = document.getElementById("filter");
filter.addEventListener("change", function (e) {
  e.preventDefault();
  const rex = table.querySelectorAll("tr");
  rex.forEach((rec) => {
    const chk = filter.checked;
    if (chk && !rec.innerHTML.includes(date.value)) {
      rec.classList.add("hidden");
    } else {
      rec.classList.remove("hidden");
    }
  });
});

const clearAll = document.getElementById("clearAll");

clearAll.addEventListener("click", function(e) {
  e.preventDefault();
  const rex = table.querySelectorAll("tr");
  const toRemove = [];
  rex.forEach((rec) => {
    const mark1 = rec.querySelector("input[type='checkbox']");
    if (mark1 && mark1.checked || filter.checked) {
      toRemove.push(rec);
    }
  });
  toRemove.forEach(rec => rec.remove()); 
  localStorage.setItem("db", JSON.stringify(table.innerHTML));
});

