const body = document.getElementByTagName("body");

class DB {
	init() {
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
	init(db, date) {
		db.filterByDate(date);
	}
	display() {
		// TODO
	}
}

class Activity {
	init(__date, __title, __description, __starttime, __endtime) {
		// TODO
	}
}

class ActivityWidget {
	init() {
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
	init() {
		// TODO
	}
	pick() {
		// TODO
	}
}

class ApplicationWindow {
	init() {
		// TODO
	}
	update() {
		// TODO
	}
}

