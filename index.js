document
          .getElementById("bookingForm")
          .addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            let isValid = true;

            function validateField(fieldId, errorMessage) {
              let field = document.getElementById(fieldId);
              if (field.value.trim() === "") {
                field.classList.add("is-invalid");
                isValid = false;
              } else {
                field.classList.remove("is-invalid");
              }
            }

            // Validate all fields
            validateField("name", "Please enter your name.");
            validateField("checkIn", "Please select a check-in date.");
            validateField("checkOut", "Please select a check-out date.");
            validateField("roomType", "Please select a room type.");
            validateField("roomNumber", "Please enter a valid room number.");

            if (!isValid) return; // Stop if validation fails

            // Display data in modal
            document.getElementById("modalName").innerText =
              document.getElementById("name").value;
            document.getElementById("modalCheckIn").innerText =
              document.getElementById("checkIn").value;
            document.getElementById("modalCheckOut").innerText =
              document.getElementById("checkOut").value;
            document.getElementById("modalRoomType").innerText =
              document.getElementById("roomType").value;
            document.getElementById("modalRoomNumber").innerText =
              document.getElementById("roomNumber").value;

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