$(document).ready(function () {
      //On Loaded
      onload();
      function onload(){
            //alert("Loaded");
      }
      //End of on Loaded
      //On Resized
      $(window).resize(function () {
            //alert("Resized");
            onload();
      });
      //End of on Resized
      //On Scrolled
      $(window).scroll(function (event) {
            //Scroll Page Elements Fade On Out
            const pageElementsFadeOnOutScroll = [$("#test-scroll1"), $("#test-scroll2"), $("#test-scroll3"), $("#test-scroll4")];
            pageElementsFadeOnOutScroll.forEach(scrollPageElementsFadeOnOutScroll);
            function scrollPageElementsFadeOnOutScroll(item) {
                  item.scrollFadeInOutAnimation({
                        "breakpointMin" : 1400
                  });
                  item.scrollFadeInOutAnimation({
                        "breakpointFrom" : 1201,
                        "breakpointTo" : 1400
                  });
                  item.scrollFadeInOutAnimation({
                        "breakpointFrom" : 993,
                        "breakpointTo" : 1200
                  });
                  item.scrollFadeInOutAnimation({
                        "breakpointFrom" : 769,
                        "breakpointTo" : 992
                  });
                  item.scrollFadeInOutAnimation({
                        "breakpointFrom" : 577,
                        "breakpointTo" : 768
                  });
            }
            //End of Scroll Page Elements Fade On Out
            return false;
      });
      //End of on Scrolled
});