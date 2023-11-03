function Approve(token) {
  window.location.href = "/approveEmployee?token=" + token;
}
function Reject(token) {
  window.location.href = "/rejectEmployee?token=" + token;
}

$(document).ready(function () {
  // $("#manage").attr("class", "active");
  $("#manage_employees").attr("class", "active");
  $("#manage_employees").attr("href", "#");
});

$(() => {
  $("#coverSelector").click(function () {
    $("#fileInput").click();
  });
  $("#fileInput").change(function () {
    $("#imageName").html($("#fileInput").val());
    $("#csvform").submit();
  });
});

function ChangeRole(token) {
  console.log("ChangedRole");
  var val = document.getElementById(token).value;
  $.ajax({
    method: "GET",
    url: "/addRole?token=" + token + "&role=" + val,
    success: function (data) {
      console.log("Changed");
    },
    error: function (data) {
      console.log("Changed unsuccessful");
    },
  });
}
