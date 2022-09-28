var itemList = document.querySelector('#items');
/*//parentElement
//console.log(itemList.parentNode);
itemList.parentElement.style.backgroundColor='#90EE90';

//lastchild
console.log(itemList.lastChild);

//lastElementchild
console.log(itemList.lastElementChild);

//firstchild
console.log(itemList.firstChild);

//firstElementchild
console.log(itemList.firstElementChild);

//nextsibling
console.log(itemList.nextSibling);

//nextElementsibling
console.log(itemList.nextElementSibling); 

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling 
console.log(itemList.previousElementSibling); 
itemList.previousElementSibling.style.color = 'red'; */

//createElement

//create a div
var newDiv= document.createElement('Div');
//Add class
newDiv.className='list-group-item';
newDiv.id = 'HEllo';
//Add attribute
newDiv.setAttribute('title', 'Hello Div');
//create text node
var newDivText = document.createTextNode('HEllo');
//Add text to Div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize= '30px';
newDiv.style.color='green';
container.insertBefore(newDiv, h1);
