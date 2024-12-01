// function toggleMenu() {
//     const nav = document.querySelector('.nav ul');
//     nav.classList.toggle('active');
// }

// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// });

// // Initialize EmailJS
// (function () {
//     emailjs.init("OXfmcbJUZ-tv0NBaB"); // Replace with your public key
// })();

// // Send Mail Function
// function SendMail() {
//     var params = {
//         from_name: document.getElementById("fullName").value, // Change the ID based on your input field
//         email_id: document.getElementById("email_id").value,
//         subject: document.getElementById("Subject").value,
//         message: document.getElementById("message").value
//     };

//     // Replace with your EmailJS service ID and template ID
//     emailjs.send("service_r357hrl", "template_ypgguu3", params)
//         .then(function (res) {
//             alert("Success! Message sent with status: " + res.status);
//             document.getElementById("contact-form").reset(); // Reset the form after success
//         })
//         .catch(function (error) {
//             console.error("EmailJS Error:", error);
//             alert("Failed to send message. Please try again later.");
//         });
// }


//       src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
//  (function(){
//     emailjs.init({
//       publicKey: "OXfmcbJUZ-tv0NBaB",
//     });
//  })();