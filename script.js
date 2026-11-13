document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const result = document.getElementById("result");

      if (!name || !email || !message) {
        result.textContent = "Please complete all the fields.";
        return;
      }

      const subject = encodeURIComponent("Portfolio message from " + name);
      const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
      );

      result.textContent = "Opening your email application to send the message.";
      window.location.href = "mailto:dpmanish148@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
});
