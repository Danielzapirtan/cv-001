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

function crudActivity() { }
function handleLocalStorage() { }
function initAll() { }
function initDB() { }
function pickDate() { }
function populateElements() { }

