function sendMail(newsletter) {
    emailjs.send("service_lhl1yg5", "newsletter", {
        "to_name": newsletter.first_name.value,
        "to_email": newsletter.email_address.value
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
            location.reload();
        },
        function (error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
