"use strict";

$(document).ready(() => {
	// Preload images
	$("#image_list a").each((index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});

	// Set up event handlers for links
	$("#image_list a").click((evt) => {
		const link = evt.currentTarget;

		// Get the new image URL and caption
		const imageURL = $(link).attr("href");
		const caption = $(link).attr("title");

		// Fade out the current image and caption
		$("#image, #caption").fadeOut(1000, () => {
			// Once the fade-out is complete, update the image and caption
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);

			// Fade in the new image and caption
			$("#image, #caption").fadeIn(1000);
		});

		// Cancel the default action of the link
		evt.preventDefault();
	});

	// Move focus to first thumbnail
	$("li:first-child a").focus();
});
