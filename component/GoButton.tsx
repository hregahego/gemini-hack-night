'use client';
import React from "react";

interface GoButtonProps {
    to: string; // destination URL or path
    label?: string; // button text
    replace?: boolean; // use location.replace instead of assign
    className?: string; // optional CSS classes
    onNavigate?: () => void; // callback just before navigation
    ariaLabel?: string;
}

/**
 * Simple navigation button that navigates the browser to `to` when clicked.
 * Works in plain React apps (and in Next.js/React Router apps as a fallback).
 */
const GoButton: React.FC<GoButtonProps> = ({
    to,
    label = "Next",
    replace = false,
    className,
    onNavigate,
    ariaLabel,
}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            onNavigate?.();
        } catch {
            // ignore errors from callback
        }
        if (replace) {
            window.location.replace(to);
        } else {
            window.location.assign(to);
        }
    };

    return (
        <button
            type="button"
            className={className}
            aria-label={ariaLabel ?? label}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default GoButton;