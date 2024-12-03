$(document).ready(function () {
  $("#image-gallery-list a").each(function () {
    const image = new Image();
    image.src = $(this).attr("href");
  });

  $("#image-gallery-list a").click(function (evt) {
    const imageURL = $(this).attr("href");
    const caption = $(this).attr("title");

    $("#image-gallery-image").attr("src", imageURL);
    $("#image-gallery-caption").text(caption);

    evt.preventDefault();
  });

  $("#image-gallery-list a:first").focus();
});
