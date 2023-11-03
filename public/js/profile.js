$(document).ready(function () {
  // $("#manage").attr("class", "active");
  $("#profile").attr("class", "active");
  $("#profile").attr("href", "#");
});
var onedit = false;
$(() => {
  $("#address_doc").click(function () {
    $("#address_doc_selector").click();
  });

  $("#comp_doc").click(function () {
    $("#comp_doc_selector").click();
  });

  $("#address_doc_selector").change(function () {
    $("#address_val").html($("#address_doc_selector").val());
  });
  $("#comp_doc_selector").change(function () {
    $("#comp_val").html($("#comp_doc_selector").val());
  });

  $("#edit").click(function () {
    $(this).hide()
    if (!onedit) {
      onedit = true;
      $("#editsrc").attr("src", "assets/img/Save.png");
      SetActiveAll();
    } else {
      onedit = false;
      if ($.trim($("#name").val()) == "") {
        $("#nameerr").html("Name can not be empty");
        return;
      }

      var form = $("#profileForm");
      var url = form.attr("action");
      $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success: function (data) {
          $("#alert").attr("class", "alert alert-success");
          $("#alert").html("Success! profile updated successfully");
          $("#alert").css("display", "inline");
          $("#editsrc").attr("src", "assets/img/profileeditbtn.png");
          SetActiveAll(true);
          setTimeout(function () {
            $("#alert").css("display", "none");
          }, 2000);
        },
        error: function (data) {
          $("#alert").attr("class", "alert alert-danger");
          $("#alert").html("Success! profile updated failed");
          $("#alert").css("display", "inline");
          $("#editsrc").attr("src", "assets/img/profileeditbtn.png");
          SetActiveAll(true);
          setTimeout(function () {
            $("#alert").css("display", "none");
          }, 2000);
        },
      });
    }
    $('.save_btn').show()
  });

  $("#country").change(function () {
    if ($("#country").val() == "select") {
      $("#state").html("<option value='select'>Select</option>");
      return;
    }
    $("#city").html("<option value='select'>Select</option>");
    $.ajax({
      type: "GET",
      url: "/state?id=" + $("#country").val(),
      success: function (data) {
        console.log(data);
        var totalOptions = "<option value='select'>Select</option>";
        data.response_msg.forEach((element) => {
          totalOptions +=
            "<option value='" + element.id + "'>" + element.name + "</option>";
        });
        $("#state").html(totalOptions);
      },
      error: function (data) {
        console.log(data);
      },
    });
  });

  $("#state").change(function () {
    if ($("#state").val() == "select") {
      $("#city").html("<option value='select'>Select</option>");
      return;
    }

    $.ajax({
      type: "GET",
      url: "/city?id=" + $("#state").val(),
      success: function (data) {
        console.log(data);
        var totalOptions = "<option value='select'>Select</option>";
        data.response_msg.forEach((element) => {
          totalOptions +=
            "<option value='" + element.id + "'>" + element.name + "</option>";
        });
        $("#city").html(totalOptions);
      },
      error: function (data) {
        console.log(data);
      },
    });
  });

  $("#licenseVerify").click(function () {
    window.location.href = "/record?license=" + $("#license").val();
  });

  $("#emailVerify").click(function () {
    if ($.trim($("#email").val()) == "") {
      $("#emailerr").html("Email can not be empty");
      return;
    }

    $.ajax({
      type: "GET",
      url: "/emailVerify?email=" + $.trim($("#email").val()),
      success: function (data) {
        $("#alert").attr("class", "alert alert-success");
        $("#alert").html(
          "A verification link has been sent to your email address"
        );
        $("#alert").css("display", "inline");
        setTimeout(function () {
          $("#alert").css("display", "none");
        }, 4000);
      },
      error: function (data) {
        $("#alert").attr("class", "alert alert-danger");
        $("#alert").html("Could not verify service down");
        $("#alert").css("display", "inline");
        setTimeout(function () {
          $("#alert").css("display", "none");
        }, 4000);
      },
    });
  });
});

function SetActiveAll(type = false) {
  var name = document.getElementById("name");
  //var email = document.getElementById("email");
  var city = document.getElementById("city");
  var country = document.getElementById("country");
  var state = document.getElementById("state");
  var zip = document.getElementById("zip");
  var address = document.getElementById("address");

  if (!type) {
    name.removeAttribute("readonly");
    //email.removeAttribute("readonly");
    city.removeAttribute("disabled");
    country.removeAttribute("disabled");
    state.removeAttribute("disabled");
    zip.removeAttribute("readonly");
    address.removeAttribute("readonly");
  } else {
    name.setAttribute("readonly", true);
    //email.setAttribute("readonly",true);
    city.setAttribute("readonly", true);
    zip.setAttribute("readonly", true);
    city.setAttribute("disabled", true);
    country.setAttribute("disabled", true);
    state.setAttribute("disabled", true);
    address.setAttribute("readonly", true);
  }
}

var Webflow = Webflow || [];
Webflow.push(function () {
  var $body = $(document.body);
  var scrollPosition = 0;

  $('[scroll="disable"]').on("click", function () {
    var oldWidth = $body.innerWidth();
    scrollPosition = window.pageYOffset;
    $body.css("overflow", "hidden");
    $body.css("position", "fixed");
    $body.css("top", `-${scrollPosition}px`);
    $body.width(oldWidth);
  });
  $('[scroll="enable"]').on("click", function () {
    if ($body.css("overflow") != "hidden") {
      scrollPosition = window.pageYOffset;
    }
    $body.css("overflow", "");
    $body.css("position", "");
    $body.css("top", "");
    $body.width("");
    $(window).scrollTop(scrollPosition);
  });
  $('[scroll="both"]').on("click", function () {
    if ($body.css("overflow") !== "hidden") {
      var oldWidth = $body.innerWidth();
      scrollPosition = window.pageYOffset;
      $body.css("overflow", "hidden");
      $body.css("position", "fixed");
      $body.css("top", `-${scrollPosition}px`);
      $body.width(oldWidth);
    } else {
      $body.css("overflow", "");
      $body.css("position", "");
      $body.css("top", "");
      $body.width("");
      $(window).scrollTop(scrollPosition);
    }
  });
});

var finance = "no";
var famla = "no";
function financial() {
  if (finance == "no") {
    finance = "yes";
    document
      .getElementById("financeYes")
      .setAttribute("class", "buttonselected");
    document
      .getElementById("financeNo")
      .setAttribute("class", "buttonnonselected");
    document.getElementById("financeInput").value = finance;
  } else {
    finance = "no";
    document
      .getElementById("financeYes")
      .setAttribute("class", "buttonnonselected");
    document
      .getElementById("financeNo")
      .setAttribute("class", "buttonselected");
    document.getElementById("financeInput").value = finance;
  }
}

function family(e) {
  //e.preventDefault();
  if (famla == "no") {
    famla = "yes";
    document
      .getElementById("familyYes")
      .setAttribute("class", "buttonselected");
    document
      .getElementById("familyNo")
      .setAttribute("class", "buttonnonselected");
    document.getElementById("familyInput").value = famla;
  } else {
    famla = "no";
    document
      .getElementById("familyYes")
      .setAttribute("class", "buttonnonselected");
    document.getElementById("familyNo").setAttribute("class", "buttonselected");
    document.getElementById("familyInput").value = famla;
  }
}

$(document).ready(function() {
    $(".leftdash .leftslideicon").click(function(e) {
        e.preventDefault();
        $(".leftdash").toggleClass("closePan");
        //alert('k');
    });
});

$(document).ready(function () {
  $("#profile").attr("class", "active");
  $("#profile").attr("href", "#");
});
