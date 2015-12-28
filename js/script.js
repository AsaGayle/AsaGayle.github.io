$(document).ready(function () {
    
    "use strict";
    
        $('.zoom').hover(function (x) {
            var getEl = $(x.target);
            var item = getEl.attr('id');
            insert(item);
            $(this).addClass('transition');
            $(this).removeClass('faded');
            
        }, 
            function () {
            $(this).removeClass('transition');
            $(this).addClass('faded');
    });
});


function insert (id){
    $('.language-info-box').html(content[id][0]);
}
