import React from 'react';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';

const colorStyles = css`
  ${({theme, color}) => {
    const COLOR = theme.palette[color];
    return css`
      background: ${COLOR};
      &:hover,
      &:focus {
        background: ${lighten(0.2, COLOR)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${COLOR};
          background: none;
          border: 1px solid ${COLOR};
          &:hover {
            background: ${COLOR};
            color: white;
          }
          &:focus {
            color: white;
          }
        `}
    `;
}}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.5rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
};

const sizeStyles = css`
  ${({size}) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  
  /* 크기 */
  ${sizeStyles}
  
  /* 색상 */
  ${colorStyles}
  
  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
  
  ${fullWidthStyle}
`;

export default function Button({children, color, size, outline, fullWidth, ...rest}) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'black',
  size: 'medium',
};