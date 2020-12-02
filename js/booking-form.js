/**
 * on the booking form page initialisation the methods are attached to the page
 * elements --> Form submit
 */
$(document).on("pageinit", "#booking-form-page", function () {
  $("#register-book-form").on("click", function (event) {
    event.preventDefault();
    const validationErrors = validateBookForm();

    /* clean possible past errors messages*/
    $("#validation-book-form").html("");

    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        $("#validation-book-form").append("<p>" + error + "</p>");
      });

      $("#validation-book-form").show();
      return;
    }

    BOOK_REGISTRATION.name = $("#name-book-form").val().trim();
    BOOK_REGISTRATION.number_of_people = $("#number-of-people").val();
    BOOK_REGISTRATION.mobile = $("#mobile").val().trim();
    BOOK_REGISTRATION.unit = $("#week-units option:checked").val();
    BOOK_REGISTRATION.attending_on = $("[name=day-attend-on]:checked").val();
    BOOK_REGISTRATION.cost = $("#week-units option:checked").attr("data-price");
    BOOK_REGISTRATION.sms = $("#sms").prop("checked");

    $("#open-dialog-book-details").click();
    $("#reset-book-form").click();
  });
});

/**
 * Checks if there is any errors in the input data put by the user
 * @return {array} validation - an array with the errors messages if there is any
 */
function validateBookForm() {
  const validation = [];

  if ($("#name-book-form").val().trim().toLowerCase().length < 2) {
    validation.push("Your name must have be longer than 2 characters!");
    $("#name-book-form").focus();
    return validation;
  }

  const numberOfpeople = $("#number-of-people").val();

  if (numberOfpeople < 1) {
    $("#number-of-people").focus();
    validation.push("The number of people must be more than 0.");
    return validation;
  }

  const mobile = $("#mobile").val().trim();
  const mobileRegex = /^[0-9]\d{9}$/;

  if (mobile.length > 0 && !mobileRegex.test(mobile)) {
    validation.push("your mobile has to have 10 numbers.");
    $("#mobile").focus();
  }

  if (
    $("#sms").prop("checked") &&
    mobile.length < 10 &&
    !mobileRegex.test(mobile)
  ) {
    validation.push(
      "To receive SMS updates you must provide a valid mobile number."
    );
    $("#mobile").focus();
  }

  return validation;
}
