/**
 * When the user registration pages initiates it attaches methods to the page
 * elements.
 *
 */
$(document).on("pageinit", "#registration-page", function () {
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

    /* clean possible past errors messages */
    $("#validation").html("");

    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        $("#validation").append("<p>" + error + "</p>");
      });

      $("#validation").show();
      return;
    }

    USER_REGISTRATION.name = $("#name").val().trim();
    USER_REGISTRATION.email = $("#email").val().trim();
    USER_REGISTRATION.camera =
      $("[name=camera-type-radio]:checked").val() + " camera";

    USER_REGISTRATION.interests = [];

    $("#interestedIn input:checked").each(function (index) {
      if ($(this).val() !== "other") {
        USER_REGISTRATION.interests.push($(this).val());
      } else if ($(this).val() === "other") {
        USER_REGISTRATION.interests.push($("#txtOther").val());
      }
    });

    $("#open-dialog").click();

    $("#reset-form-button").click();
  });

  $("#reset-form-button").click(function () {
    $("#chkOther").prop("checked", false).checkboxradio("refresh");
    $("#divOther").hide();
  });
});

/**
 * Checks if there is any errors in the input data put by the user
 * @return {array} validation - an array with the errors messages if there is any
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
