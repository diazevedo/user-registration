$(document).on("pagebeforeshow", "#booking-details", function (event, data) {
  $(".user-booking").text(BOOK_REGISTRATION.name);
  $(".unit-details").text(BOOK_REGISTRATION.unit);
  $(".attending-on").text(BOOK_REGISTRATION.attending_on);
  $(".unit-cost").text("$" + BOOK_REGISTRATION.cost);
  $(".total-cost").text(
    "$" + BOOK_REGISTRATION.cost * BOOK_REGISTRATION.number_of_people
  );
  $(".number-of-people-on").text(BOOK_REGISTRATION.number_of_people);

  if (BOOK_REGISTRATION.sms) {
    $(".user-mobile").text(BOOK_REGISTRATION.mobile);
    $(".receive-sms").show();
  } else {
    $(".no-receive-sms").show();
  }
});
