jQuery(document).ready(() => {
    const pageNavbar = jQuery('#navbar');
    const navbarItems = pageNavbar.find('.nav-item');

    navbarItems.click(function () {
        const sectionId = jQuery(this).attr('data-target');
        scrollToSection(sectionId);
    });

    navbarItems.each(function (index) {
        const navTargets = [
            'portfolio',
            'skills',
            'about-me',
            'contact'
        ];

        jQuery(this).attr('data-target', `#${navTargets[index]}-section`);
    });

    jQuery('.write-anim', function () {
        const realTextEl = jQuery(this).find('h1')
        const realText = realTextEl.text();
        const realTextLen = realText.length;
        var count = 0;
        const animationInterval = setInterval(() => {
            realTextEl.text(realText.slice(0, count));
            count++;
            if (count === realTextLen + 1) clearInterval(animationInterval);
            console.log(count)
        }, 100);
    });

    jQuery(document).scroll(function () {
        const scrollY = jQuery('html').scrollTop();

        if (scrollY >= pageNavbar.height()) {
            pageNavbar.addClass('with-background');
        } else {
            pageNavbar.removeClass('with-background');
        }
    });

    jQuery('.up-down-arrow').click(function () {
        scrollToSection('#portfolio-section');
    });

    function scrollToSection(sectionId) {
        console.log(sectionId);
        const sectionEl = jQuery(sectionId);
        const sectionY = sectionEl.offset().top;
    
        const pageNavbarHeight = pageNavbar.height();
    
        jQuery('html').animate({
            scrollTop: sectionY - pageNavbarHeight
        }, 1000, 'swing');
    }
});
