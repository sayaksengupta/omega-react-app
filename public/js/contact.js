$(document).ready(function () {});

$(document).ready(function () {
    $(".leftdash .leftslideicon").click(function (e) {
      e.preventDefault();
      $(".leftdash").toggleClass("closePan");
      //alert('k');
    });
  });

  $(document).ready(function () {
    // $("#manage").attr("class", "active");
    $("#contact_us").attr("class", "active");
    $("#contact_us").attr("href", "#");
  });