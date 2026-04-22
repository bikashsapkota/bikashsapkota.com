"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export function ActiveNav({ items }: { items: NavItem[] }) {
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 90;
        let nextActiveHref = "";

        for (const item of items) {
          const section = document.getElementById(item.href.slice(1));

          if (section && section.offsetTop <= scrollPosition) {
            nextActiveHref = item.href;
          }
        }

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          nextActiveHref = items[items.length - 1]?.href ?? nextActiveHref;
        }

        setActiveHref(nextActiveHref);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [items]);

  return (
    <div className="hidden items-center gap-6 text-sm md:flex">
      {items.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <a
            key={item.href}
            aria-current={isActive ? "location" : undefined}
            className={[
              "relative py-2 transition",
              "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-accent after:transition-transform",
              isActive
                ? "font-medium text-accent after:scale-x-100"
                : "text-muted hover:text-accent after:scale-x-0 hover:after:scale-x-100",
            ].join(" ")}
            href={item.href}
            onClick={() => setActiveHref(item.href)}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
