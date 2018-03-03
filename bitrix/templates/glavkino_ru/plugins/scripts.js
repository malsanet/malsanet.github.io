$('.content-wrapper').find('img[alt]').each(function(){
    var alt = $(this).attr('alt');
    if (alt != '' && $(this).parent()[0].nodeName != 'FIGURE') {
        var img       = $(this).clone();

        var maxWidth = $(this).closest('.content-wrapper').width();
        img.removeAttr('width');
        img.removeAttr('height');
        img.css('max-width', maxWidth);
        var outerHTML = $("<div />").append(img).html();
        var width  = $(this).width();
        var height = $(this).height();

        var html = '<figure class="text-left" style="max-width:' + maxWidth + 'px;">' + outerHTML + '<figcaption>' + alt + '</figcaption></figure>';

        $(this).replaceWith(html);
    }
});

function convertVideo(url){
    var pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
    var pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;

    if(pattern1.test(url)){
        var replacement = '//player.vimeo.com/video/$1';
        var url = url.replace(pattern1, replacement);
    }

    if(pattern2.test(url)){
        var replacement = 'http://www.youtube.com/embed/$1';
        var url = url.replace(pattern2, replacement);
    }

    return url;
}
$('[data-video-player]').each(function(){
    $(this).wrap($('<div />').addClass('video-player'));
    $(this).closest('.video-player').append($('<div />').addClass('video-player-inner'))
});
$(document).on('click', '.video-player', function(){
    var embedUrl = convertVideo($('[data-video-player]', this).data('video-player'));
    var video = '<iframe width="' + $('[data-video-player]', this).width() + '" height="' + $('[data-video-player]', this).height() + '" src="' + embedUrl + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    $(this).replaceWith(video);
});

function doScrollMagic() {
    var scroll_top = parseInt($(document).scrollTop()) || 0;
    if (scroll_top >= 100) {
        $('#_mainMenu').addClass('stacked');
    }
    else {
        $('#_mainMenu').removeClass('stacked');
    }
}
$(document).scroll(doScrollMagic);
doScrollMagic();

new Swiper('.partners-slider .swiper-container', {
    slidesPerView: 'auto',
    nextButton: '.partners-slider .swiper-button-next',
    prevButton: '.partners-slider .swiper-button-prev',
    spaceBetween: 70,
    onInit : function(swiper){
        if (swiper.activeIndex == 0) {
            $('.partners-slider ').addClass('swiper-start');
        }
        if (swiper.isBeginning && swiper.isEnd) {
            $('.partners-slider').addClass('hide-buttons');
        }
    },
    onTransitionStart : function(swiper){
        if (swiper.activeIndex == 0) {
            $('.partners-slider ').addClass('swiper-start');
        }
        else {
            $('.partners-slider ').removeClass('swiper-start');
        }
        if (swiper.isEnd) {
            $('.partners-slider ').addClass('swiper-end');
        }
        else {
            $('.partners-slider ').removeClass('swiper-end');
        }
    },
    breakpoints: {
        1024: {
            spaceBetween: 60
        }
    }
});

if ($('.clients-slider').length > 0) {
    var clientsSwiper = new Swiper('.clients-slider .swiper-container', {
        slidesPerView: 'auto',
        nextButton: '.clients-slider .swiper-button-next',
        prevButton: '.clients-slider .swiper-button-prev',
        spaceBetween: 70,
        initialSlide : 0
    });
    setTimeout(function(){
        clientsSwiper.update();
    }, 200);
}

if ($('.mobile-clients-slider').length > 0) {

}

$(document).on( 'change keyup keydown paste cut', '#message', function (){
    $('#message_label').height(59).height(this.scrollHeight);
}).find( '#message' ).change();

function startComplexAnimation(){
    setTimeout(function(){
        $('.complex-territory').addClass('show-complex-layer');
        $('.complex-layer').addClass('show-complex-layer');
    }, 500);
    setTimeout(function(){
        $('.complex-mask').addClass('show-complex-layer');
    }, 1000);
    setTimeout(function(){
        $('.complex-details').addClass('show-complex-layer');
    }, 1500);
    setTimeout(function(){
        $('.complex-tech-placeholder,.complex-tech,.complex-tech-content').addClass('show-complex-layer');
    }, 2000);
    setTimeout(function(){
        $('.complex-text').addClass('show-complex-layer');
    }, 2500);
}

$('blockquote').each(function(){
    $(this).html('<span>' + $(this).html() + '</span>');
});
//$('blockquote').html('<span>' + $('blockquote').html() + '</span>');


var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {

        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'LI');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
                continue;
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);
        // define options (if needed)
        options = {
            closeOnScroll : false,
            history  : false,
            mouseUsed  : true,
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.pswp-gallery');

var isWebkit = 'WebkitAppearance' in document.documentElement.style;
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
var currentWidth;
var currentHeight;
var calculatedWidth;
var scale;
var minWidth = 980,
    mobileWidth = 750;

scaleIt();
$(window).resize(scaleIt);
function scaleIt() {
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    currentWidth  = $(window).width();
    currentHeight = $(window).height();

    if (parseInt(currentWidth) < parseInt(minWidth) && parseInt(currentWidth) > parseInt(mobileWidth)) {
        scale             = (currentWidth * 100 / minWidth) / 100;
        calculatedWidth   = ($('html').width() * (1 / scale));
        var _cssScale     = 'scale('+scale+')';
        var _cssTransform = '0 0 0';
        $('body').css({
            'overflow-x'        : 'hidden',
            'width'             : calculatedWidth,
            '-ms-transform'     : _cssScale,
            '-webkit-transform' : _cssScale,
            'transform'         : _cssScale,
            '-ms-transform-origin'      : _cssTransform,
            '-webkit-transform-origin'  : _cssTransform,
            'transform-origin'  : _cssTransform
        });
    }
    else {
        $('body').css({
            'overflow-x'        : 'auto',
            'width'             : 'auto',
            '-webkit-transform' : 'none',
            '-ms-transform'     : 'none',
            'transform'         : 'none',
            'margin-top'        : 'auto'
        });
    }

    $('.burger-menu .burger-menu-inner').width(currentWidth - 50);

    if (parseInt(currentWidth) < mobileWidth) {
        if (!$('html,body').hasClass('is-mobile')) {
            $('html,body').addClass('is-mobile');
            $('html,body').removeClass('no-mobile');
        }
    }
    else {
        $('html,body').removeClass('is-mobile');
        $('html,body').addClass('no-mobile');
    }
}
function doBurger(){
    if ($('body').hasClass('burger-open')) {
        $('body').removeClass('burger-open')
    }
    else {
        $('body').addClass('burger-open');
    }
    return false;
}
$('.burger-menu-inner-close').click(doBurger);

var $frame  = $('#horizontalSlider');
var $wrap   = $frame.parent();
$frame.sly({
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 1,
    scrollHijack: 1000,
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
});

$('#newsSlider').sly({
     horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 1,
    scrollBar: $('#newsSlider').parent().find('.scrollbar'),
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
});

$('#newsMobileSlider').sly({
     horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 1,
    scrollBar: $('#newsMobileSlider').parent().find('.scrollbar'),
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
});

$('#mobileClientsSlider').sly({
     horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 1,
    scrollBar: $('#mobileClientsSlider').parent().find('.scrollbar'),
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
});

var totalWidth = 0;
var menu = $('.is-mobile .rubrics-list .rubrics-inner');
var menuWidth = menu.width();
var maxWidth  = menuWidth * ($(window).width() && (navigator.userAgent.match(/iPhone/i) == 'iPhone') == 375 ? 3 : 2);
$('.is-mobile .rubrics-list .rubrics-inner').find('a').each(function(i){
    totalWidth += $(this).outerWidth();
    if (totalWidth > maxWidth) {
        for (var j = (i + 1); j < ($('.is-mobile .rubrics-list .rubrics-inner a').length + 1); j++) {
            $('.is-mobile .rubrics-list .rubrics-inner a:nth-child(' + j + ')').addClass('m-hide').hide();
        }
        $(this).before('<a class="show-more-trigger" href="#">...</a>');
        return false;
    }
});

setInterval(function(){
}, 200);

$('.no-mobile .rubrics-list .rubrics-inner').find('a').each(function(i){
    totalWidth += $(this).outerWidth();
    if (totalWidth > maxWidth) {
        for (var j = (i + 1); j < ($('.no-mobile .rubrics-list .rubrics-inner a').length + 1); j++) {
            //$('.no-mobile .rubrics-list .rubrics-inner a:nth-child(' + j + ')').addClass('m-hide').hide();
        }
        //$(this).before('<a class="show-more-trigger" href="#">...</a>');
        return false;
    }
});
$(document).on('click', '.show-more-trigger', function(e){
    e.preventDefault();
    $('.rubrics-list .rubrics-inner').addClass('opened');
});
$('*').on('click', function(e){
    if (!$(e.target).hasClass('rubrics-inner') && !$(e.target).hasClass('show-more-trigger')) {
        $('.rubrics-list .rubrics-inner').removeClass('opened');
    }
});
$(document).on('mouseenter mouseleave', '.pavilion-m', function(){
    $('.complex-mask .pavilion-' + $(this).data('pavilion')).toggleClass("active");
});
$(document).on('click', '.pavilion-m', function(e){
    e.preventDefault();
    openPavilionDetails($(this).data('pavilion'));
});
$(document).on('click', '.pavilion-details-close, .is-mobile .pavilion-details-back .go-back', function(e){
    e.preventDefault();
    $('body').removeClass('lock');

    if ($('body').hasClass('is-mobile')) {
        $('.main-menu').removeClass('with-back');
        $('.main-menu').removeClass('pavilion-details-back');
        enableScroll();
    }
    $('.complex-container').removeClass("opened");
    $('.pavilion-content').addClass('hide-content');
    $('.pavilion-navigation').animate({
        opacity: 0
    }, 400);
    removeHash();
    clearInterval(_visibleInt);
    $('.pavilion-m.current').removeClass('current');
    $('.pavilion.current').removeClass('current');
    $('.pavilion-number.current').removeClass('current');
});
$(document).on('click', '[data-trigger=pavilion-selector]', function(e){
    e.preventDefault();
    openPavilionDetails($(this).data('pavilion'));
});
$(document).on('mouseenter', '.pavilions-p', function(){
    $('#_pavilionsList').find('.active').removeClass('active');
    $('#_pavilionsList').find('.pavilion-' + $(this).data('pavilion')).addClass('active');
});
$(document).on('mouseleave', '.pavilions-p', function(){
    $('#_pavilionsList').find('.active').removeClass('active');
});
$(document).on('click', '#_requestSendAgain', function(){
    $('#_requestFormSuccess').animate({
        opacity : 0
    }, 300, function(){
        $('#_requestFormFeedback').resetForm();
        $('#_requestFormOuter').animate({
            opacity : 1
        }, 300, function(){
            $('#_requestFormSuccess').css('z-index', 2);
            $('#_requestFormSuccess').css('visibility', 'hidden');
            $('#_requestFormSuccess').removeClass('animate-form');
        });
    });
});
$(document).on('keyup', '.form-field', materializeForm);
materializeForm();

var topPos = 0;
$('#requestModal, #requestModalMassMedia').on('show.bs.modal', function () {
    topPos = $(document).scrollTop();
    $('.wrapper').css('transform', 'translateY(-' + topPos + 'px)');
});
$('#requestModal, #requestModalMassMedia').on('shown.bs.modal', function () {

    var calculatedWidth;
    var scale;

    var currentWidth  = $(window).width();
    var currentHeight = $(window).height();
    var modalHeight   = $(window).height();

    if (parseInt(currentWidth) < parseInt(minWidth) && parseInt(currentWidth) > parseInt(mobileWidth)) {
        scale = (currentWidth * 100 / minWidth) / 100;
        modalHeight = modalHeight + modalHeight * scale;
    }

    $('.modal-backdrop').height(modalHeight);
});

$('#requestModal, #requestModalMassMedia').on('hidden.bs.modal', function () {
    $('.wrapper').css('transform', 'translateY(0)');
    $(document).scrollTop(topPos);
});

if (window.location.hash != '') {
    if (parseInt(window.location.hash.replace('#pavilion-', '')) > 0) {
        openPavilionDetails(window.location.hash.replace('#pavilion-', ''));
    }
}

function materializeForm() {
    $('.form-field').each(function(){
        if ($(this).val() != '') {
            $(this).closest('.form-control-material').addClass('with-value');
        }
        else {
            $(this).closest('.form-control-material').removeClass('with-value');
        }
    });
}
function removeHash () {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}
var _visibleInt;
function openPavilionDetails(number) {
    $('body').addClass('lock');

    if ($('body').hasClass('is-mobile')) {
        $('.main-menu').addClass('with-back').addClass('pavilion-details-back');
        _visibleInt = setInterval(function(){
            $('body').addClass('visibleUp');
        }, 200);
        disableScroll();
    }

    $('.pavilion-m.current').removeClass('current');
    $('.pavilion.current').removeClass('current');
    $('.pavilion-number.current').removeClass('current');

    $('.pavilion-m.pavilion-' + number).addClass('current');
    $('.pavilion.pavilion-' + number).addClass('current');
    $('.pavilion-number.pavilion-' + number).addClass('current');

    window.location.hash = 'pavilion-' + number;
    $('.complex-container').addClass("opened");
    var that = $('#_pavilionsList').find('[data-pavilion=' + number + ']');
    $('.pavilion-content').addClass('hide-content');
    for (var i = 1; i <= 9; i++) {
        $('.pavilion-content').removeClass('show-content-' + i);
    }
    $('.pavilion-navigation').stop().animate({
        opacity: 0
    }, 400, function(){
        $('#_pavilionsList').find('.pavilion-xs').addClass('hidden').remove();
        $('#_pavilionsList').find('.hidden').removeClass('hidden');
        var _clone = $(that).clone();
            _clone.data('pavilion', '');
            _clone.addClass('pavilion-xs');

        that.addClass('hidden');
        $('#_pavilionsList').append(_clone);
        $('#_pavilionNumber').html('№' + number);

        $('.pavilion-navigation').animate({
            opacity : 1
        }, 400);
        $('.pavilion-content').removeClass('hide-content');
        $('.pavilion-content').addClass('show-content-' + number);

        $('#_pavilionsPlaceholders').find('.hidden').removeClass('hidden');
        $('#_pavilionsPlaceholders').find('[data-pavilion=' + number + ']').addClass('hidden');
    });

    $('.pavilion-details-inner').stick_in_parent();

    if (!$('body').hasClass('is-mobile')) {
        $("html, body").stop().animate({scrollTop:0}, '1000');
    }
}
function updatePavillionInnerHeight()
{
    $('.pavilion-details-inner').height($(window).height());
}
updatePavillionInnerHeight();
$(window).resize(updatePavillionInnerHeight);

$(".scrollable-content").mCustomScrollbar({
    theme:"minimal",
    scrollInertia : 0,
    callbacks:{
        onScroll: function(){
            if ($('body').hasClass('is-mobile')) {
                disableScroll();
            }
        }
    }
});

$('[name=cellphone]').mask('+00 (000) 000-00-00');

$('#_requestForm').validate({
    'rules': {
        company: 'required',
        message: 'required',
        contactface: 'required',
        email: {required: true, email: true},
        cellphone: 'required'
    }, errorPlacement: function () {
    }, submitHandler: function (form) {
        $(form).ajaxSubmit({
            success: function (response) {
                $('#_requestFormOuter').animate({
                    opacity : 0
                }, 300, function(){
                    $('#_requestFormSuccess').css('visibility', 'visible');
                    $('#_requestFormSuccess').animate({
                        opacity : 1
                    }, 300, function(){
                        $(this).css('z-index', 7500);
                        $('#_requestFormSuccess').addClass('animate-form');
                    });
                });
            }
        });
        return false;
    }
});

var _scroll = $(window).scrollTop();
$('body').addClass('visibleUp');
$(window).scroll(function(e){
    if(_scroll > $(this).scrollTop()) {
        $('body').addClass('visibleUp');
    } else {
        if ($(window).scrollTop() > $('.main-menu').height()) {
            $('body').removeClass('visibleUp');
        }
    }
    _scroll = $(this).scrollTop();
    updatePavillionInnerHeight();
    e.stopPropagation();
});

$('.ellipsis').ellipsis({
    row: 2
});


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
if (!$('body').hasClass('disable-bg-animation') && $('body').css('background-image') != '') {
    var $bgobj = $('body');
    var pos = $('body').css('background-position').split(' ')[0];
    var yPos;
    var coords;
    $(window).scroll(function () {
        yPos = Math.round($(window).scrollTop() * 0.7);
        coords = pos + ' ' + yPos + 'px';
        $bgobj.css({backgroundPosition: coords});
    });
}

    if ($('.project-bg').length > 0) {
        $('body').addClass('hide-bg');

        $(window).scroll(function () {
            var yPos = ($(window).scrollTop() * 0.3);
            var coords = ' ' + yPos + 'px';
            $('.project-bg').css({transform: 'translateY(' + coords + ')'});
        });
    }
if ($('body').hasClass('page-projects')) {
}
if ($('.i18n').length == 0) {
    $('body').addClass('with-no-language');
}

if ($('.open-search').length > 0) {
    if ($(window).width() < 760) {
        $('.search').css({
            width : $(window).width(),
            right : 0
        });
    }
    else {
        var logo = $('.logo').width();
        var _triggerPos = $(window).width() - $('.search .trigger').offset().left;
        var width = $(window).width() - logo - _triggerPos;
        var scale;
        var minWidth = 980,
            mobileWidth = 750;

        var currentWidth   = $(window).width();
        if (currentWidth <= 769) {
            if (parseInt(currentWidth) < parseInt(minWidth) && parseInt(currentWidth) > parseInt(mobileWidth)) {
                scale = (currentWidth * 100 / minWidth) / 100;
                width = $(window).width() * (1 / scale) - logo - _triggerPos;
            }
        }
        $('.search').width(width);
        $('#title-search-input').focus();
    }
    if ($('#title-search-input').val() == '') {
        $('.trigger-close.visible-xs svg').addClass('hidden');
    }
    else{
        $('.trigger-close.visible-xs svg').removeClass('hidden');
    }
}

$('#title-search-input').keyup(function(){
    if ($('#title-search-input').val() == '') {
        $('.trigger-close.visible-xs svg').addClass('hidden');
    }
    else{
        $('.trigger-close.visible-xs svg').removeClass('hidden');
    }
});

function openSearchMenu(trigger){
    $(trigger).closest('.main-menu').addClass('open-search');

    if ($('body').hasClass('is-mobile')) {
        $(trigger).closest('.search').animate({
            width : $(window).width(),
            right : 0
        }, 200)
        if ($('#title-search-input').val() == '') {
            $('.trigger-close.visible-xs svg').addClass('hidden');
        }
        else{
            $('.trigger-close.visible-xs svg').removeClass('hidden');
        }
    }
    else {

        var logo = $('.logo').width();
        var _triggerPos = $(window).width() - $(trigger).offset().left;
        var width = $(window).width() - logo - _triggerPos;
        var scale;
        var minWidth = 980,
            mobileWidth = 750;

        var currentWidth   = $(window).width();
        if (currentWidth <= 769) {
            if (parseInt(currentWidth) < parseInt(minWidth) && parseInt(currentWidth) > parseInt(mobileWidth)) {
                scale = (currentWidth * 100 / minWidth) / 100;
                width = $(window).width() * (1 / scale) - logo - _triggerPos;
            }
        }

        $(trigger).closest('.search').animate({
            width : width
        }, 200);
    }

    setTimeout(function(){
        $('#title-search-input').focus();
    }, 400);

    return false;
}
function closeSearchMenu(trigger){

    $(trigger).closest('.main-menu').removeClass('open-search');
    if ($('body').hasClass('is-mobile')) {
        $(trigger).closest('.search').animate({
            width : 40,
            right : ($('.i18n').length == 0 ? 55 : 100)
        }, 200);
    }
    else {
        $(trigger).closest('.search').animate({
            width : 40
        }, 200);
    }
    return false;
}
function cleanSearch(trigger){
    $('#title-search-input').val('');
    $('#title-search-input').focus();
    $('.trigger-close.visible-xs svg').addClass('hidden');
    return false;
}

var _he = $('.no-mobile .rubrics-list .rubrics-inner').find('.rubrics-helper').height();
if ($('.no-mobile .rubrics-list .rubrics-inner').height() > _he) {
    $('.no-mobile .rubrics-list').addClass('no-hover');
}
else {
    $('.no-mobile .rubrics-list').removeClass('no-hover');
}


var _he = $('.is-mobile .rubrics-list .rubrics-inner').find('.rubrics-helper').height();
if ($('.is-mobile .rubrics-list .rubrics-inner').height() > _he) {
    $('.is-mobile .rubrics-list').addClass('auto-height');
}
else {
    $('.is-mobile .rubrics-list').removeClass('auto-height');
}



// Centered bootstrap modal
var modalVerticalCenterClass = ".modal-centered";
function centerModals($element) {
    var $modals;
    if ($element.length) {
        $modals = $element;
    } else {
        $modals = $(modalVerticalCenterClass + ':visible');
    }
    $modals.each( function(i) {
        var $clone = $(this).clone().css('display', 'block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.request-content-helper').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.request-content-helper').css("margin-top", top);
    });
}
$(modalVerticalCenterClass).on('show.bs.modal', function(e) {
    centerModals($(this));
});
$(window).on('resize', centerModals);