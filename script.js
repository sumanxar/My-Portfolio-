// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Header shadow on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
    } else {
        header.style.boxShadow = "none";
    }

});


// Reveal sections while scrolling
const revealElements = document.querySelectorAll("section");

const reveal = () => {

    revealElements.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


// Hero button animation
const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.06)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

});


// Typing effect
const title = document.querySelector(".hero-text h1");

const text = "Professional Website Developer";

title.innerHTML = "";

let i = 0;

function typingEffect() {

    if (i < text.length) {

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 60);

    }

}

typingEffect();


// Portfolio hover glow
const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {

        project.style.boxShadow = "0 15px 35px rgba(56,189,248,.4)";

    });

    project.addEventListener("mouseleave", () => {

        project.style.boxShadow = "none";

    });

});


// Fade in cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.transition = "0.7s";

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => observer.observe(card));


// Back to top button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.transition = ".3s";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// Pay Now Button
const payBtn = document.getElementById("payBtn");

if (payBtn) {
  payBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("/api/create-order", {
        method: "POST"
      });

      const order = await response.json();

      const options = {
        key: "rzp_live_TK5Ba9jhlcy3Cx",
        amount: order.amount,
        currency: order.currency,
        name: "Suman",
        description: "Website Development Payment",
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful!");
          console.log(response);
        }
      };

      const rzp = new Razorpay(options);
      rzp.open();

    } catch (err) {
      alert("Payment failed.");
      console.error(err);
    }
  });
    }
