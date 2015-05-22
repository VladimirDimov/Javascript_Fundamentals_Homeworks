function pr(t, style) {
	var element = document.createElement('p');
	var node = document.createTextNode(t);
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

	function asd(){}
}
element.appendChild(node);
document.getElementById('container').appendChild(element);

// pr to console
console.log(t);
}