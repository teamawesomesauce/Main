function user(name ,daily_dic, total_dic){
	// all users info and data and options 
	// add more
	this.name = name	;
	this.options = new options()		;
	//this.food_progress_information	= new food_progress_information();
	

	// food progress arrays
	// access this values user.daily_dic['key']
this.daily_dic = daily_dic;
		daily_dic['Protein'] 	= 0;
		daily_dic['Veggies'] 	= 0;
		daily_dic['Dairy'] 		= 0;
		daily_dic['Sweets'] 	= 0;
		daily_dic['Grains'] 	= 0;
		daily_dic['Fruits']		= 0;
	this.total_dic = total_dic;
		total_dic['Protein'] 	= 0;
		total_dic['Veggies'] 	= 0;
		total_dic['Dairy'] 		= 0;
		total_dic['Sweets'] 	= 0;
		total_dic['Grains'] 	= 0;
		total_dic['Fruits']		= 0;
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

