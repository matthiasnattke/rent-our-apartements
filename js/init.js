
(function($) {

	var settings = {

		// Fullscreen?
			fullScreen: true,
			

	};

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$all = $body.add($header),
			sectionTransitionState = false;

		

			// Resize.
				var resizeTimeout, resizeScrollTimeout;
				
				$window.resize(function() {

					window.clearTimeout(resizeTimeout);

					resizeTimeout = window.setTimeout(function() {

						// Resize fullscreen elements.
							if (settings.fullScreen) {
								$('.fullscreen').each(function() {
								
									var $t = $(this),
										$c = $t.children('main'),
										x = Math.max(100, Math.round(($window.height()) / 2) - 90);

									$t
										.css('padding-top', x)
										.css('padding-bottom', x);
								
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