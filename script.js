const date = document.getElementById("date");
const formular = document.getElementById("form");
const aplica = document.getElementById("aplica");
const timetable = document.getElementById("timetable");

formular.addEventListener("submit", function(e) {
  e.preventDefault();
  const dateValue = date.value;
  const nameValue = document.getElementById("name").value;
  const descValue = document.getElementById("desc").value || "";
  const startValue = document.getElementById("start").value;
  const endValue = document.getElementById("end").value;
  const inregistrare = document.createElement("p");
  inregistrare.innerHTML = `${dateValue} ${nameValue} \
  ${descValue} ${startValue} ${endValue}`;
  timetable.appendChild(inregistrare);
});
