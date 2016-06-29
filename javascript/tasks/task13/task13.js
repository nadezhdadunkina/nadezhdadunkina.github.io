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


    var $li = $('<li/>').addClass("list-item"),
        $ul = $('<ul/>').addClass("items-list"),
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

function findElements(selector) {

    var $button = $(".button").text("Hide"),
        $content = $(".content"),
        $selectedElement = $(selector);

    try {
        if (!(selector) || typeof selector !== 'string') {
            throw new Error('Non-existant DOM element.');
        }

        if (!$selectedElement.length) {
            throw new Error("Error");
        }
    } catch (e) {
        console.log(e);
    }

    $button.click(function() {
        var $this = $(this);
        $this.nextAll(".content").first().toggleClass("hidden");

        if ($content.hasClass("hidden")) {
            $this.text("Show");
        } else {
            $this.text("Hide");
        }
    });
}

findElements("#divId");

console.log("----------------------------------");