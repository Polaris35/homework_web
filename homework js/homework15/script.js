$(window).scroll(function () {
    scrollFunction();
});

function scrollFunction() {
    if (
        $(document).scrollTop() > $(window).innerHeight() ||
        $(document.documentElement).scrollTop() > $(window).innerHeight()
    ) {
        $("#goToTopBtn").css("display", "block");
    } else {
        $("#goToTopBtn").css("display", "none");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
    $("#gallery__hidden").click(function () {
        $("#gallery").slideToggle("slow");
    });
});
