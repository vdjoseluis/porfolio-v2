export function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const header = document.querySelector("header");

  if (!menuToggle || !mobileMenu || !header) return;

  const open = () => {
    mobileMenu.classList.remove("hidden");
    menuToggle.setAttribute("aria-expanded", "true");
  };

  const close = () => {
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  // Toggle botón
  menuToggle.onclick = (e) => {
    e.stopPropagation();
    mobileMenu.classList.contains("hidden") ? open() : close();
  };

  // Click en links del menú
  mobileMenu.onclick = (e) => {
    if (e.target.closest("a")) close();
  };

  // Click fuera (listener global, DOM-safe)
  if (!window.__mobileOutsideBound) {
    document.addEventListener("click", (e) => {
      const header = document.querySelector("header");
      const mobileMenu = document.getElementById("mobile-menu");

      if (!header || !mobileMenu) return;
      if (mobileMenu.classList.contains("hidden")) return;
      if (!header.contains(e.target)) {
        mobileMenu.classList.add("hidden");
      }
    });

    window.__mobileOutsideBound = true;
  }
}
