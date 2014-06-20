
// creat user buy var _name = new user(name)
function user(name){
	// all users info and data and options 
	// add more
	this.name = name 	;
	this.options = new options()	;
	// food progress arrays
	// access this values user.daily_dic['key']
	this.daily_values = new values_dict()	;
	this.total_values = new values_dict()	;
	// loops by index to add daily values to users totals
	// does this at a specific time of the day and is only called
	// once in the main js file
	this.add_daily_to_totals = add_daily_to_totals;
	function add_daily_to_totals(){
		for (var key in this.daily_values){
			total_values[key] += daily_values[key]	;
			daily_values[key] = 0	;
		}

	}
	// creates a generic object for any values we need
	// refrence var _name = new values_dict()
	this.values_dict = values_dict
	function values_dict(){
		this.protien 	= 0	;
		this.veggies 	= 0	;
		this.dairy 		= 0	;
		this.sweets 	= 0	;
		this.grains 	= 0	;
		this.fruits 	= 0	;
	}
	


	// takes button as a paramater synatx - (this)
	// and grabs string from incremant button
	//	adds or subtracts from values then saves them
	this.change_values_by_key = change_values_by_key
	function change_values_by_key(array_key){
		// grabs id of the calling button
		var array_key = call_button.id 	
		// grabs string on the opperation button
		var str = operation.innerHTML	;

		// logic to effect the data that will be saved in array and shown on page
		if (str == "Increment"){
			daily_values[array_key]++	;
		}
		else{
			if (daily_values[array_key] > 0){
				daily_values[array_key]--	;
			}
		}
		// add local storge stuff...

	}
	

}

function options(){
	// all users options
	// if we have any
	// use default syntax 
	// ex this.option = datatype
	
	// and create a getter and setter for each value for changes 
	// to be made easier

}







