import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `py-3 px-4 text-sm bg-green-500 text-white rounded-lg font-semibold transition-all duration-200 ${
                    disabled && 'opacity-25 text-gray-950'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
