import React from 'react';

export default function OrangeSquiggle({ className = "w-16 h-2.5" }) {
  return (
    <svg
      viewBox="0 0 100 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 3,6.5 C 20,9.5 38,9 56,6 C 72,3.5 86,5.5 97,4.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}