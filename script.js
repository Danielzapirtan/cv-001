const date = document.getElementById("date");
const form = document.getElementById("form");
const aplica = document.getElementById("aplica");
const timetable = document.getElementById("timetable");

form.addEventListener("submit", function(e) => {
  e.preventDefault();
  const dateValue = date.value;
  const nameValue = document.getElementById("name").value;
  const descValue = document.getElementById("desc").value || "";
  const startValue = document.getElementById("start").value;
  const endValue = document.getElementById("end").value;
  const record = document.createElement("p");
  record.innerHTML = `${dateValue} ${nameValue}
  ${descValue} ${startValue} ${endValue}`;
  timetable.appendChild(record);
});
