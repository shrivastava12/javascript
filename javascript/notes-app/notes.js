const notes = [{
	title :'my next trip',
	body :'I would like to go to spain'
},{
	title:'Habbits to work on',
	body:'Exercise Eating a bit better'
},{
	title:'Office modification',
	body:'Get a new seat'
}]


document.querySelector('#create-note').addEventListener('click',function(){
	console.log('button is clicked')
})

// document.querySelector('#remove-all').addEventListener('click',function(){
// 	document.querySelectorAll('.note').forEach(function(note){
// 		note.remove()
// 	})

// })

document.querySelector('#search-text').addEventListener('input',function(e){
	console.log(e.target.value)
})

document.querySelector('#filter-by').addEventListener('change',function(e){
	console.log(e.target.value)
})

// //Add a new element

// const newParagraph =  document.createElement('p')
// newParagraph.textContent = 'This is a new element from javascript'
// document.querySelector('body').appendChild(newParagraph)

