"use client";

import { useEffect } from "react";

interface KeyHandlers {
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onEscape?: () => void;
  onEnter?: () => void;
}

export function useKeyboard(handlers: KeyHandlers, isEnabled: boolean = true) {
  useEffect(() => {
    if (!isEnabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input or textarea
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
          if (handlers.onArrowLeft) {
            e.preventDefault();
            handlers.onArrowLeft();
          }
          break;
        case "ArrowRight":
          if (handlers.onArrowRight) {
            e.preventDefault();
            handlers.onArrowRight();
          }
          break;
        case "Escape":
          if (handlers.onEscape) {
            e.preventDefault();
            handlers.onEscape();
          }
          break;
        case "Enter":
          if (handlers.onEnter) {
            handlers.onEnter();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlers, isEnabled]);
}
