/**
 * Collapsing hamburger menu.
 * Toggles the primary nav open/closed and keeps aria-expanded in sync
 * for screen readers. Mobile-only behaviour — on desktop the nav is
 * always visible via CSS, so the toggle button is hidden.
 */

/**
 * Open or close the nav and reflect state on the toggle button.
 * @param {HTMLButtonElement} toggle - The hamburger button.
 * @param {HTMLElement} nav - The nav element to show/hide.
 * @param {boolean} open - True to open, false to close.
 * @returns {void}
 */
function setMenu(toggle, nav, open) {
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
}

/**
 * Wire up the hamburger toggle: click to flip, Escape to close,
 * and close automatically when a nav link is followed.
 * @returns {void}
 */
function initMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setMenu(toggle, nav, !open);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(toggle, nav, false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(toggle, nav, false);
  });
}

initMenu();
