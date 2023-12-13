//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
var button = document.createElement('button')
button.id = 'btnToClick'
button.textContent = 'Click here!'
document.body.appendChild(button)

button.addEventListener('click', function () {
  console.log('Clicked')
})
//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector('.focus')
input.addEventListener('focus', function () {
  console.log('input value')
})
//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector('.value')
inputValue.addEventListener('input', function () {
  console.log('input value', inputValue.value)
})
