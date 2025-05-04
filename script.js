document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const match = document.getElementById("match").value;
    const seats = document.getElementById("seats").value;
  
    const confirmation = document.getElementById("confirmation");
  
    if (name && match && seats) {
      confirmation.innerHTML = `🎉 Thank you, <strong>${name}</strong>!<br>
      You have successfully booked <strong>${seats}</strong> seat(s) for <strong>${match}</strong>.`;
    } else {
      confirmation.innerHTML = "❌ Please fill all fields.";
    }
  });
  