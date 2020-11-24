$(document).on("pagebeforeshow", "#user-dialog", function (event, data) {
  $(".user-booking", $(this)).text(USER_REGISTRATION.name);
  $(".user-mail", $(this)).text(USER_REGISTRATION.email);
  $(".user-camera", $(this)).text(USER_REGISTRATION.camera);

  $(".interest-items", $(this)).html("");
  USER_REGISTRATION.interests.forEach((interest) => {
    $(".interest-items", $(this)).append(
      "<li><strong>" + interest + "</strong></li>"
    );
  });
});
