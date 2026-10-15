const form = document.querySelector("#register-form");
const birthdate = document.querySelector("#birthdate");
const message = document.querySelector("#register-message");

// Kelajakdagi sanani tanlashga yo‘l qo‘ymaydi
if (birthdate) {
  birthdate.max = new Date().toISOString().split("T")[0];
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    message.textContent =
      "Ma’lumotlar tekshirildi. Akkaunt yaratish uchun server/API ulanishi kerak.";
  });
}

