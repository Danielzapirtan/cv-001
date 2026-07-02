const body = document.getElementByTagName("body");

class DB {
	constructor() {
		self._db = [];
	}
	addRecord(record) {
		self._db.push(record);
	}
	delRecord(record) {
		// TODO
	}
	sort() {
		self._db.sort();
	}
	filterByDate(date) {
		// TODO
	}
}

class Timetable {
	constructor(db, date) {
		db.filterByDate(date);
	}
	display() {
		// TODO
	}
}

class Activity {
	constructor(date, title, description, starttime, endtime) {
		// TODO
	}
}

class ActivityWidget {
	constructor() {
		// TODO
	}
	load_activity(activity) {
		self._activity = activity;
	}
	update() {
		// TODO
	}
}

class DatePickerWidget {
	constructor() {
		// TODO
	}
	pick() {
		// TODO
	}
}

class ApplicationWindow {
	constructor() {
		// TODO
	}
	update() {
		// TODO
	}
}

