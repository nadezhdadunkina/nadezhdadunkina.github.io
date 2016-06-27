console.log("--------------Task 1--------------");


var div = document.getElementById('divId');
var arr = ["BMW", "Opel", "Ford", "Audi", "Reno"];
var content = '';


function domFunction(element, array) {
    div.innerHTML = ' ';

    var dFrag = document.createDocumentFragment();
    for (var i = 0, len = arr.length; i < len; i++) {
        try {

            if (typeof(arr[i]) !== 'string' &&
                typeof(arr[i]) !== 'number') {
                throw Error('Div content should be either a string or a number!');
            }
        } catch (e) {
            // statements
            console.log(e);
        }

        var newDiv = document.createElement('div');
        var currentDiv = newDiv.cloneNode(true);
        currentDiv.innerHTML = arr[i];
        dFrag.appendChild(currentDiv);
    }
    div.appendChild(dFrag);
}

domFunction(div, arr);
console.log("----------------------------------");