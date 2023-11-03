const owlStart = function() {
    $('.blog-slider').owlCarousel({
        items:4,
        dots:false,
        loop: false,
        nav: true,
        margin: 20,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>'],
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            768:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });
}
owlStart()