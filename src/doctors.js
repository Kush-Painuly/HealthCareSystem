
const bookAppointmentBtns = document.querySelectorAll('.appoint');

function redirectToDoctorInfo(doctorData) {
    const urlSearchParams = new URLSearchParams(doctorData);
    const params = urlSearchParams.toString();
    window.location.href = `../public/doctors_info.html?${params}`;
}

bookAppointmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const doctorData = {
            id: btn.dataset.doctorId,
            name: btn.dataset.doctorName,
            age: btn.dataset.doctorAge,
            bloodGroup: btn.dataset.doctorBloodGroup,
            specialization: btn.dataset.doctorSpecialization,
            experience: btn.dataset.doctorExperience,
            contact: btn.dataset.doctorContact
        };
        redirectToDoctorInfo(doctorData);
    });
});
