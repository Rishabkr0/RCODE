function sendMail(){
    let params = {
        fullName: document.getElementById("fullName").value,
        contactNumber: document.getElementById("contactNumber").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        serviceType: document.getElementById("serviceType").value,
        projectDescription: document.getElementById("projectDescription").value,
    }
    emailjs.send("service_k4cdatn","template_qjzyqhk",params).then(alert("Success! We will contact you soon."));

}