jQuery(function($){
    $(document).ready(function() {
        $('.question').on('click', function() {
            let parentItem = $(this).parent();
            parentItem.find('.answer>p').slideToggle();
            parentItem.find('.answer').slideToggle();
            parentItem.toggleClass("isActive");
        });

        $('.section--page-banner .j-appear').addClass("is-show");
    });
});

$(window).scroll( function(){
    $('.j-appear').each( function(i){
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > top_of_object ){
            $(this).addClass("is-show");
        }
    }); 
});