"use strict"
$(document).ready(function () {
  $(".toggle-btn").click(function () {
    const hiddenContent = $(this).prev(".hidden-content");
    if (hiddenContent.is(":visible")) {
      hiddenContent.slideUp();
      $(this).text("Show more");
    } else {
      hiddenContent.slideDown();
      $(this).text("Show less");
    }
  });
});
