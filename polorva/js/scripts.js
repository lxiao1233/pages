jQuery(function($) {
    jQuery(document).ready(function() {
        jQuery('.content, .sidebar').theiaStickySidebar({
            additionalMarginTop: 30
        });
    });

    function PopupCenter(url, title, w, h) {
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        if (window.focus) {
            newWindow.focus();
        }
    }

    function SocialClickEvent() {
        var anchors = document.getElementsByTagName('a');
        var sharelink = '';
        var _popupW = '640';
        var _popupH = '380';
        for (var i = 0; i < anchors.length; i++) {
            var anchor = anchors[i];
            if (anchor.className.indexOf('fb_btn') + 1) {
                anchor.onclick = function() {
                    var _fbURL = 'https://www.facebook.com/sharer/sharer.php?u=' + sharelink;
                    var _fbTTL = 'TIP OF THE WEEK: How this little device saves you from THOUSANDS of dollars spent at crooked repair shops...';
                    PopupCenter(_fbURL, _fbTTL, _popupW, _popupH);
                }
            }
            if (anchor.className.indexOf('tw_btn') + 1) {
                anchor.onclick = function() {
                    var _twURL = 'https://twitter.com/share?url=' + sharelink;
                    var _twTTL = '';
                    PopupCenter(_twURL, _twTTL, _popupW, _popupH);
                }
            }
            if (anchor.className.indexOf('gp_btn') + 1) {
                anchor.onclick = function() {
                    var _gpURL = 'https://plus.google.com/share?url=' + sharelink;
                    var _gpTTL = '';
                    PopupCenter(_gpURL, _gpTTL, _popupW, _popupH);
                }
            }
        }
    }
    window.onload = function() {
        SocialClickEvent();
    }
});
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.clientWidth > 767 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    $('html,body').animate({
        scrollTop: 0
    }, 'slow');
}
jQuery(function($) {
    jQuery(document).ready(function() {
        jQuery('.content, .sidebar').theiaStickySidebar({
            // Settings
            additionalMarginTop: 30
        });
    });

    window.onload = function() {}

});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.clientWidth > 767 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
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



function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}