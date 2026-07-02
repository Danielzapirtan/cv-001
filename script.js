class ActivityWidget { }
class AppWindow {
  constructor init() {
    const body = document.getElementByTagName("body");
    const appWindow = document.createElement("div");
    appWindow.classList.add("app-window");
    body.appendChild(appWindow);
    appWindow.innerHTML = `Hello cv-001`;
  }
}

class DatePickerWidget { }
class MainWidget { }
class TimetableWidget { }

const myAppWindow = new AppWindow();
