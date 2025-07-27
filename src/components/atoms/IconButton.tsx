import * as React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  className: string;
}

export function IconButton({ icon, className, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={`rounded p-2 hover:bg-gray-100 ${className}`}
      type="button"
    >
      {icon}
    </button>
  );
}
