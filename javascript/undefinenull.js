//Undefine for variable
let name 
name = 'jen'

if(name == undefined){
	console.log("Please provide a name")
}
else{
	console.log(name)
}

//Undefine for function arguments
//Undefine as a function return default value

let square = function(num){
	console.log(num)
}

let result = square()
console.log(result)


// nUll as asigned value
let age = 27
age = undefined
console.log(age)