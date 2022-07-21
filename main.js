//Navigation toogle

var toggle = document.querySelector('.toggle');
var navigation = document.querySelector('.navigation');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});


function closeNav() {
    navigation.classList.remove('active');
    toggle.classList.remove('active');
}


/////////////////////////////Function to stick the nav bar /////////////////////////////
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

/////////////////////////////Toggle menu/////////////////////////////
const icon = document.getElementsByClassName('icon')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

icon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});


//open resumeSida
function resumeSida() {
    window.open("../images/Danijel_Lakic_Resume.eng.pdf");
}


function openContact() {
    window.location.href = "#contact";
}