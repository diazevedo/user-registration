$(document).on("pagebeforeshow", "#user-dialog", function (event, data) {
  console.log(USER_REGISTRATION);
  $(".user-booking", $(this)).text(USER_REGISTRATION.name);
  $(".user-mail", $(this)).text(USER_REGISTRATION.email);
  $(".user-camera", $(this)).text(USER_REGISTRATION.camera);

  USER_REGISTRATION.interests.forEach((interest) => {
    $(".interest-items", $("#user-details-dialog")).append(
      "<li><strong>" + interest + "</strong></li>"
    );
  });
});
