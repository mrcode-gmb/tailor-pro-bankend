import { LabelHTMLAttributes } from 'react';

export default function InputLabel({ value, className = '', children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label {...props} className={`block font-medium text-slate-600 text-ellipsis`}>
            {value ? value : children}
        </label>
    );
}
