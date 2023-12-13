const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const data = document.querySelector('div[data-function="printHere"]')

const ul = document.createElement('ul')

places.forEach(function (place) {
  var li = document.createElement('li')
  li.textContent = place
  ul.appendChild(li)
})
data.appendChild(ul)
document.body.appendChild(data)
