function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form || form.dataset.bound === "true") return;

  form.dataset.bound = "true";

  const i18n = {
    sending: form.dataset.sending,
    success: form.dataset.success,
    error: form.dataset.error,
    unexpected: form.dataset.unexpected,
    redirectTo: form.dataset.redirect,
  };

  let alertContainer = document.getElementById("alert-container");
  if (!alertContainer) {
    alertContainer = document.createElement("div");
    alertContainer.id = "alert-container";
    alertContainer.className = "w-full max-w-lg mx-auto mt-4";
    form.insertAdjacentElement("afterend", alertContainer);
  }

  function showAlert(message, type = "success") {
    const color =
      type === "success"
        ? "bg-green-100 border border-green-300 text-green-800"
        : "bg-red-100 border border-red-300 text-red-800";

    alertContainer.innerHTML = `
      <div class="${color} px-4 py-3 rounded-lg shadow-md text-center">
        ${message}
      </div>
    `;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn?.disabled) return;

    submitBtn.disabled = true;
    showAlert(i18n.sending, "success");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        showAlert(i18n.success, "success");
        form.reset();

        setTimeout(() => {
          window.location.href = i18n.redirectTo;
        }, 2500);
      } else {
        showAlert(data?.error ?? i18n.error, "error");
      }
    } catch (err) {
      console.error(err);
      showAlert(i18n.unexpected, "error");
    } finally {
      submitBtn.disabled = false;
    }
  });
}

if (typeof window !== "undefined") {
  document.addEventListener("astro:page-load", initContactForm);
  document.addEventListener("astro:after-swap", initContactForm);
}
