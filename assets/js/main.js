jQuery(document).ready(function($) {

    $('.level-bar-inner').each(function () {
        var itemWidthText = $(this).data("level");

        if (itemWidthText == "Beginner") {
            $(this).css("width", "33%");
        }
        else if (itemWidthText == "Intermediate") {
            $(this).css("width", "66%");
        }
        else if (itemWidthText == "Advanced") {
            $(this).css("width", "100%");
        }
        else {
            $(this).css("width", itemWidthText);
        }
    });
});