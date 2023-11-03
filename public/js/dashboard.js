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

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
  var loadproFile = function(event) {
    var output = document.getElementById('changeprofile');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
  
  $(document).ready(function() {
    $(".leftdash .leftslideicon").click(function(e) {
        e.preventDefault();
        $(".leftdash").toggleClass("closePan");
        //alert('k');
    });
});

$(document).ready(function () {
    $("#prfImage").change(function () {
      $("#profilePictureForm").submit();
    });

    $("#coverImg").change(function () {
      $("#coverPictureForm").submit();
    });
  });

  function ChangeProfilePicture() {}

  $(() => {
    $("#linkSubmit").click(function () {
      if ($.trim($("#link").val()) == "") {
        $("#linkerr").html("Please enter a link address");
        return;
      }

      $("#linkForm").submit();
    });

    $("#introSubmit").click(function () {
      if ($.trim($("#intro").val()) == "") {
        $("#introerr").html("Please enter some introduction");
        return;
      }

      $("#introForm").submit();
    });

    $("#investSubmit").click(function () {
      if ($.trim($("#invest").val()) == "") {
        $("#investerr").html("Please enter some about your plan benifts");
        return;
      }

      $("#investForm").submit();
    });

    $("#offerSubmit").click(function () {
      if ($.trim($("#offer").val()) == "") {
        $("#offererr").html("Please enter something about your offer");
        return;
      }
      if ($.trim($("#offerTitle").val()) == "") {
        $("#offertitleerr").html(
          "Please enter a title related to your offer"
        );
        return;
      }

      $("#offerForm").submit();
    });
  });

  var modal = document.getElementById("myModalAddLink");

  $(() => {
    $("#myBtn").click(function () {
      $("#myModalAddLink").css("display", "block");
    });
    $("#cancelLinkModal").click(function () {
      $("#myModalAddLink").css("display", "none");
    });

    $("#addDetails").click(function () {
      $("#myModalAddIntro").css("display", "block");
    });
    $("#cancelIntroModal").click(function () {
      $("#myModalAddIntro").css("display", "none");
    });

    $("#addInvestPlan").click(function () {
      $("#myModalAddInvest").css("display", "block");
    });
    $("#cancelInvestModal").click(function () {
      $("#myModalAddInvest").css("display", "none");
    });

    $("#addOfferPlan").click(function () {
      $("#myModalAddOffer").css("display", "block");
    });
    $("#cancelOfferModal").click(function () {
      $("#myModalAddOffer").css("display", "none");
    });
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  $(document).ready(function () {
    // $("#manage").attr("class", "active");
    $("#dashboard").attr("class", "active");
    $("#dashboard").attr("href", "#");
  });



