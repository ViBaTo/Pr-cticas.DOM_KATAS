//! 1.1 Basándote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
countries.forEach(function (country) {
  var li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
})
document.body.appendChild(ul)
//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeMe = document.querySelector('.fn-remove-me')
removeMe.remove()
//! 1.3 Utiliza el array para crear dinámicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const select = document.querySelector('printHere')
const ul3 = document.createElement('ul')
cars.forEach(function (car) {
  var li3 = document.createElement('li')
  li3.textContent = car
  ul3.appendChild(li3)
})
document.body.appendChild(ul3)

//! 1.4 Crea dinámicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
//? Aquí no sé lo que tengo mal
/* countries2.forEach(function (country) {
  var div = document.createElement('div')
  div.forEach(function (e) {
    var h4 = document.createElement('h4')
    h4.textContent = country.title
    div.appendChild(h4)
    var image = document.createElement('image')
    image.src = country.imgUrl
    div.appendChild(image)
  })
  document.body.appendChild(div)
}) */
/* countries2.forEach(function (country) {
  var div = document.createElement('div')
  var h4 = document.createElement('h4')
  var img = document.createElement('img')

  h4.textContent = country.title
  img.src = country.imgUrl

  div.appendChild(h4)
  div.appendChild(img)

  document.body.appendChild(div)
}) */

//! 1.5 Basándote en el ejercicio anterior. Crea un botón que elimine el último  elemento de la serie de divs.
const button = document.createElement('button')
button.textContent = 'Remove'

button.addEventListener('click', function () {
  var divs = document.querySelectorAll('div')
  var lastDiv = divs[divs.length - 1]
  lastDiv.parentNode.removeChild(lastDiv)
})
document.body.appendChild(button)
//! 1.6 Basándote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

countries2.forEach(function (country) {
  var div = document.createElement('div')
  var h4 = document.createElement('h4')
  var img = document.createElement('img')
  var button = document.createElement('button')

  h4.textContent = country.title
  img.src = country.imgUrl
  button.textContent = 'Remove'

  button.addEventListener('click', function () {
    div.remove()
  })

  div.appendChild(h4)
  div.appendChild(img)
  div.appendChild(button)

  document.body.appendChild(div)
})
