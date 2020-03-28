alert("Hey you are here")
// const myelement = document.querySelector('p')
// myelement.textContent = 'I am being chang

const element = document.querySelectorAll('p')
element.forEach(function(p){
    p.textContent = 'I am change using js loop'
})

const mynewpara = document.createElement('p')
mynewpara.textContent = ' i was added via js'

document.querySelector('body').appendChild(mynewpara)

document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent = 'i was clicked';
})

// track input form

document.querySelector('#myform').addEventListener('input',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value)
    console.log(event.target.realname.value)
})