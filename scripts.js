
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


const elements = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});


  document.getElementById("contactForm").addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const errors = document.querySelectorAll("#contact .error");
    
    errors.forEach(e => e.style.display = "none");

    let valid = true;

    if (!name.value.trim()) {
      name.nextElementSibling.style.display = "block";
      valid = false;
    }
    if (!email.value.trim()) {
      email.nextElementSibling.style.display = "block";
      valid = false;
    }
    if (!message.value.trim()) {
      message.nextElementSibling.style.display = "block";
      valid = false;
    }

    if (!valid) e.preventDefault();
  });

