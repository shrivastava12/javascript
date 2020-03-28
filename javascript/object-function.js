let myBook = {
	title :'1989',
	author :'Mithu',
	pageCount :324
}

let otherBook = {
	title :'A people history',
	author :'Howars',
	pageCount:953
}

let getSummery = function(book)
{
	return {
		summery:`${book.title} by ${book.author}`,
		pageCountSummery:`${book.title} is ${book.pageCount} page Long`
	}
	
}

let bookSummery = getSummery(myBook)
let otherBookSummery = getSummery(otherBook)

console.log(bookSummery.pageCountSummery)

let convertFarenheit = function(farenheit){
	return{

	farenheit:farenheit,
	kelvin:(farenheit+459.67)*(5/9),
	celcius:(farenheit-32)*(5/9)
}
}

let temps = convertFarenheit(74)
console.log(temps)


