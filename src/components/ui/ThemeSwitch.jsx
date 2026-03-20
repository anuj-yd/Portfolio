import React from 'react';
import styled from 'styled-components';

const ThemeSwitch = ({ checked, onChange, ariaLabel = 'Toggle theme' }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input
          className="toggle"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-label={ariaLabel}
        />
        <span className="slider" />
        <span className="card-side" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    --input-focus: #2d8cf0;
    --bg-color: #111;
    --bg-color-alt: #7e7e7e;
    --main-color: #fefefe;
    --input-out-of-focus: #111;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 36px;
    transform: translateX(calc(50% - 10px));
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    box-sizing: border-box;
    border-radius: 100px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: var(--input-out-of-focus);
    transition: 0.3s;
  }

  .slider:before {
    content: "🌙";
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    position: absolute;
    left: 2px;
    bottom: 1px;
    border: 2px solid var(--main-color);
    border-radius: 100px;
    background-color: var(--bg-color);
    color: var(--main-color);
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    line-height: 25px;
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
    transform: translateX(-32px);
  }

  .toggle:checked + .slider:before {
    content: "☀";
    transform: translateX(32px);
  }
`;

export default ThemeSwitch;
