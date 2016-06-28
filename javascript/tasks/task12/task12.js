console.log("--------------Task 1--------------");



var data = document.getElementById('divId');

function checkConditions(data) {

    var buttons = document.getElementsByClassName('button');
    var contents = document.getElementsByClassName('content');

    try {
        if (typeof data !== 'string' && typeof data !== 'object') {
            throw new Error('Invalid content type!');
        }
        if (!(data)) {
            throw new Error('Invalid dom element or id');
        }
        if ( !(data instanceof HTMLElement)) {
            throw new Error('DOM element is non-existant');
        }
    } catch (e) {
        console.log(e);
    }

    for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].innerHTML = 'Hide';
        buttons[i].addEventListener('click', function(event) {

            var button = event.target;
            var nextElement = button;
            var content;

            while (nextElement) {
                if (nextElement.nextElementSibling.className === 'button') {
                    return 0;
                }
                if (nextElement.className === 'content') {
                    content = nextElement;
                    break;
                } else {
                    nextElement = nextElement.nextElementSibling;
                }
            }

            if (typeof(content) !== undefined) {
                if (content.style.display === '') {
                    button.innerHTML = 'Show';
                    content.style.display = 'none';
                } else {
                    button.innerHTML = 'Hide';
                    content.style.display = '';
                }
            }
        }, false);
    }
}

checkConditions(data);

console.log("----------------------------------");
