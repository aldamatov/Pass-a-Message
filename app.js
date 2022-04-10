const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const display = document.querySelector('#display');
const error = document.querySelector('#errorMsg')




/* Input Display at Message */
submit.addEventListener('click', function(e){
    
    e.preventDefault();
   
    
    /* Error if not input */
       if (input.value === ""){
        error.style.display = "block";


        /* Timer Function removes Message in 2 seconds */
        setTimeout(function (){
           
           error.style.display = 'none';
        }, 1500 ); 
        display.innerHTML = '';

    }else {
      display.innerHTML = input.value.toLocaleUpperCase();
      input.value = "";
    }

})



