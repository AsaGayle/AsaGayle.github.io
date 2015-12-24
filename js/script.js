$(document).ready(function () {
    
    "use strict";
    // Small program to make images with the .zoom class 
    // to remove .faded class and expand image using webkit
    // transitions
    
    // 1. start function on .zoom class when document is loaded
        $('.zoom').hover(function (x) {
            // 2.1 function obtains element's id and adds it to a variable
            var getEl = $(x.target);
            var item = getEl.attr('id');
            insert(item);
            // 2.2. function adds transition class and removes faded
            // thus making image larger and back to normal opacity
            $(this).addClass('transition');
            $(this).removeClass('faded');
            
        }, 
            // 2.3. function returns image back to nomarl
            function () {
            $(this).removeClass('transition');
            $(this).addClass('faded');
    });
});

// Basic function to inject content from content.js into 
// language-info-box element on page
function insert (id){
    $('.language-info-box').html(content[id][0]);
}
