var container = document.getElementById('my container');

var newParagraph1 = document.createElement('p');

container.appendChild(newParagraph1);
newParagraph1.innerHTML = 'Here is the new paragraph with <a href="https://tilda.education/courses/web-design/designsystem/" title="link1" target="_blank">link 1</a> and <a href="https://34travel.me/" title="link2" target="_blank">link 2</a>.';

var newParagraph2 = document.createElement('p');

container.appendChild(newParagraph2);
newParagraph2.innerHTML = 'Here is the new paragraph with <a href="https://30kstrategy.com/" title="link3" target="_blank">link 3</a> and <a href="https://inf1.info/binarynotation" title="link4" target="_blank">link 4</a>.';

window.onload = function() {
	localStorage.clear();
}

var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', updateLinksOnButtonClick);

function updateLinksOnButtonClick(event) {
	var paragraph1 = container.getElementsByTagName('p')[0],
		children = paragraph1.children;

	for (var i = 0; i < children.length; i++) {
		if (children[i].tagName === 'A') {
			children[i].classList.add('updated');
		}
	}
}

var paragraph2 = container.getElementsByTagName('p')[1];

paragraph2.onclick = function(event) {
	var target = event.target;

	if (target.tagName === 'A') {
		var linkText = target.innerHTML,
			linkPath = target.getAttribute('href'),
			storaged = localStorage.getItem(linkText);

		target.classList.add('updated');
		event.preventDefault();

		alert(linkText);

		if (!storaged) {
			localStorage.setItem(linkText, JSON.stringify({path: linkPath}));
			target.setAttribute('href', '#');
	
			alert('link address was saved');
		} else {
			alert(JSON.parse(storaged).path);
		}
	}
}