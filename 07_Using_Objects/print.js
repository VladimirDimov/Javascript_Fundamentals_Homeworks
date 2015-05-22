function pr(t, style) {
// print to console
console.log(t);

//print to html
tHtml = t.replace(/\n/g, '<br>') // Implementing the new line special character.
var element = document.createElement('p');
//Apply styles
switch(style){
	case 'mainTitle':
	element.className = 'mainTitle';
	break;
	case 'taskTitle':
	element.className = 'taskTitle';
	break;
	case 'input':
	element.className = 'input';
	break;
	case 'output':
	element.className = 'output';
	break;
	default:
	break;
}
element.innerHTML = tHtml;
document.getElementById('container').appendChild(element);
}