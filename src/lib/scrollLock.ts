let lockCount = 0;
let lockedScrollY = 0;

/**
 * Freeze background scroll position.
 * Horizontal shift is avoided by keeping a persistent scrollbar on `html`
 * (`overflow-y: scroll` in CSS), so locking does not change viewport width.
 */
export function lockBodyScroll() {
  if (lockCount === 0) {
    lockedScrollY = window.scrollY;

    const { body } = document;
    body.style.position = "fixed";
    body.style.top = `-${lockedScrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
  }

  lockCount += 1;
}

export function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0) return;

  const { body } = document;
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
  body.style.overflow = "";

  window.scrollTo({ top: lockedScrollY, left: 0, behavior: "instant" });
}
