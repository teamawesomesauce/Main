
// creat user buy var _name = new user(name)
function user(name){
	// all users info and data and options 
	// add more
	this.name = name 	;
	this.options = new options()	;
	// food progress arrays
	// access this values user.daily_dic['key']
	this.daily_values = this.values_dict()	;
	this.total_values = this.values_dict()	;
	//save_user_data();
}


user.prototype.values_dict = function() {
	// body...// creates a generic object for any values we need
	// refrence var _name = new values_dict()
	return  {'protien': 0 , 'fruits': 0 , 'veggies': 0 ,
	 		'dairy' : 0, 'sweets' : 0, 'grains' : 0}; 
	 	//	return dict;
};

user.prototype.add_daily_to_totals = function() {
	// body...
	// loops by index to add daily values to users totals
	// does this at a specific time of the day and is only called
	// once in the main js file
		for (var key in this.daily_values){
			this.total_values[key] += this.daily_values[key]	;
			this.daily_values[key] = 0	;
		}
		// saves data
		//save_user_data();
};


// nedd a fix,  on commented out code
user.prototype.change_value_by_key = function(array_key) {
	// body...
	// takes button as a paramater synatx - (this)
	// and grabs string from Operation button
	//	adds or subtracts from values then saves them
		// grabs id of the calling button
		//var array_key = call_button.id 	
		// grabs string on the opperation button
		// var str = operation.innerHTML	;
		//var str = document.getElementById('operation').innerHTML
		 var str = "Increment"

		// logic to effect the data that will be saved in array and shown on page
		if (str == "Increment"){
			this.daily_values[array_key]++	;
		}
		else{
			if (this.daily_values[array_key] > 0){
				this.daily_values[array_key]--	;
			}
		}
		// saves data
		//save_user_data();
};
function options(){
	// all users options
	// if we have any
	// use default syntax 
	// ex this.option = datatype
	
	// and create a getter and setter for each value for changes 
	// to be made easier

}







