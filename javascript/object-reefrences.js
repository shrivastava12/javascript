let myAccount = {
	name:'mithu',
	expences:0,
	income:0,
}


let addExpense = function(account,amount){
	
	account.expences = account.expences + amount
	
}

let addIncome = function(account,income){
	account.income = account.income + income
}

let resetAccount = function(account){
	account.expences = 0
	account.income = 0 
}

let getAccountSummary = function(account){
	let balance = account.income - account.expences
	return `Account for ${account.name} has $${balance}, $${}`
}
//addIncome 
//resetAccount
//getAccountSummary
//Account for mithu has 900,1000 in income .100 in expenses
//add income
//add expense
//getAccountSummary
//resetAccount
//getAccountSummary
