import style from 'styled-components'

const Button = style.button<{extra?: boolean}>`
  font-family: var(--nunito);
  margin: 0.5em;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  padding: 10px 0;
  color: var(--baby-powder);
  transition: 0.4s;
  font-size: ${props => props.extra ? '18px' : '16px'};
  width: ${props => props.extra ? '140px' : '130px'};
`;

export const Green = style(Button)`
  background-color: var(--jungle-green);

  &:hover{
    color: var(--caribbean-current);
    background-color: transparent;
    border: 1px solid var(--caribbean-current);
    cursor: pointer;
  }
`;

export const DarkGreen = style(Button)`
  background-color: var(--caribbean-current);

  &:hover{
    color: var(--caribbean-current);
    background-color: hsla(166, 66%, 42%, 0.3);
    border: 1px solid var(--caribbean-current);
    cursor: pointer;
  }
`;

export const Disable = style(Button)`
  background-color: var(--silver);
  cursor: not-allowed;
  transition: none;
`;

export const Focused = style(Button)`
  background-color: var(--sandy-brown);

  &:hover{
    background-color: hsla(25, 100%, 64%, 0.3);
    color: var(--sandy-brown);
    border: 1px solid var(--sandy-brown);
  }
`;

export const Attention = style(Button)`
  background-color: var(--bittersweet);

  &:hover{
    background-color: hsla(0, 86%, 67%, 0.3);
    color: var(--bittersweet);
    border: 1px solid var(--bittersweet);
  }
`;