console.log("--------------Task 1--------------");

function generateList(selector, counter) {

    try {
        if (isNaN(parseFloat(counter))) {
            throw new Error('NaN!');
        }
        if (counter == undefined) {
            throw Error;
        }
        if (counter < 1) {
            throw new Error('Error!');
        }
    } catch (e) {
        console.log(e);
    }


    var $li = $('<li/>')
        .addClass("list-item"),
        $ul = $('<ul/>')
        .addClass("items-list"),
        i,
        $selectedEl = $(selector);

    for (i = 0; i < counter; i++) {
        $newLi = $li.clone(true);
        $newLi.html('List item ' + i);
        $ul.append($newLi);
    }
    $selectedEl.append($ul);
}

generateList("#select", "6");
generateList("#select", "-6");
generateList("#select", {});
generateList("#select", "xyz");
generateList("#select", []);

console.log("----------------------------------");












console.log("--------------Task 2--------------");









console.log("----------------------------------");