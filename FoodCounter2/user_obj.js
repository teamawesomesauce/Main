function user(name ,daily_dic, total_dic){
	// all users info and data and options 
	// add more
	this.name = name	;
	this.options = new options()		;
	//this.food_progress_information	= new food_progress_information();
	

	// food progress arrays
	// access this values user.daily_dic['key']
	this.daily_dic = daily_dic;
		daily_dic['meats'] 		= 1;
		daily_dic['veggies'] 	= 2;
		daily_dic['dairy'] 		= 3;
		daily_dic['sweets'] 	= 4;
		daily_dic['grains'] 	= 5;
	this.total_dic = total_dic;
		total_dic['meats'] 		= 0;
		total_dic['veggies'] 	= 0;
		total_dic['dairy'] 		= 0;
		total_dic['sweets'] 	= 0;
		total_dic['grains'] 	= 0;
	// loops by index to add daily valuse to users totals
	// does this at a specific time of the day and is only called
	// once in the main js file
	this.add_daily_to_totals = add_daily_to_totals;
	function add_daily_to_totals(){
		for (var key in this.daily_dic){
			total_dic[key] += daily_dic[key];
			daily_dic[key] = 0;
		}

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

