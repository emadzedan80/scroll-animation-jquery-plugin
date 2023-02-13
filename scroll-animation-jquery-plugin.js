/* 
Plugin name:  Scroll Animation jQuery Plugin 
Version:      1.1.0
Date Created: 1 Jan 2023
Author:       Emad Morris Zedan
Author URL:   https://www.geminitutorials.com
*/
(function($){
      $.fn.scrollFadeInOutAnimation = function(options){
            var height = this.height();
            if(height < 275){
                  height = 275;
            }
            var settings = $.extend({
                  "time" : "1s",
                  "ease" : "ease-in-out"
            }, options);
            this.css({
                  transition: ("opacity " + settings.time + " " + settings.ease)
            });
            //Scroll Down object
            if ($(window).scrollTop() >=  (this.offset().top - (height * 2))) {
                  return this.css({
                        opacity: 1
                  });
            }else {
                  //Scroll Up object
                  if ($(window).scrollTop() < (this.offset().top - (height * 2))) {
                        return this.css({
                              opacity: 0
                        });
                  }
            }
      };
}(jQuery));