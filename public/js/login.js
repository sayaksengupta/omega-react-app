var userType = "Investor";
$(() => {
  $("#submitRegister").click(function (ev) {
    $("#submitRegister").prop("disabled", true);
    $("#submitRegister").val("Signing up...");
    $("#errNameRegister").html("");
    $("#errEmailRegister").html("");
    $("#errPasswordRegister").html("");
    $("#errConfirmRegister").html("");
    $("#errPhoneRegister").html("");
    $("#userTypeRegister").val(userType);
    var form = $("#submitFormRegister");
    var url = form.attr("action");
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function (data) {
        console.log(data);
        window.location = "/" + data.response_data;
      },
      error: function (data) {
        console.log(data);
        $("#submitRegister").prop("disabled", false);
        $("#submitRegister").val("Sign Up");

        if (data.responseJSON.response_type == "email") {
          $("#errEmailRegister").html(data.responseJSON.response_data);
        }
        if (data.responseJSON.response_type == "name") {
          $("#errNameRegister").html(data.responseJSON.response_data);
        }
        if (data.responseJSON.response_type == "password") {
          $("#errPasswordRegister").html(data.responseJSON.response_data);
        }
        if (data.responseJSON.response_type == "confirm") {
          $("#errConfirmRegister").html(data.responseJSON.response_data);
        }
        if (data.responseJSON.response_type == "phone") {
          $("#errPhoneRegister").html(data.responseJSON.response_data);
        }
      },
    });
  });

  $("#Advisor").click(function () {
    userType = "Advisor";
    $("#as").html("Signing up as <strong>Advisor</strong>");
    $("#loginSignup").css("display", "block");
    $("#selection").css("display", "none");
  });
  $("#Investor").click(function () {
    userType = "Investor";
    $("#as").html("Signing up as <strong>Investor</strong>");
    $("#loginSignup").css("display", "block");
    $("#selection").css("display", "none");
  });
  $("#Organization").click(function () {
    userType = "Organization";
    $("#as").html("Signing up as <strong>Organization</strong>");
    $("#loginSignup").css("display", "block");
    $("#selection").css("display", "none");
  });
});

$(() => {
  $("#submitLogin").click(function (ev) {
    $("#submitLogin").prop("disabled", true);
    $("#submitLogin").val("Signing in...");

    $("#errEmailLogin").html("");
    $("#errPasswordLogin").html("");

    var form = $("#submitFormLogin");
    var url = form.attr("action");
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function (data) {
        console.log(data);
        window.location = "/" + data.response_data;
      },
      error: function (data) {
        console.log(data);
        $("#submitLogin").prop("disabled", false);
        $("#submitLogin").val("Sign In");

        if (data.responseJSON.response_type == "email") {
          $("#errEmailLogin").html(data.responseJSON.response_data);
        }

        if (data.responseJSON.response_type == "password") {
          $("#errPasswordLogin").html(data.responseJSON.response_data);
        }
      },
    });
  });

  $("#advisorLink").click(function () {
    window.location.href = "/advisor";
  });
});

AOS.init();
$(document).ready(function () {
  $(".logintab a").click(function (e) {
    e.preventDefault();
    var thisid = $(this).attr("href");
    $(".logintab a").removeClass("active");
    $(this).addClass("active");
    $(".logtabs").css("display", "none");
    $(thisid).css("display", "block");
  });
  $(".foralltab").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    $(".foralltab").removeClass("active");
    $(this).addClass("active");
    $(".tabs").css("display", "none");
    $(id).css("display", "block");
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#tabsections").offset().top,
      },
      1000
    );
  });
});
