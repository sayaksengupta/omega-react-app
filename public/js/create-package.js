$(() => {
    $("#coverSelector").click(function () {
      $("#fileInput").click();
    });
    $("#fileInput").change(function () {
      $("#imageName").html($("#fileInput").val());
    });

    $("#submitPackage").click(function () {
      if ($.trim($("#name").val()) == "") {
        $("#nameerr").html("Enter your package name");
        return;
      }

      if (
        $.trim($("#price").val()) == "" ||
        isNaN($("#price").val()) ||
        $("#price").val() <= 0
      ) {
        $("#priceerr").html(
          "Enter a valid package price must be greater than 0"
        );
        return;
      }

      $("#packageForm").submit();
    });

    if ($.urlParam("success") == "yes") {
      $("#alert").css("display", "block");
      $("#alert").html("Package created successfully");

      setTimeout(() => {
        $("#alert").css("display", "none");
      }, 4000);
    }
  });

  $.urlParam = function (name) {
    var results = new RegExp("[\?&]" + name + "=([^&#]*)").exec(
      window.location.href
    );
    return results[1] || 0;
  };

  $(document).ready(function () {
    $("#manage").attr("class", "active");
    $("#create_package").attr("class", "active");
    $("#create_package").attr("href", "#");
  });
