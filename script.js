const date = document.getElementById("date");
const formular = document.getElementById("form");
const aplica = document.getElementById("aplica");
const timetable = document.getElementById("timetable");
const getdb = localStorage.getItem("db");
if (getdb) {
  timetable.innerHTML = JSON.parse(getdb);
  const rex = timetable.querySelectorAll("p");
  rex.forEach((rec) => {
    const date1 = rec.innerHTML.slice(0, 10);
    if (Math.floor(new Date(date1) / 86400000) < Math.floor(new Date() / 86400000)) {
      rex.removeChild(rec);
    }
  });
} else {
  timetable.innerHTML = ``;
}

formular.addEventListener("submit", function (e) {
  e.preventDefault();
  const dateValue = date.value;
  const nameValue = document.getElementById("name").value;
  const descValue = document.getElementById("desc").value || "";
  const startValue = document.getElementById("start").value;
  const endValue = document.getElementById("end").value;
  const inregistrare = document.createElement("p");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.checked = false;
  inregistrare.innerHTML = `${dateValue} ${nameValue} \
  ${descValue} ${startValue} ${endValue}`;
  inregistrare.appendChild(checkbox);
  timetable.appendChild(inregistrare);
  localStorage.setItem("db", JSON.stringify(timetable.innerHTML));
});

const filter = document.getElementById("filter");
filter.addEventListener("change", function (e) {
  e.preventDefault();
  const rex = timetable.querySelectorAll("p");
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
  const rex = timetable.querySelectorAll("p");
  const toRemove = [];
  rex.forEach((rec) => {
    const mark1 = rec.querySelector("input[type='checkbox']");
    if (mark1 && mark1.checked || filter.checked) {
      toRemove.push(rec);
    }
  });
  toRemove.forEach(rec => rec.remove()); // simpler than timetable.removeChild(rec)
  localStorage.setItem("db", JSON.stringify(timetable.innerHTML));
});
