
var button = document.getElementById('table-button');

button.addEventListener('click', addTableRow);

function addTableRow() {
	var table = document.getElementsByClassName('table')[0],
		tableStart = table.getElementsByClassName('table-row')[0],
		newTableRow = document.createElement('tr');
	newTableRow.innerHTML = '<td><td><td>';
	table.insertBefore(newTableRow, tableStart);
}

var table = document.getElementsByClassName('table')[0];

table.addEventListener('click', showInput);

function showInput(event) {
	var target = event.target;

	if (target.tagName === 'TD' && target.id !== 'table-button') {
		var input = document.createElement('input');
		input.value += target.textContent;
		target.appendChild(input);
		input.focus();
		if (input.previousSibling) {
			input.previousSibling.remove();
		}
		input.addEventListener('blur', onCellInputBlur);
		input.addEventListener('keypress', onCellInputKeyPress);
	}
}

function onCellInputBlur(event) {
	deleteInput(event.target);
}

function onCellInputKeyPress(event) {
	if (event.code === 'Enter') {
		deleteInput(event.target)
	}
}

function deleteInput(input) {
	input.parentElement.innerText = truncateText(input.value, 20);
	input.remove();
}

function truncateText(text, maxLenght) {
	return (text.length > maxLenght) ? (text.slice(0, maxLenght - 1) + '…') : text;
}