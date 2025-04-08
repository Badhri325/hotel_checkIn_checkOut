// Room prices per night
const roomPrices = {
  "Standard Room": 1000,
  "Family Room": 1500,
  "Single Room": 800,
  "Luxury Room": 2500,
  "Deluxe Room": 2000,
};

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    function validateField(fieldId) {
      let field = document.getElementById(fieldId);
      if (field.value.trim() === "") {
        field.classList.add("is-invalid");
        isValid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    }

    // Validate all fields
    validateField("name");
    validateField("checkIn");
    validateField("checkOut");
    validateField("roomType");
    validateField("roomNumber");

    if (!isValid) return; // Stop if validation fails

    // Get values
    const name = document.getElementById("name").value;
    const checkIn = new Date(document.getElementById("checkIn").value);
    const checkOut = new Date(document.getElementById("checkOut").value);
    const roomType = document.getElementById("roomType").value;
    const roomNumber = document.getElementById("roomNumber").value;

    // Calculate days
    const timeDiff = checkOut - checkIn;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (days <= 0) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    // Calculate total cost
    const costPerDay = roomPrices[roomType];
    const totalAmount = days * costPerDay;

    // Display data in modal
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalCheckIn").innerText = checkIn.toDateString();
    document.getElementById("modalCheckOut").innerText = checkOut.toDateString();
    document.getElementById("modalRoomType").innerText = roomType;
    document.getElementById("modalRoomNumber").innerText = roomNumber;
    document.getElementById("modalDays").innerText = days;
    document.getElementById("modalAmount").innerText = `₹${totalAmount}`;

    // Show Bootstrap Modal
    let bookingModal = new bootstrap.Modal(
      document.getElementById("bookingModal")
    );
    bookingModal.show();

    // Reset form after submission
    this.reset();
  });

// Remove validation error on input change
document.querySelectorAll("input, select").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      this.classList.remove("is-invalid");
    }
  });
});



// input OnFocus and OnBlur
const inputs = document.querySelectorAll('.form-control.custom-input');

inputs.forEach((input) => {
  input.addEventListener('focus', function () {
    input.style.borderColor = '#0d6efd';
    input.style.boxShadow = '0 0 0 0.25rem rgba(13, 21, 253, 0.25)';
  });

  input.addEventListener('blur', function () {
    input.style.borderColor = '#fd0d0d';
    input.style.boxShadow = '0 0 0 0.25rem rgba(253, 13, 13, 0.25)';
  });
});
