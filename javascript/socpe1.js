//Global scope (ConvertFarenheiTocelcius,tempOne,tempTwo)

let convertFarenheitTocelsius = function(fahrenheit){
	let celcius = (fahrenheit -32)*5 /9

	if(celcius <= 0)
		let isFreezing = true
	return celcius
}

let tempOne = convertFarenheitTocelsius(32)
let tempTwo = convertFarenheitTocelsius(68)

console.log(tempOne)
console.log(tempTwo)