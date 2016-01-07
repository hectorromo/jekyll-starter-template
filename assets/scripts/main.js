var cs = cs || {};

$(function() {
	cs.init();
});

cs = {
	init: function () {
		cs.misc();
        cs.form();
        cs.screen.init();
		cs.mobFramework.init();
	},
	misc: function(){

	},
    utilities: {
        init: function(){
        
        },
        fullHeight: function(val){
            $(".u-fullHeight").css("height", val);
        }
    },
    screen: {
        screenWidth: 0,
        screenHeight: 0,
        
        init: function(){
			
			cs.screen.windowSize();
			
			$(window).resize(function(){
				cs.screen.windowSize();
			});

		},
		windowSize: function(){
			var sw = $(window).width(),
                sh = $(window).height();
    
            cs.utilities.fullHeight(sh);
		}
    },
    form: function(){
        $("select").each(function () {
            var val = $(this).find(":selected").text();

            $(this).wrap("<div class='Form-select' />");
            $(this).parent().append("<span>"+val+"</span>");
        });

        $("select").on("keyup change", function () {
            var val = $(this).find(":selected").text();
            $(this).next().html(val);
        });
    },
	mobFramework : {
		init: function(){
			
			cs.mobFramework.iosDeviceOrientation();

		},
		iosDeviceOrientation: function(){
			if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
				var vmeta = document.querySelector('meta[name="viewport"]');
				if (vmeta) {
	                vmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=0';
	                document.body.addEventListener('gesturestart', function () {
	                    vmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=0';
	                }, false);
	            }
	        }
		},
	}
}