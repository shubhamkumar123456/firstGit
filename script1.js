// console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title="123"
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent="Hello"

// console.log(document.forms[0]);
// console.log(document.links);

// Get Element by ID
// let headerTitle=document.getElementById('header-title')
// let header=document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.innerText="Goodbye"
// console.log(headerTitle.textContent)
// headerTitle.innerHTML=`<h3>Hello</h3>`;
// headerTitle.style.borderBottom="solid 3px black"
// header.style.borderBottom="solid 3px black"

// Get element by class NAme
// var items= document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1]);
// items[1].textContent="hello2"
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor="yellow";

// items.style.backgroundColor="grey"
// for(let i=0 ; i<items.length; i++){
//     items[i].style.backgroundColor="grey"
// }

// getELement by tagName
// var li= document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1]);
// li[1].textContent="hello2"
// li[1].style.fontWeight="bold";
// li[1].style.backgroundColor="yellow";
// for(let i=0;i<li.length; i++){
//     li[i].style.backgroundColor="grey"
// }

// QuerySelector
var header= document.querySelector('#main-header')
header.style.borderBottom="solid 4px white"
var input= document.querySelector('input');
input.value="Hello world"

var submit= document.querySelector('input[type="submit"]');
submit.value="Send"
var item= document.querySelector('.list-group-item')
item.style.color="red"
var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color="blue"
var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color="orange"