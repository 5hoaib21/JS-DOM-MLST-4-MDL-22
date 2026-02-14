// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(sections);
for(const section of sections)
{
  // console.log(section);
  section.style.backgroundColor = 'lightblue'
  section.style.border = '3px solid green'
  section.style.marginBottom = '5px'
  section.style.borderRadius = '15px'
  section.style.padding = '15px'

}
//
//
//
//
///
////
////
//////
/////////



const newChild = document.createElement("li");
newChild.innerText = 'new born baby footballer here'


const playersList = document.getElementById('player-list')

playersList.appendChild(newChild)