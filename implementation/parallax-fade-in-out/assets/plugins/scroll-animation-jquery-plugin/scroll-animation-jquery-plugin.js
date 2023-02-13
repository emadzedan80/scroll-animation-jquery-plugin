/* 
Plugin name:  Scroll Animation jQuery Plugin 
Version:      3.0.0
Date Created: 1 Jan 2023
Author:       Emad Morris Zedan
Author URL:   https://www.geminitutorials.com
*/
(function($){
      $.fn.scrollFadeInOutAnimation = function(options){
            let height = this.height();
            if(height < 275){
                  height = 275;
            }
            let settings = $.extend({
                  "time" : "1s",
                  "ease" : "ease-in-out",
                  "breakpointMin" : 1400,
                  "breakpointMax" : 320,
                  "breakpointFrom" : 320,
                  "breakpointTo" : 360
            }, options);
            this.css({
                  transition: ("opacity " + settings.time + " " + settings.ease)
            });
            //Scroll Down object
            if ($(window).width() >= settings.breakpointMin) {
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
                  return false;
            }else if ($(window).width() >= settings.breakpointFrom && $(window).width() < settings.breakpointTo) { 
                  if(settings.breakpointFrom == "1201" && settings.breakpointTo == "1400"){
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
                        return false;
                  }else if(settings.breakpointFrom == "993" && settings.breakpointTo == "1200"){
                        if ($(window).scrollTop() >=  (this.offset().top - (height * 1.6))) {
                              return this.css({
                                    opacity: 1
                              });
                        }else {
                              //Scroll Up object
                              if ($(window).scrollTop() < (this.offset().top - (height * 1.6))) {
                                    return this.css({
                                          opacity: 0
                                    });
                              }
                        }
                        return false;
                  }else if(settings.breakpointFrom == "769" && settings.breakpointTo == "992"){
                        if ($(window).scrollTop() >=  (this.offset().top - (height * 1.5))) {
                              return this.css({
                                    opacity: 1
                              });
                        }else {
                              //Scroll Up object
                              if ($(window).scrollTop() < (this.offset().top - (height * 1.5))) {
                                    return this.css({
                                          opacity: 0
                                    });
                              }
                        }
                        return false;
                  }else if(settings.breakpointFrom == "577" && settings.breakpointTo == "768"){
                        if ($(window).scrollTop() >=  (this.offset().top - (height * 1.25))) {
                              return this.css({
                                    opacity: 1
                              });
                        }else {
                              //Scroll Up object
                              if ($(window).scrollTop() < (this.offset().top - (height * 1.25))) {
                                    return this.css({
                                          opacity: 0
                                    });
                              }
                        }
                        return false;
                  }
            }
            return false;
      };
}(jQuery));