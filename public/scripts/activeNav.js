export function initActiveNav() {
  const links = document.querySelectorAll("nav a, #mobile-menu a");

  if (!links.length) return;

  const current = location.pathname.replace(/\/$/, "") || "/";

  links.forEach((a) => {
    try {
      const href = new URL(a.href, location.origin).pathname.replace(/\/$/, "") || "/";
      const isActive = href === current;

      a.classList.toggle("active", isActive);

      if (isActive) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    } catch {
      // ignore
    }
  });
}

if (typeof window !== "undefined") {
  const runNav = () => initActiveNav();

  document.addEventListener("astro:page-load", runNav);
  document.addEventListener("astro:after-swap", runNav);
}
