/* import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(
  ({ request, redirect }, next) => {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      const langHeader = request.headers.get("accept-language") ?? "";

      const lang = langHeader.startsWith("en")
        ? "en"
        : langHeader.startsWith("it")
        ? "it"
        : "es";

      return redirect(`/${lang}`, 302);
    }

    return next();
  }
);
 */