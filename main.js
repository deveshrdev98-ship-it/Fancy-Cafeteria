// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// Booking button logic (MVP)
const bookingBtn = document.querySelector("#booking .cta");

if (bookingBtn) {
  bookingBtn.addEventListener("click", () => {
    alert(
      "📅 Booking Request Received!\n\nOur team will contact you shortly.\n(Call / WhatsApp integration coming soon)"
    );
  });
}


// Highlight event cards on hover (subtle Gen-Z effect)
const eventCards = document.querySelectorAll(".card");

eventCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});


// Navbar shadow on scroll (professional touch)
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});


// Footer year auto update (tiny but pro)
const footer = document.querySelector("footer p");
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} Funky Cafe. All Rights Reserved.`;
}
