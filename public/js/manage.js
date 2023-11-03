$(document).ready(function () {
    $("#runningpackageslide").bxSlider({
      mode: "horizontal",
      moveSlides: 1,
      auto: true,
      slideMargin: 10,
      infiniteLoop: true,
      slideWidth: 400,
      minSlides: 3,
      maxSlides: 1,
      pager: false,
      speed: 800,
    });

    $(".bx-viewport").css("height", "420px");
    $("#manage_employees").attr("class", "active");
    $("#manage_employees").attr("href", "#");

    var abitems = $("div.refund");
    if (abitems.length > 4) {
      abitems
        .parent()
        .parent(".walletrefund")
        .append(
          '<div class="seemorebtn"><a href="#" class="morebbBoxab"> See More </a></div>'
        );
      $(".morebbBoxab").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass(".fullopen")) {
          $(this).removeClass(".fullopen");
          $(this)
            .parent()
            .parent(".walletrefund")
            .children(".forheight")
            .css("height", 266);
          $(this).html("See More ");
          if (abitems.length > 8) {
            $(".forheight").mCustomScrollbar("destroy");
          }
        } else {
          $(this).addClass(".fullopen");
          $(this)
            .parent()
            .parent(".walletrefund")
            .children(".forheight")
            .css("height", "auto");
          $(this).html(" See Less ");
          if (abitems.length > 8) {
            $(".forheight").mCustomScrollbar();
          }
        }
      });
    }
    if (abitems.length > 8) {
      $(".forheight").mCustomScrollbar();
      setTimeout(function () {
        $(".forheight").mCustomScrollbar("destroy");
      }, 500);
    }
  });