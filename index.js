const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
    element.addEventListener('click', () => {
        
        elements.forEach((el) => el.parentNode.classList.remove('active'));

       
        element.parentNode.classList.add('active');
       
    });
});

const card = document.getElementById('mycard');


card.addEventListener('click', function() {

  card.style.background = 'white';
});
