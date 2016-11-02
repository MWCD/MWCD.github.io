https://stanhub.com/sticky-header-change-navigation-active-class-on-page-scroll-with-jquery/
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        console.log(target);
        if(target == "#intro") {
            $('html, body').stop().animate({
                'scrollTop': 0
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        } else {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        }
    });
    var str = $('#intro p').text();
    //http://stackoverflow.com/questions/11761563/javascript-regexp-for-splitting-text-into-sentences-and-keeping-the-delimiter
    var spans = '<span class="appearText">' + str.match( /[^¿]+/g ).join(' </span><span class="appearText">') + '</span>';
    $(spans).hide().appendTo('.fadeInText').each(function(i) {
        $(this).delay(2000 * i).fadeIn(1000);
    });
    $(".navItems").animate({opacity: 1}, 3000);
    $(".fadeInButton").delay(2000).animate({opacity: 1}, 3000);   
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}

function swap1() {
    $("#entry2").fadeOut(500);
    $("#entry3").fadeOut(500);
    $("#entry1").delay(500).fadeIn(500);
}

function swap2() {
    $("#entry1").fadeOut(500);
    $("#entry3").fadeOut(500);
    $("#entry2").delay(500).fadeIn(500);
}
function swap3() {
    $("#entry1").fadeOut(500);
    $("#entry2").fadeOut(500);
    $("#entry3").delay(500).fadeIn(500);
}