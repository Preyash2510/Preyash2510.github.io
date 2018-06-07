// JavaScript Document

$(document).ready(function() {
	"use strict";
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage'],
		navigation: true,
		autoScrolling: false,
		controlArrows: false,
		slidesNavigation: true,
		onSlideLeave: function(index, nextIndex, direction) {
    		$('.hi').removeClass('animated fadeInLeft');
  		},
  		afterSlideLoad: function(anchorLink, index) {
    		$('.hi').addClass('animated fadeInLeft');
  		},
		onLeave: function(index, nextIndex, direction) {
    		$('.hello').removeClass('animated fadeInUp');
  		},
  		afterLoad: function(anchorLink, index) {
    		$('.hello').addClass('animated fadeInUp');
  		},
	});
	$(".project").hover3d({
  selector: ".project__card",
  shine: true,
});
$(".project").hover3d({

  // selector for element
  selector      : null,

  // Perspective value for 3d space
  perspective   : 1000,

  // Mouse movement sensitivity
  sensitivity   : 20,

  // Default behavior is the element will follow the mouse, look like it facing the mouse
  invert        : false,

  // Add shining layer
  shine       : false,

  // Helper class when mouse hover in the element
  hoverInClass  : "hover-in",

  // Helper class when mouse hover Out the element
  hoverOutClass : "hover-out",

  // Helper class when the mouse is hovering the element
  hoverClass    : "hover-3d"
  
});
});
