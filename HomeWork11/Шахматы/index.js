var body = document.body;
var inputFisrt = document.getElementById('inputFist');
var inputSecond = document.getElementById('inputSecond');
var btn = document.getElementsByTagName('button')[0];
btn.disabled = true;
btn.type = 'reset';
const table = document.createElement('table');
var div = document.getElementsByClassName('tab')[0];
var tr = document.getElementsByTagName('tr');
var td = document.getElementsByTagName('td');

inputFisrt.addEventListener('keyup', validation);
inputSecond.addEventListener('keyup', validation);
btn.addEventListener('click', creatTable);
table.addEventListener('click', paintCell);


function validation() {
    var inp1 = +inputFisrt.value;
    var inp2 = +inputSecond.value;
    if (!!inp1 && inp2 == 0) {
        btn.disabled = true;
    } else if (!!inp2 && inp1 == 0) {
        btn.disabled = true;
    } else if (inp1 == 0 && inp2 == 0) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
    if (event.key == 'Backspace') {
        if (div.classList.contains('tab')) {
            document.location.reload()
        }
    }
}

function creatTable() {
    var x = +inputFisrt.value;
    var y = +inputSecond.value;
    if (!!x && !!y) {
        if (!!x && y <= 10) {
            if (!!y && x <= 10) {
                var tr;
                var td;
                if (btn.disabled == false) {
                    div.appendChild(table);
                    table.className = 'table';
                    for (var j = 0; j < y; j++) {
                        tr = document.createElement('tr');
                        table.appendChild(tr);
                        for (var i = 0; i < x; i++) {
                            td = document.createElement('td');
                            tr.appendChild(td);
                            i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1 ? td.className = 'black' : td.className = 'white'
                        }
                    }
                }
            } else {
                alert('введите число указанного диапазона')
            }
        } else {
            alert('введите число указанного диапазона')
        }
    } else {
        alert('введите число указанного диапазона')
    }
}

function paintCell() {
    var ev = event.target;
    for (var i = 0; i < td.length; i++) {
        if (td[i].classList.toggle('black')) {
            td[i].classList.toggle('white')
        }
    }

}