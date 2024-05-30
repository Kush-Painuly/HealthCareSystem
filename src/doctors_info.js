
document.addEventListener('DOMContentLoaded', () => {
    const doctorInfoContainer = document.querySelector('.doctor-info-container');
    const doctorImage = document.getElementById('doctor-image');
    const doctorName = document.getElementById('doctor-name');
    const doctorAge = document.getElementById('doctor-age');
    const doctorBloodGroup = document.getElementById('doctor-blood-group');
    const doctorSpecialization = document.getElementById('doctor-specialization');
    const doctorExperience = document.getElementById('doctor-experience');
    const doctorContact = document.getElementById('doctor-contact');

    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get('id');


    // Function to populate doctor information
    function populateDoctorInfo(doctorData) {
        doctorImage.src = `../images/odoc${doctorData.id}.jpg`;
        doctorName.textContent = doctorData.name;
        doctorAge.textContent = doctorData.age;
        doctorBloodGroup.textContent = doctorData.bloodGroup;
        doctorSpecialization.textContent = doctorData.specialization;
        doctorExperience.textContent = doctorData.experience;
        doctorContact.textContent = doctorData.contact;
        doctorFee.textContent = doctorData.Fee;
    }

    // Retrieve doctor information from URL parameters
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params) {
        populateDoctorInfo(params);
    }
});

// JavaScript code for handling the payment section

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
            qrCodeImage.src = "path/to/qr-code.png";
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



