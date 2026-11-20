(function ($) {
	"use strict";

	var videoStopTimer;

	//---------------------------------------------
	//Nivo slider
	//---------------------------------------------
	$('#nivoslider').nivoSlider({
		effect: 'random',
		slices: 15,
		boxCols: 10,
		boxRows: 10,
		animSpeed: 500,
		pauseTime: 5000,
		startSlide: 0,
		directionNav: true,
		controlNavThumbs: false,
		pauseOnHover: false,
		manualAdvance: false,
		afterChange: function () {
			var slider = $('#nivoslider');
			var vars = slider.data('nivo:vars');

			// Clear any pending video stop timer
			if (videoStopTimer) {
				clearTimeout(videoStopTimer);
				videoStopTimer = null;
			}

			// Video slide is index 1 (2nd slide)
			if (vars.currentSlide === 1) {
				videoStopTimer = setTimeout(function () {
					// Stop the slider after 4 seconds of being on the video slide
					var sliderData = slider.data('nivoslider');
					if (sliderData && slider.data('nivo:vars').currentSlide === 1) {
						sliderData.stop();
					}
				}, 4000);
			} else {
				// If we moved away from the video slide, ensure it's started
				var sliderData = slider.data('nivoslider');
				if (sliderData) {
					sliderData.start();
				}
			}
		},
		afterLoad: function () {
			// Check if starting slide is video
			var slider = $('#nivoslider');
			var vars = slider.data('nivo:vars');
			if (vars.currentSlide === 1) {
				videoStopTimer = setTimeout(function () {
					var sliderData = slider.data('nivoslider');
					if (sliderData && slider.data('nivo:vars').currentSlide === 1) {
						sliderData.stop();
					}
				}, 4000);
			}
		}
	});

	// Pause slider on hover or interaction with video container
	$(document).on('mouseenter click', '.video-banner-container', function () {
		var sliderData = $('#nivoslider').data('nivoslider');
		if (sliderData) {
			sliderData.stop();
		}
	});

	// Resume slider when clicking direction navigation
	$(document).on('click', '.nivo-directionNav a, .nivo-controlNav a', function () {
		var sliderData = $('#nivoslider').data('nivoslider');
		if (sliderData) {
			sliderData.start();
		}
	});
})(jQuery); 