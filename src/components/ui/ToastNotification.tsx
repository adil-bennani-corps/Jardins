"use client";

import { useEffect, useState } from "react";

interface ToastNotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

const styles = {
  success: "border-green-200 bg-green-50 text-green-800",
  error: "border-red-200 bg-red-50 text-red-800",
  info: "border-blue-200 bg-blue-50 text-blue-800",
};

export function ToastNotification({
  message,
  type = "info",
  duration = 4000,
  onClose,
}: ToastNotificationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-20 right-4 z-50 max-w-sm rounded-lg border px-4 py-3 shadow-lg transition-all duration-300 md:bottom-6 ${
        styles[type]
      } ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      role="alert"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">{message}</p>
        <button type="button" onClick={onClose} className="flex-shrink-0 opacity-60 hover:opacity-100" aria-label="Fermer">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
