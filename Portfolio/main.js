
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

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
    window.open("../images/Danijel_Lakic_Resume.pdf");
}


function openContact() {
    window.location.href = "#contact";
}


