const body = document.getElementByTagName("body");

class DB {
	constructor() {
		__db = [];
	}
	addRecord(record) {
		__db.push(record);
	}
	delRecord(record) {
		// TODO
	}
	sort() {
		__db.sort();
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
	constructor(__date, __title, __description, __starttime, __endtime) {
		// TODO
	}
}

class ActivityWidget {
	constructor() {
		// TODO
	}
	load_activity(activity) {
		__activity = activity;
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

