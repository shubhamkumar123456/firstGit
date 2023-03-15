

let newDiv = document.createElement('div')
newDiv.className = 'hello'
newDiv.id = 'hello1'
newDiv.setAttribute('title', 'hello Div')
var newDivText = document.createTextNode('Hello Word')
// append text to div
newDiv.appendChild(newDivText);
var container= document.querySelector('header .container')
var h1=document.querySelector('header h1');
console.log(newDiv)
container.insertBefore(newDiv,h1)
let container1=document.getElementsByClassName('list-group')[0]
let li=document.getElementsByClassName('list-group-item')
console.log(li[0]);
container1.insertBefore(newDivText,li[0])