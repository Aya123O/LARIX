const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableImages = document.querySelectorAll(".filterable-images .image");

// const moreInfo = document.querySelectorAll(".read-more-button")
// console.log(moreInfo)

const filter = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableImages.forEach((image) => {
    // image.classList.add("hide");
    image.style.display = "none";
    const valuesArray = image.dataset.name.split(", ");

    for (let i = 0; i < valuesArray.length; i++) {
      if (
        valuesArray[i] === e.target.dataset.name ||
        e.target.dataset.name === "all"
      ) {
        // image.classList.remove("hide");
        image.style.display = "block";
      }
    }
  });
};

filterButtons.forEach((button) => button.addEventListener("click", filter));




// for more info
const pBlog = document.querySelectorAll('.p-blog')
const buttonBlog = document.querySelectorAll('.button-blog')



const more = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus excepturi nihil voluptas laborum eiu Facere id sequi in nam accusamus, magni repellendus, incidunt, dolorum soluta labore distinctiveritatis."
const less = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus excepturi nihil ..."

let readMore1 = true;
let readMore2 = true;
let readMore3 = true;

const moreInfo = (e) => {
  if(e.target === buttonBlog[0]){
    console.log("1")
    if (readMore1) {
          pBlog[0].textContent =  more;     
          buttonBlog[0].textContent = "Show Less";
          readMore1 = false;
        } else {
          pBlog[0].textContent = less;
          buttonBlog[0].textContent = "Read More";
          readMore1 = true;
        }

  }
  else if(e.target === buttonBlog[1]){
    console.log('2')
    if (readMore2) {
      pBlog[1].textContent =  more;     
      buttonBlog[1].textContent = "Show Less";
      readMore2 = false;
    } else {
      pBlog[1].textContent = less;
      buttonBlog[1].textContent = "Read More";
      readMore2 = true;
    }
  }
  else{
    console.log('3')
    if (readMore3) {
      pBlog[2].textContent =  more;     
      buttonBlog[2].textContent = "Show Less";
      readMore3 = false;
    } else {
      pBlog[2].textContent = less;
      buttonBlog[2].textContent = "Read More";
      readMore3 = true;
    }
  }

}

buttonBlog.forEach((button) => button.addEventListener("click", moreInfo));
=======
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