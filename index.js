window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "white"; 
    } else {
        navbar.style.backgroundColor = "transparent"; 
    }
};
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const spinnerOverlay = document.getElementById('spinnerOverlay');
  spinnerOverlay.style.display = 'flex'; // عرض spinner

  // Fetching form data
  const name = document.getElementById('validationCustom01').value;
  const username = document.getElementById('validationCustomUsername').value;
  const subject = document.getElementById('validationCustom03').value;
  const message = document.getElementById('exampleFormControlTextarea1').value;

  // Validate that the fields are not empty
  if (!name || !username || !subject || !message) {
    showToast("All fields are required!", "error");
    spinnerOverlay.style.display = 'none'; 
    return;
  }

  const data = {
    firstName: name,
    username: username,
    subject: subject,
    message: message
  };

  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    showToast("Form submitted successfully!", "success");
    
  })
  .catch(error => {
    showToast("Error submitting form. Try again.", "error");
    
  })
  .finally(() => {
    spinnerOverlay.style.display = 'none'; 
   
    document.getElementById('validationCustom01').value = '';
    document.getElementById('validationCustomUsername').value = '';
    document.getElementById('validationCustom03').value = '';
    document.getElementById('exampleFormControlTextarea1').value = '';
  });
});

// Function to display Toastify notifications
function showToast(message, type) {
  Toastify({
    text: message,
    duration: 2000, // مدة ظهور الـ Toast
    gravity: "top",
    position: "right",
    backgroundColor: type === "success" ? "green" : "red",
    close: true
  }).showToast();
}



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
function toggleMargin() {
  const container = document.querySelector('.container1');
  if (window.innerWidth <= 992) { 
    if (container.style.marginTop === '500px') {
        container.style.marginTop = '200px'; 
    } else {
        container.style.marginTop = '500px'; 
    }
} else {
  if (container.style.marginTop === '500') {
    container.style.marginTop = '100px';  
}
}
  
}