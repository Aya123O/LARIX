window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "white"; // أو أي لون آخر
    } else {
        navbar.style.backgroundColor = "transparent"; // لجعل الخلفية شفافة
    }
};
