const input = document.querySelector('signupp')
const form = document.querySelector('#signupp')
form.addEventListener('submit',function(e){
  e.preventDefault();
  alert("Yay!!! You sign up");
 
  input.value = ' '
});




