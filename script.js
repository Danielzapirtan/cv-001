class AppWindow {
  constructor() {
    const body = document.querySelector("body");
    const appWindow = document.createElement("div");
    appWindow.classList.add("app-window");
    body.appendChild(appWindow);
    self.datePicker = new DatePicker(appWindow);
    self.timetable = new Timetable(appWindow);
    self.activity = new Activity(appWindow, self.datePicker.value);
  }
}

class DatePicker {
  constructor(widget) {
    self.widget = document.createElement("input");
    self.widget.type = "date";
    self.widget.value = "2026-07-02";
    self.widget.min = "2026-07-02";
    self.widget.max = "2027-12-31";
    widget.appendChild(self.widget);
  }
}
class Timetable {
  constructor(widget) {
    self.widget = document.createElement("div");
    self.widget.width = "95vw";
    self.widget.height = "95vh";
    self.widget.display = "none";
    widget.appendChild(self.widget);
  }
}
class Activity {
  constructor(widget, date) {
    self.widget = document.createElement("form");
    const nameInput = document.createElement("input");
    const descInput = document.createElement("input");
    const startInput = document.createElement("input");
    const endInput = document.createElement("input");
    const submit = document.createElement("input");
    nameInput.required = true;
    descInput.required = false;
    startInput.required = true;
    endInput.required = true;
    nameInput.type = "text";
    descInput.type = "text";
    startInput.type = "time";
    endInput.type = "time";
    submit.type = "submit";
    submit.value = "Aplica";
    self.widget.appendChild(nameInput);
    self.widget.appendChild(descInput);
    self.widget.appendChild(startInput);
    self.widget.appendChild(endInput);
    self.widget.appendChild(submit);
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      self.date = date;
      self.name = nameInput.value;
      self.desc = descInput.value;
      self.start = startInput.value;
      self.end = endInput.value;
    });
    self.widget.display = "block";
    widget.appendChild(self.widget);
  }
}

const myAppWindow = new AppWindow();

