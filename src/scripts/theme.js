export function initTheme() {
  const html = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  const apply = () => {
    const isDark = html.classList.contains("dark");

    document.querySelectorAll("[data-theme-icon]").forEach((img) => {
      img.src = isDark ? "/icons/light-mode.svg" : "/icons/dark-mode.svg";
    });

    document.querySelectorAll("[data-theme-photo]").forEach((img) => {
      img.src = isDark ? "/foto-dark.png" : "/foto.png";
    });
  };

  // 1. Inicializar tema
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    html.classList.toggle("dark", storedTheme === "dark");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    html.classList.toggle("dark", prefersDark);
  }

  apply();

  // 2. Toggle manual (solo se enlaza una vez)
  if (toggle && !toggle.dataset.bound) {
    toggle.dataset.bound = "true";

    toggle.onclick = () => {
      const isDark = html.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      apply();
    };
  }

  // 3. Escuchar cambios del sistema SOLO si no hay elección manual
  if (!storedTheme && !window.__themeMediaBound) {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    media.addEventListener("change", (e) => {
      html.classList.toggle("dark", e.matches);
      apply();
    });

    window.__themeMediaBound = true;
  }
}
