alert('connected')

function myvalidation(){
    let myvalue = document.getElementById('myform').value;
    if(isNaN(myvalue) || myvalidation < 1 || myvalue > 20){
        console.log("Not a valid input")
    } else{
        console.log("Cool")
    }
}


// form valid

document.querySelector('.myform').addEventListener('submit',(event)=>{
    
})
