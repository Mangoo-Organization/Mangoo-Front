import style from 'styled-components'


export const  InputDate = style.input<{width?: string}>

`
  height: 2.438rem;
  border: 1.2px solid var(--french-gray);
  border-radius: 8px;
  padding: 5px 10px;
  font-family: var(--nunito);
  font-size: 16px;
  outline: none;
  width: ${props =>props.width};
  cursor: pointer;
`;

