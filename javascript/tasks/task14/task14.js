console.log("--------------Task 1--------------");

(function($) {
    $.fn.dropdownList = function() {
        var $this = this;
        var $div = $('<div>').addClass("dropdown-list");
        $div.prependTo("body");
        $this.appendTo(".dropdown-list");
        $this.css({ 'display': 'none' });
        $this.removeAttr("id");
        var $secondDiv = $('<div>').addClass("current").text("Option 1").attr("data-value", " ");
        $secondDiv.appendTo(".dropdown-list");
        var $thirdDiv = $('<div>').addClass("options-container").css({ 'position': 'absolute', 'display': 'none' });
        $thirdDiv.appendTo(".dropdown-list");

        for (var i = 0; i < $this.children().length; i++) {


            var $dropdownDiv = $('<div>').addClass("dropdown-item").attr("data-value", ($this.children()[i]).getAttribute('value')).text(($this.children()[i]).text);

            $dropdownDiv.appendTo(".options-container");
        }

        $('.current').click(function() {
            if ($('.options-container').css('display') === 'none') {
                $('.options-container').css('display', '');
            } else {
                $('.options-container').css('display', 'none');
            }
        });
    }
}(jQuery));
$("#the-select").dropdownList();

console.log("----------------------------------");
