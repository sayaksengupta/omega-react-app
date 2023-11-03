$(document).ready(function() {
    $('.dashtab a').click(function(event) {
        event.preventDefault();
        var thisid = $(this).attr('href');
        $(".dashtab a").removeClass('active');
        $(this).addClass('active');
        $('.dashtabdiv').css('display', 'none');
        $(thisid).css('display', 'block');
    });
});

$(() => {
    $("#buy").click(function () {
      $("#launcher").click();
    });

    if (urlParam("ecn") == "yes") {
      $("#alert").attr("class", "alert alert-danger");
      $("#alert").css("display", "block");
      $("#alert").html(
        "Your wallet does not have enough balance to purchase <br> <strong>add some money to your wallet</strong>"
      );

      setTimeout(() => {
        $("#alert").css("display", "none");
      }, 4000);
    }
  });

  function urlParam(name) {
    var results = new RegExp("[\?&]" + name + "=([^&#]*)").exec(
      window.location.href
    );
    return results[1] || 0;
  }

  $(document).ready(function () {
    // $("#manage").attr("class", "active");
    $("#notification").attr("class", "active");
    $("#notification").attr("href", "#");
  });

  function upgrade(token) {
    window.location.href = "/upgradePlanNotification?token=" + token;
  }
  function cancelUpgrade(token) {
    window.location.href = "/cancelPlanNotification?token=" + token;
  }