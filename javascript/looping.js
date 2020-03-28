const notes = ['Note 1','Note 2','Note 3']


notes[2] = 'This is now the note 3'


notes.forEach(function(item,index){
	console.log(index)
	console.log(item)
})

console.log(notes.length)

console.log(notes)

// 1. the first item
// 2. the second item

