(function () {
    "use strict";

    var moduleObj = moduler('panels', {
        defaults: {
            events:'click',
            trigger: ".Panel-menu-trigger",
            offCanvasTarget : ".js-panelTarget",
            bodyCanvas: ""
        },

        init: function (module) {

            var settings = module.settings,
                events = settings.events,
                trigger = settings.trigger,
                offCanvas = $(settings.offCanvasTarget),
                bodyCanvas = $(settings.bodyCanvas);
            
            $(document).on(events, trigger, function(e){
                e.preventDefault();
                if($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    offCanvas.removeClass("is-active");
                    bodyCanvas.removeClass("is-active");
                } else {
                    $(this).addClass("is-active");
                    offCanvas.addClass("is-active");
                    bodyCanvas.addClass("is-active");
                }
            });
        }
    });
})();