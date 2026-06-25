const filterButtons = document.querySelectorAll(".filter-button");
const skillCards = document.querySelectorAll(".skill-grid article");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    skillCards.forEach((card) => {
      const visible = selected === "all" || card.dataset.category === selected;
      card.hidden = !visible;
    });
  });
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thank you. Your message has been checked successfully.";
    contactForm.reset();
  });
}
