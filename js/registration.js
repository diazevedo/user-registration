$(document).on("pageinit", "#registration-page", function () {
  // Hide Others Areas until it be checked

  $("#chkOther").on("change", function (event) {
    if (this.checked) {
      $("#divOther").show();
      $("#txtOther").val("").focus();
    } else {
      $("#divOther").hide();
    }
  });

  $("form").on("submit", function (event) {
    event.preventDefault();
    const validationErrors = validateFormData();

    /* clean possible past errors messages*/
    $("#validation").html("");

    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        $("#validation").append("<p>" + error + "</p>");
      });

      $("#validation").show();
      return;
    }
    $("#open-dialog").click();

    $("#reset-form-button").click();
  });

  $("#reset-form-button").click(function () {
    $("#chkOther").prop("checked", false).checkboxradio("refresh");
    $("#divOther").hide();
  });
});

/**
 * To validate the data entered into form
 */
function validateFormData() {
  const validation = [];

  if ($("#name").val().trim().toLowerCase().length < 2) {
    validation.push("Your name must have be longer than 2 characters!");
  }

  const email = $("#email").val().trim();

  if (email.length === 0) {
    validation.push("Please enter valid an email address!");
  }

  if (email.indexOf("@") == -1) {
    validation.push("Your email address does not contain an '@' sign!");
  }

  if (email.indexOf(".", email.indexOf("@")) == -1) {
    validation.push(
      "Your email address does not contain an '.' after the '@' sign!"
    );
  }

  const emailConfirmation = $("#email-confirmation").val().trim().toLowerCase();

  if (email.localeCompare(emailConfirmation) !== 0) {
    validation.push("Your email addresses do not match!");
  }

  if ($("#interestedIn input:checked").length === 0)
    validation.push("You must select at least ONE area of interest!");

  if (
    $("#chkOther").prop("checked") &&
    $("#txtOther").val().trim().length < 5
  ) {
    validation.push(
      "You must define your other area of interest and it has to be longer than 5 characteres."
    );
  }

  return validation;
}

function onRegisterClick() {
  var str =
    "Thank you " +
    name2 +
    " for registering!" +
    "<br />Your mail address is: " +
    email2;

  document.getElementById("dialogAns").innerHTML = str;
}
