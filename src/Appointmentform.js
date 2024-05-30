$(function () {
  // Datepicker for Date of Birth field
  $("#date-of-birth").datepicker({
    dateFormat: "dd/mm/yy",
    maxDate: 0,
    changeYear: true,
    yearRange: "-100:+0"
  });

  // Datepicker for Preferred Appointment Date field
  $("#appointment-date").datepicker({
    dateFormat: "dd/mm/yy",
    minDate: 0,
    changeMonth: true,
    changeYear: true
  });
});


// Function to populate the list of doctors based on the selected department
document.addEventListener("DOMContentLoaded", function () {
  const departmentDropdown = document.getElementById("department");
  const doctorListContainer = document.getElementById("doctor-list-container");
  const doctorUl = document.getElementById("doctor-ul");

  departmentDropdown.addEventListener("change", function () {
    const selectedDepartment = departmentDropdown.value;
    if (selectedDepartment !== "") {
      const doctors = [
        { name: "Dr. Alex", id: 1, department: "healthcare" },
        { name: "Dr. Helen", id: 2, department: "eyecare" },
        { name: "Dr. Alex Fugurseon", id: 3, department: "dentalsurgery" },
        { name: "Dr. Robert Smith", id: 4, department: "Healthcare" },
        { name: "Dr. Sharon Laura", id: 5, department: "dentalsurgery" },
        { name: "Dr. Andrea Jean", id: 6, department: "Eyecare" },
        { name: "Dr. Ryan James", id: 7, department: "Neurology" },
        { name: "Dr. Jennifier Doil", id: 8, department: "Neurology" },
        { name: "Dr. Carol Sandra", id: 9, department: "Pregnancy" },
        { name: "Dr. Shavana Brood", id: 10, department: "Dermatology" },
        { name: "Dr. Ena Dicrosa", id: 11, department: "Dermatology" },
        { name: "Dr. Johnson Melbourne", id: 12, department: "Checkup" },
        { name: "Dr. Daisy Gabriela", id: 13, department: "Dental Surgery" },
        { name: "Dr. Addison Smith", id: 14, department: "Checkup" },
        { name: "Dr. Aiken Ward", id: 15, department: "Childcare" },
        { name: "Dr. Ronnie Aaron", id: 16, department: "Childcare" },
        { name: "Dr. Sarah Taylor", id: 17, department: "Cardiology" },
        { name: "Dr. Babatunde Jon", id: 18, department: "Cardiology" },
      ];

      const filteredDoctors = doctors.filter(
        (doctor) => doctor.department === selectedDepartment
      );

      let doctorListHTML = "";
      filteredDoctors.forEach((doctor) => {
        doctorListHTML += `<li><input type="radio" name="doctor" value="${doctor.name}">${doctor.name}</li>`;
      });

      doctorUl.innerHTML = doctorListHTML;
      doctorListContainer.style.display = "block";
    } else {
      doctorUl.innerHTML = "";
      doctorListContainer.style.display = "none";
    }
  });
});


const paymentSection = document.getElementById("payment-section");
const paymentOptions = document.getElementById("payment-options");
const cardDetailsSection = document.getElementById("card-details-section");
const scanPaySection = document.getElementById("scan-pay-section");
const bufferIcon = document.querySelector(".buffer-icon");
const qrCodeImage = document.querySelector(".qr-code img");

// Function to show the payment section and select the appropriate payment method
function showPaymentSection() {
    const selectedOption = paymentOptions.value;

    // Show the corresponding payment method section
    switch (selectedOption) {
        case "credit-card":
        case "mastercard":
            cardDetailsSection.style.display = "block";
            scanPaySection.style.display = "none";
            break;
        case "scan-pay":
            cardDetailsSection.style.display = "none";
            scanPaySection.style.display = "block";
            break;
        default:
            cardDetailsSection.style.display = "none";
            scanPaySection.style.display = "none";
            break;
    }

    // Show the payment section
    paymentSection.style.display = "block";
}

// Function to handle the payment process
function handlePayment() {
    const selectedOption = paymentOptions.value;

    if (selectedOption === "scan-pay") {
        // Show buffer icon for 2 seconds before displaying the QR code
        bufferIcon.style.display = "block";
        setTimeout(() => {
            bufferIcon.style.display = "none";
            // Replace the QR code source with the actual image URL of the generated QR code
            qrCodeImage.src = "../images/qrcode.png";
        }, 2000);
    } else {
        // For other payment methods, show the card details form and pay button
        cardDetailsSection.style.display = "block";
        const payButton = document.createElement("button");
        payButton.innerText = "Pay";
        payButton.classList.add("pay-button");
        cardDetailsSection.appendChild(payButton);
    }
}

// Event listener for the book appointment button
const bookAppointmentBtn = document.getElementById("book-appointment-btn");
bookAppointmentBtn.addEventListener("click", () => {
    // Show buffer icon for approximately 5 seconds before showing the payment section
    bufferIcon.style.display = "block";
    setTimeout(() => {
        bufferIcon.style.display = "none";
        showPaymentSection();
    }, 1000);
});

// Event listener for the payment options select
paymentOptions.addEventListener("change", showPaymentSection);

// Event listener for the pay button
document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("pay-button")) {
        // Handle payment when pay button is clicked
        handlePayment();
    }
});