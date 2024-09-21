window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "white"; // أو أي لون آخر
    } else {
        navbar.style.backgroundColor = "transparent"; // لجعل الخلفية شفافة
    }
};
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Fetching form data
    const name = document.getElementById('validationCustom01').value;
    const username = document.getElementById('validationCustomUsername').value;
    const subject = document.getElementById('validationCustom03').value;
    const message = document.getElementById('exampleFormControlTextarea1').value;
    
    // Validate that the fields are not empty
    if (!name || !username || !subject || !message) {
      showToast("All fields are required!", "error");
      return;
    }

    // Prepare data to send
    const data = {
      firstName: name,
      username: username,
      subject: subject,
      message: message
    };

    // Send data to API
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      // Display success message using Toastify
      showToast("Form submitted successfully!", "success");
      console.log(result); // To show the result in the console
    })
    .catch(error => {
      // Display error message using Toastify
      showToast("Error submitting form. Try again.", "error");
      console.error(error);
    });
  });

  // Function to display Toastify notifications
  function showToast(message, type) {
    Toastify({
      text: message,
      duration: 1000,
      gravity: "top", 
      position: "right", 
      backgroundColor: type === "success" ? "green" : "red",
      close: true
    }).showToast();
  }