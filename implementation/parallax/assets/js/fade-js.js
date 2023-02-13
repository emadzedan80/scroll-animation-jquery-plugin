$(document).ready(function () {
      $("#title").text(publicVarFade);
      $(window).scroll(function (event) {
            const pageElementsFadeInOut = [$(".scroll1"), $(".scroll2"), $(".scroll3")];
            pageElementsFadeInOut.forEach(ElementsFadeInOut);
            function ElementsFadeInOut(element) {
                  element.scrollFadeInOutAnimation();
            }
            return false;
      });
});