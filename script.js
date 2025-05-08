document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const match = document.getElementById("match").value;
  const seats = document.getElementById("seats").value;
  const confirmation = document.getElementById("confirmation");

  if (name && match && seats) {
    confirmation.style.display = "block";
    confirmation.style.color = "#32CD32";
    confirmation.innerHTML = `
      ✅ <strong>Booking Confirmed!</strong><br>
      <strong>${name}</strong>, your <strong>${seats}</strong> seat(s) for <strong>${match}</strong> are booked. Enjoy the match! 🏏
    `;
    this.reset();
  } else {
    confirmation.style.display = "block";
    confirmation.style.color = "#ff4c4c";
    confirmation.innerHTML = "❌ Please fill in all fields before submitting.";
  }
});
