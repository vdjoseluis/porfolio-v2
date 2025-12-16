export function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !mobileMenu) return;

  const open = () => {
    mobileMenu.classList.remove("hidden");
    menuToggle.setAttribute("aria-expanded", "true");
  };

  const close = () => {
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.onclick = () => {
    mobileMenu.classList.contains("hidden") ? open() : close();
  };

  mobileMenu.onclick = (e) => {
    if (e.target.closest("a")) close();
  };
}
