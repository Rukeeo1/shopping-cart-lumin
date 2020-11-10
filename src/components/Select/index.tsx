import React from 'react';
import './index.scss'

export interface SelectInputProps {
  children: any;
  onChange?: any;
  label?: string;
  value?: string;
  name?: any;
  ref?: string;
  wrapperDiv?: any;
  disabled?: any;
}

export default function Select({
  children,
  onChange,
  label,
  value,
  name,
  wrapperDiv,
  disabled,
}: SelectInputProps) {
  return (
    <div className={wrapperDiv}>
      {label ? <label>{label}</label> : null}
      <span className="d-flex select align-items-center select">
        <select
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
        >
          {children}
        </select>
        <svg
          className="bi bi-chevron-down"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
}
