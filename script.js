// 💌 Contact Form Toggle (existing animation)
const icon = document.querySelector(".loading i");
const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".container");

if (icon && closeBtn && container) {
  icon.addEventListener("click", () => {
    container.classList.add("change");
  });

  closeBtn.addEventListener("click", () => {
    container.classList.remove("change");
  });
}

// ✅ Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.querySelector(".submit-btn");
  const fields = document.querySelectorAll(".field");

  if (submitBtn && fields.length >= 3) {
    submitBtn.addEventListener("click", function () {
      const name = fields[0].value.trim();
      const email = fields[1].value.trim();
      const message = fields[2].value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        alert("❌ Please fill in all fields.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("❌ Enter a valid email address.");
        return;
      }

      if (message.length < 20) {
        alert("❌ Message must be at least 20 characters.");
        return;
      }

      alert("✅ Message sent successfully!");
      fields.forEach(field => field.value = "");
    });
  }

  // ❓ FAQ Toggle Functionality
  const questions = document.querySelectorAll(".question");

  questions.forEach((q) => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;

      // Toggle display
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.padding = "0";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "10px 0";
      }
    });
  });
});
