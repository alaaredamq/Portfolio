let Main = function () {
    let self = this;

    self.variables = {}

    self.init = function () {
        self.initEvent();
    };

    self.initEvent = function () {
        // self.initEvent();
        // self.initEvent();
        initPercentage();
    };

    const initPercentage = function () {

        // trigger when scroll
        let sectionsDom = window.document.getElementsByClassName("skills-section");
        let sections = $(".skills-section");
        sections.each(function (index, section) {
            $(window).on("scroll", function () {
                handleScrollEvent($(section));
            });
        });



    }

    const isElementInViewport = (elem) => {
        let $elem = $(elem);
        let windowTop = $(window).scrollTop();
        let windowBottom = windowTop + $(window).height();
        let elemTop = $elem.offset().top;
        let elemBottom = elemTop + $elem.height();

        return elemTop <= windowBottom && elemBottom >= windowTop;
    }

    const handleScrollEvent = (id) => {
        var st = $(window).scrollTop();

        if (isElementInViewport(id)) {
            id.each(function (index, section) {
                let progressBars = $(section).find(".skill");
                progressBars.each(function (index, progressBar) {
                    let percentageBar = $(progressBar).find(".skill-bar-fill");
                    let percentage = percentageBar.attr("data-percentage");
                    percentageBar.animate({
                        width: percentage + "%"
                    }, 1000);
                    // percentageBar.css("width", percentage + "%");
                });
            });
        }
    }

    self.init();
}