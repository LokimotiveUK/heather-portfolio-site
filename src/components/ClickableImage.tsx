"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
};

export function ClickableImage({ src, alt, className, style, loading = "lazy" }: Props) {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  const ariaText = alt || "image";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full h-full p-0 m-0 border-0 bg-transparent text-left cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        aria-label={`View ${ariaText} full size`}
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={className}
          style={style}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={ariaText}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute top-6 right-6 md:top-8 md:right-12 z-10 group flex items-center gap-3 pl-4 pr-3 py-2 bg-background/70 backdrop-blur-md border border-outline-variant/30 text-on-surface hover:text-primary hover:border-primary focus-visible:text-primary focus-visible:border-primary focus-visible:outline-none transition-colors duration-300"
            aria-label="Close"
          >
            <span className="font-label text-[10px] tracking-[0.4em] uppercase">Close</span>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "24px" }}
              aria-hidden="true"
            >
              close
            </span>
          </button>

          <img
            src={src}
            alt={alt}
            className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain block"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
