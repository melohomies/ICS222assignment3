const name = document.getElementById('name')
const number = document.getElementById('number')
const email = document.getElementById('email')
const enquiries = document.getElementById('enquiries')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) =>{
    let messages = []
    if (Name.value === ''|| Name.value == null){
        messages.push('Name is required')

    }
    if(number. value .length == 10){
        messages.push('Number should be 10 digits')
    }
    if(email.value.length >= 20) {
       messages.push('Number should be 20 or more characters')    
    }
    if(messages.length> 0) {
        e.preventDefault()
        errorElement.innerText = messages .join(',')
    }

    
    } 
    
)