function bodyLoad() {
    var myVar = localStorage.getItem('myKey');
    if (myVar == null) {
        myVar = 0;
    }
    fruits.innerHTML = myVar;

    var d = new Date();
    var n = d.getHours();
    if (d.getHours() == 23) {
        fruits.innerHTML = "0";
    }
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var today = new Date()
    time.innerHTML = weekday[today.getDay()] + " " + today.toJSON().slice(0, 10);
}

function countButtonClick(theButton) {
    var i = parseInt(theButton.innerHTML);
    var str = operation.innerHTML;

    if (str == "Increment") {
        i++;
    } else {
        i--;
    }

    localStorage.setItem('myKey', i);
    theButton.innerHTML = i;
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

function clearData() {
    localStorage.clear();
    var i = 0;
    fruits.innerHTML = 0;
    veggies.innnerHTML = 0;
}

function goToSearch() {
    document.querySelector("#mainPage").className = "moveLeft";
    document.querySelector("#SearchPage").className = "moveLeft";
}

var xmlhttp;

function getTip() {

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange =
        function() {
            searchResults.innerHTML = "";

            var str = "Results: <br> <ul>";
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //tipText.innerHTML 
                var facts = JSON.parse(xmlhttp.responseText);
                for (var i = 0; i < facts.hits.length; i++) {
                    str = str + "<li> " + facts.hits[i].fields.item_name + " " + facts.hits[i].fields.brand_name + " <strong>Calories:</strong> " + facts.hits[i].fields.nf_calories + " Fat: " + facts.hits[i].fields.nf_total_fat + "</li> <br>";
                };

                searchResults.innerHTML = str + "</ul>";
                //btoa()
            }
    }
    xmlhttp.open("GET", "https://api.nutritionix.com/v1_1/search/" + document.querySelector('#tipText').value + "?&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,item_Name,brand_Name&appId=d525c778&appKey=e53c464c74d2f64c101476ac6428dcb3", "true");
    xmlhttp.send();
}