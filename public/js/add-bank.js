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

$('.show__account--number').click(function(){

if($('.account-number').attr('type') == 'password'){
$('.account-number').attr('type', 'text');
$('.pword_icon').removeClass('fa-eye-slash');
$('.pword_icon').addClass('fa-eye');
}
else{
$('.account-number').attr('type', 'password');
$('.pword_icon').removeClass('fa-eye');
$('.pword_icon').addClass('fa-eye-slash');
}
});

$(document).ready(function () {
    // $("#manage").attr("class", "active");
    $("#wallet").attr("class", "active");
    $("#wallet").attr("href", "#");
  });

  $(() => {
    $("#sub").click(function () {
      $("#ibanerr").html("");
      $("#bank_numbererr").html("");
      $("#branch_iderr").html("");
      $("#account_numbererr").html("");

      if ($.trim($("#iban").val()) == "") {
        $("#ibanerr").html("Please enter your iban");
        return;
      }
      if ($.trim($("#bank_number").val()) == "") {
        $("#bank_numbererr").html("Please enter your bank number");
        return;
      }
      if ($.trim($("#branch_id").val()) == "") {
        $("#branch_iderr").html("Please enter your branch id code");
        return;
      }
      if ($.trim($("#account_number").val()) == "") {
        $("#account_numbererr").html("Please enter your account number");
        return;
      }
      if ($.trim($("#digit").val()) == "") {
        $("#digiterr").html("Please enter your check digit");
        return;
      }
      console.log("Coming here");
      $("#bankForm").submit();
    });
  });

  function SubmitBankForm() {
    //document.getElementById("bankForm").submit();
  }