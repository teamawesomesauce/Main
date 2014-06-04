
function bodyLoad()
{
	var myVar = localStorage.getItem('myKey');
	if (myVar == null)
	{
		myVar = 0;
	}
	fruits.innerHTML = myVar;

	var d = new Date();
	var n = d.getHours();
	if (d.getHours() == 23)
	{
		fruits.innerHTML = "0";
	}
}

function countButtonClick(theButton)
{
	var i = parseInt(theButton.innerHTML);
	var str = operation.innerHTML;
	
	if (str == "Increment"){
		i++;
	}
	else{
		i--;
	}

	localStorage.setItem('myKey', i);
	theButton.innerHTML = i;
}

function changeOperation()
{
	var str = operation.innerHTML;
	if (str == "Increment"){
		str = "Decrement"
	}

	else {
		str = "Increment"
	}
	operation.innerHTML = str;
}

function clearData()
{
	localStorage.clear();
	var i =0;
	fruits.innerHTML = 0;
	veggies.innnerHTML = 0;
}

