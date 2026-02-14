const mainContainer = document.getElementById('main-container')


const placesSection = document.createElement('section')

const h1 = document.createElement('h1')
h1.innerText= 'girls i want to date'
placesSection.appendChild(h1)
const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'Dur-e-Fishan Saleem'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'Purnima'
ul.appendChild(li2)


placesSection.appendChild(ul)


mainContainer.appendChild(placesSection)




const bookSection = document.createElement('section')

bookSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
<li>Physics</li>
<li>chemistry</li>

</ul>
`

mainContainer.appendChild(bookSection)




