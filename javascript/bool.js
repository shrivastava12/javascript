// === is the equality operator
// !== not equal opera

let isAccountLocked = false
let UserRole = 'admin'

if(isAccountLocked){
	console.log("Is account locked")
}
else if(UserRole=== 'admin'){
	console.log("Welcome admin");
}
else{
	console.log("Welcome")
}
let temp = 45

if(temp<45)
{
	console.log("It is freezing outside")
}
else if(temp == 45)
{
	console.log("It is preety good to go");
}
else
{
	console.log("It is hot outside")
}