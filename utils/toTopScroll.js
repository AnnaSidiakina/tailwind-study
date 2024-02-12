const isBrowser = () => typeof window !== "undefined";

export function toTopScroll() {
  if (!isBrowser()) return;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
