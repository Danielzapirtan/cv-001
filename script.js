const date = document.getElementById("date");
const form = document.getElementById("form");
const aplica = document.getElememtById("aplica");
const timetable = document.getElementById("timetable");

aplica.addEventListener("click", (e) => {
  e.preventDefault();
  const dateValue = date.value;
  const nameValue = document.getElementById("name").value;
  const descValue = document.getElementById("desc").value || "";
  const startValue = document.getElementById("start").value;
  const endValue = document.getElementById("end").value;
  const record = document.createElement("div");
  record.innerHTML = `${dateValue} ${nameValue}
  ${descValue} ${startValue} ${endValue}`;
  timetable.appendChild(record);
});
