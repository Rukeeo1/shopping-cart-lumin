import React from 'react';
import Spinner from 'assets/svgs/loader.svg'
import './index.scss';

interface IButtonProps {
  textContent: string;
  buttonStyle?: string;
  handleClick?: Function;
  disabled?: boolean;
  type?: any;
  iconRight?: string;
  iconLeft?: string;
  loading?: boolean;
}

export default function Button({
  textContent,
  buttonStyle,
  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {},
  disabled = false,
  iconLeft,
  iconRight,
  loading = false,
  type,
}: IButtonProps) {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`btn ${buttonStyle}`}
      disabled={disabled}
      type={type}
    >
      {loading ? (
        <span>{<img src={Spinner} alt="spinner" width="20px" />}</span>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          {iconLeft && (
            <span className="pr-2 btn__icon">
              <img src={iconLeft} alt="icon" />
            </span>
          )}
          <span>{textContent}</span>
          {iconRight && (
            <span className="ml-2">
              <img src={iconRight} alt="icon" />
            </span>
          )}
        </div>
      )}
    </button>
  );
}
