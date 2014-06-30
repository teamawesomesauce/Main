document.write('<script type="text/javascript" src="user_obj.js"></script>');

//return my;

//global variable until we know what to do with it...
currentPage = "#MainPage";

function loadData() {
    // creates the local storage for the user object
    var my_user = JSON.parse(localStorage.getItem('user_key'));

    // console.log(my_user);
    // logic to determine if user has been creates
    if (my_user == null) {
        // grabs info from the html propt and determines
        // name un comment after the html exsists
        //var name = innerHTML.nameprompt();

        //if (my_user.name = null){
        // assigns funny name for the user if the refuse to 
        // use one
        my_user = new user('RICK JAMES');
        //}
        //my_user = new user(name);
    }

    localStorage.setItem('user_key', JSON.stringify(my_user));
    if (date_check()) {
        my_user.add_daily_to_totals();
        localStorage.setItem('date_key', new Date())
    }
    // populates UserName on any page
    populate_user_name(my_user.name);

}

save_user_data = function() {
    // body...
    localStorage.setItem('user_key', JSON.stringify(my_user));
};

// populates user name
function populate_user_name(name) {
    UserName.innerHTML = 'Hello ' + name;
}

// preforms a check on the date, to add to daily 
// or weekly totals
// returns true or false value
function date_check() {
    if (new Date() < JSON.parse(localStorage.getItem('date_key'))) {
        return true;
    } else {
        return false;
    }
}

function countButtonClick(call_button) {
    loadData.my_user.daily_values[call_button.this]++
    theButton.innerHTML = loadData.my_user.daily_values[call_button.this];
}


function changeOperation() {
    var str = operation.innerHTML;
    if (str == "Increment") {
        str = "Decrement"
    } else {
        str = "Increment"
    }
    operation.innerHTML = str;

}

/*****************************************************************
 **********************Page Transition ***************************
 *****************************************************************/
function pageTransition(destPage) {

    var pageArray = ["MainPage", "StatsPage", "SettingsPage", "SearchPage"];

    for (var i = pageArray.length - 1; i >= 0; i--) {
        if (pageArray[i] == destPage) {
            document.querySelector('#' + destPage).style.left = "0%";
            document.querySelector('#' + destPage).style.position = "relative";
        } else {
            document.querySelector('#' + pageArray[i]).style.left = "-600%";
            document.querySelector('#' + pageArray[i]).style.position = "absolute";
        }

    }
}

/******************************************************************
 ***************************Get Facts*******************************
 ******************************************************************/
function getFacts() {

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange =
        function() {
            SearchResults.innerHTML = "";

            var str = "Results: <br> <ul id = %22ResultsList%22>";
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //tipText.innerHTML 
                var facts = JSON.parse(xmlhttp.responseText);
                for (var i = 0; i < facts.hits.length; i++) {
                    str = str + "<li id = %22ResultsListItems%22> " + facts.hits[i].fields.item_name + " " + facts.hits[i].fields.brand_name + " <strong>Calories:</strong> " + facts.hits[i].fields.nf_calories + " Fat: " + facts.hits[i].fields.nf_total_fat + "</li> <br>";
                };

                SearchResults.innerHTML = str + "</ul>";
            }
    }
    xmlhttp.open("GET", "https://api.nutritionix.com/v1_1/search/" + document.querySelector('#SearchInput').value + "?&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,item_Name,brand_Name&appId=d525c778&appKey=e53c464c74d2f64c101476ac6428dcb3", "true");
    xmlhttp.send();
}