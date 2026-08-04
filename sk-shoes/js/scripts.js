
window.onscroll=function(){
    scrollFunction()
};
function scrollFunction(){
    if(document.body.clientWidth>767&&(document.body.scrollTop>20||document.documentElement.scrollTop>20)){
        document.getElementById("myBtn").style.display="block";
    }else{
        document.getElementById("myBtn").style.display="none";
    }    
}

jQuery(function($) {
    jQuery(document).ready(function() {
        jQuery('.content, .sidebar').theiaStickySidebar({
            // Settings
            additionalMarginTop: 30
        });
    });

    window.onload = function() {
    }

});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.clientWidth>767&&(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html,body').animate({
        scrollTop: 0
    }, 'slow');
    // document.body.scrollTop = 0; // For Safari
    //  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}