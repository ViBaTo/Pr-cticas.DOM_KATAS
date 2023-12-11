//! 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const show = document.querySelector('.showme')
console.log(show.innerHTML)
//! 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillado = document.querySelector('h1')
console.log(pillado.innerHTML)
//! 1.3 Usa querySelector para mostrar por consola todos los p
var s_p = document.querySelectorAll('p')
s_p.forEach(function (p) {
  console.log(p.innerHTML)
})
//! 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
var s_pokemon = document.querySelectorAll('.pokemon')
s_pokemon.forEach(function (pokemon) {
  console.log(pokemon.innerHTML)
})
//! 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
var test = document.querySelectorAll('[data-function]')
test.forEach(function (testMe) {
  console.log(testMe.innerHTML)
})
//! 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe". */
var tercero = document.querySelectorAll('[data-function="testMe"]')
console.log(tercero[2].innerHTML)
