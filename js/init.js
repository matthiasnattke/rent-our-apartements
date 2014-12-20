
(function($) {

	var settings = {

		// Fullscreen?
			fullScreen: true,
			

	};

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			sectionTransitionState = false;
        
        // Resize our element.
        var resizeTimeout, resizeScrollTimeout;
            
            $window.resize(function() {
                
                window.clearTimeout(resizeTimeout);
                
                    resizeTimeout = window.setTimeout(function() {
                        
                        // Resize fullscreen elements.
							if (settings.fullScreen) {
                                
								$('.fullscreen').each(function() {
								
									var $t = $(this),
										x = Math.max(100, Math.round(($window.height())) - 180);

									$t.css('min-height', x);
								});
							}
					}, 100);

            });
				
		// Trigger resize
        $window.load(function() {
            
            $window
                .trigger('resize')	
        });

	});
	
})(jQuery);