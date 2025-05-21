document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("submit_appointment.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(data => {
      if (data === "success") {
        document.getElementById("formMessage").textContent = "Appointment submitted successfully!";
        document.getElementById("formMessage").style.color = "green";
        this.reset();
      } else {
        document.getElementById("formMessage").textContent = "There was an error. Try again.";
        document.getElementById("formMessage").style.color = "red";
      }
    })
    .catch(error => {
      document.getElementById("formMessage").textContent = "Something went wrong.";
      document.getElementById("formMessage").style.color = "red";
    });
});
