//! 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const myDiv = document.createElement('div')
myDiv.textContent = 'He añadido un div mediante js'
document.body.appendChild(myDiv)
//! 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const myP = document.createElement('div' > 'p')
myP.textContent = 'He añadido un p dentro de un div mediante js'
document.body.appendChild(myP)
//! 1.3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const Div6 = document.createElement('div')
for (let index = 1; index <= 6; index++) {
  const nP = document.createElement('p')
  nP.textContent = 'Esto es un nuevo p'
  Div6.appendChild(nP)
}
document.body.appendChild(Div6)

//! 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const myNP = document.createElement('div' > 'p')
myNP.textContent = 'Soy dinámico'
document.body.appendChild(myNP)
//! 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

//! 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

//! 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//! 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

//! 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
