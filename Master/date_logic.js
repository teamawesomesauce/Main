// preforms a check on the date, to add to daily 
// or weekly totals
// returns true or false value
function date_check(){
	if (new Date() < JSON.parse(localStorage.getItem('date_key'))) {
		return true;
	}else {return false;}
}

// sends the day to the place in html
function display_day(){
	var d = new Date()
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	date.innerHtml = days[d.getDay()];
}

var date_save = {
	this.today = new date();
	this.last_login = this.last_log();
};

date.prototype.last_log = function() {
	var last_log = JSON.parse(localStorage.getItem('date_key'));
	if (!last_log){
		var this.last_log = this.today;
	}
	return last_log;
};