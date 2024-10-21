import style from 'styled-components'


export const  Input = style.input<{width?: string},{height:string}>

`
  height: ${props =>props.height}px;
  border: 1.2px solid var(--french-gray);
  border-radius: 8px;
  padding: 5px 10px;
  font-family: var(--nunito);
  font-size: 16px;
  outline: none;
  width: ${props =>props.width}px;
  cursor: pointer;
`;

