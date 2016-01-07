(function () {
    "use strict";

    var moduleObj = moduler('modal', {
        defaults: {
            trigger: '',
            event: 'click',
            contentHTML: '',
            modalObj: '.Modal',
            modalOverlay: '.Modal-overlay',
            modalContentContainer: '.Modal-content',
            mediaUrls: '',
            closeModalObj: '.Modal-close'
        },
        
        init: function (module) {
            var events = module.settings.event,
                trigger = $(this),
                modal = module.settings.modalObj,
                overlay = module.settings.modalOverlay,
                modalClose = module.settings.closeModalObj,
                modalButton = ".Modal .Button";
            
            
            $(trigger).on(events, function(e){
                e.preventDefault();
                
                var links = module.settings.mediaUrls,
                linkUrls = links.split(',');
                
                if(links == ""){
                    var content = '<p class="Type-serif Type-italic">Coming soon</p>';
                } else if(linkUrls.length == 1) {
                    var content = '<p class="Type-serif Type-italic">This broadcast is only available in</p><a href="'+linkUrls[0]+'" class="Button Button--blue Button--large" target="_blank">svenska</a><p class="Type-serif Type-italic Type-small" style="margin-top: 20px;">(Opens in new window)</p>';
                } else {
                    var content = '<p class="Type-serif Type-italic">Choose your language</p><a href="'+linkUrls[0]+'" class="Button Button--blue Button--large" target="_blank">Svenska</a> <a href="'+linkUrls[1]+'" class="Button Button--blue Button--large" target="_blank">English</a> <a href="'+linkUrls[2]+'" class="Button Button--blue Button--large" target="_blank">Español</a><p class="Type-serif Type-italic Type-small" style="margin-top: 20px;">(Opens in new window)</p>';
                }
                
                $(content).appendTo( $(module.settings.modalContentContainer) );
                
                $(modal).addClass("is-active");
            });
            
            $(document).on(events, modalButton, function(e){
                $(modal).removeClass("is-active");
                $(module.settings.modalContentContainer).empty();
            });
            
            var KEYCODE_ESC = 27;

            $(document).keyup(function(e) {
                if (e.keyCode == KEYCODE_ESC){
                    $(modal).removeClass("is-active");
                    $(module.settings.modalContentContainer).empty();
                }
            });
            
            $(modalClose).on(events, trigger, function(e){
                e.preventDefault();
                $(modal).removeClass("is-active");
                $(module.settings.modalContentContainer).empty();
            });
        }
    });
})();