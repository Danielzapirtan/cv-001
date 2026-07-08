const date = document.getElementById("date");
date.min = new Date().toISOString().slice(0,10);
const formular = document.getElementById("form");
const aplica = document.getElementById("aplica");
const table = document.getElementById("table");
const getdb = localStorage.getItem("db");
if (getdb) {
  table.innerHTML = JSON.parse(getdb);
  forgetOldRex();
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
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${dateValue}</td><td>${nameValue}</td><td>${descValue}</td><td>${startValue}</td><td>${endValue}</td><td><input type="checkbox"></td>`;
  table.appendChild(tr);
  localStorage.setItem("db", JSON.stringify(table.innerHTML));
  formular.reset();
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

function forgetOldRex() {
  const rex = table.querySelectorAll("tr");
  const toRemove = [];
  rex.forEach((rec) => {
    const tds = rec.querySelectorAll("td");
    const date0 = Math.floor(new Date() / 86400000);
    const date1 = Math.floor(new Date(tds[0].innerHTML) / 86400000);
    if (date1 < date0) {
      toRemove.push(rec);
    }
  });
  toRemove.forEach(rec => rec.remove());
  localStorage.setItem("db", JSON.stringify(table.innerHTML));
}

