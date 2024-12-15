"use strict";

$(document).ready(() => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	$("#arrival_date").focus();

	$("#reservation_form").submit((event) => {
		let isValid = true;

		const arrivalDate = $("#arrival_date").val().trim();
		const nights = $("#nights").val().trim();
		const name = $("#name").val().trim();
		const email = $("#email").val().trim();
		const phone = $("#phone").val().trim();

		$("span").text("");

		if (!arrivalDate) {
			showError("#arrival_date", "Arrival date is required");
			isValid = false;
		}
		if (!nights || isNaN(nights)) {
			showError("#nights", "Number of nights must be numeric");
			isValid = false;
		}
		if (!name) {
			showError("#name", "Name is required");
			isValid = false;
		}
		if (!email || !emailPattern.test(email)) {
			showError("#email", "Enter a valid email address");
			isValid = false;
		}
		if (!phone) {
			showError("#phone", "Phone number is required");
			isValid = false;
		}

		if (!isValid) {
			event.preventDefault();
		} else {
			$("#arrival_date").val(arrivalDate);
			$("#nights").val(nights);
			$("#name").val(name);
			$("#email").val(email);
			$("#phone").val(phone);
		}
	});

	function showError(selector, message) {
		$(selector).next("span").text(message);
	}
});
