let activeFrame: number | null = null;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function smoothScrollTo(targetY: number, duration?: number) {
  if (activeFrame !== null) {
    window.cancelAnimationFrame(activeFrame);
    activeFrame = null;
  }

  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));
  const startY = window.scrollY;
  const distance = endY - startY;

  if (Math.abs(distance) < 1) return;

  const travelDuration =
    duration ?? Math.min(1000, Math.max(600, Math.abs(distance) * 0.5));
  const startTime = window.performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / travelDuration, 1);
    const nextY = startY + distance * easeOutCubic(progress);

    window.scrollTo(0, nextY);

    if (progress < 1) {
      activeFrame = window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, endY);
      activeFrame = null;
    }
  };

  activeFrame = window.requestAnimationFrame(step);
}

export function smoothScrollToElement(selector: string, offset = 80, duration?: number) {
  const target = document.querySelector(selector);
  if (!target) return;

  const y = target.getBoundingClientRect().top + window.scrollY - offset;
  smoothScrollTo(y, duration);
}
