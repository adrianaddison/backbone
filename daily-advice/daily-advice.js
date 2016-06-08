var date = new Date(); 	//used to check values (year, mon, day, hour)
var day = date.getDay();	//day variable
var mon = date.getMonth();	//month variable
var hour = date.getHours(); //hour variable

console.log('Hello! Here is some advice for you today:');

//What time of day is it?
if (hour > 6 &&  hour <= 12) { 			//if the hour lies between 6 am and Noon
	console.log('Good Morning!');
} else if (hour > 12 && hour <= 17) { 	//if the hour lies between Noon and 5pm
	console.log('Good Afternoon!');
} else {								//else it must be Night
	console.log('Good evening!');
}

//What day of the week is it?
if (day < 5) {								//if the day of the week is less than Friday, then it is a weekday
	console.log('Ugh. It\'s a weekday.');
} else if (day === 5) {						//if the day of the week is equal to 5, then it is Friday
	console.log('Fun fun fun fun.');  
} else {
	console.log('Hooray! It\'s the weekend!'); //else the day of week is either Saturday or Sunday
}

//What season and what time of day is it?
//Winter 
if (mon >= 0 && mon <= 2) { 						//if the month lies between January and March
	if (hour > 6 && hour <= 12) { 					//if the hour lies between 6 am and Noon
		console.log('Don\'t forget your coat.');
	} else {										//else it is a general winter statement
		console.log('It\'s cold outside, dress warm!');
	}
}
//Spring
if (mon >= 3 && mon <= 4) { 			//if the month lies between April and May
	if (hour > 6 && hour <= 12) { 		//if the hour lies between 6am and Noon
		console.log('Don\'t forget to take your allergy medicine.');
	} else {							//else it is a general spring statement
		console.log('Spring is here!');
	}
}
//Summer
if (mon >= 5 && mon <= 8) { 		//if the month lies between May and August
	if (hour > 6 && hour <= 12) {  //if the hour lies between 6am and Noon
		console.log('Don\'t forget your sunglasses - before leaving the house!'); 
	} else {        				//else it is a general summer statement
		console.log('Summers in the south are hot.');
	}
}
//Fall
if (mon >= 9 && mon <= 11) { 				//if the month lies between September and December
	if (hour > 6 && hour <= 12) {			//if the hour lies between 6am and Noon
		console.log('Take a light jacket!');
	} else {								//else it is a general fall statement
		console.log('The leaves are falling!');
	}
}