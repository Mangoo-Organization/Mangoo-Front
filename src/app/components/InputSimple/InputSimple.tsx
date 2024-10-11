import style from 'styled-components'


export const  InputSimple = style.input<{extra?: boolean, atention?:boolean}>

`
  height: 2.438rem;
  border: ${props => props.atention ? '1.2px solid var(--bittersweet)' : '1.2px solid var(--french-gray)'};
  border-radius: 8px;
  padding: 5px 10px;
  font-family: var(--nunito);
  font-size: 16px;
  outline: none;
  width: ${props => props.extra ? '21.875rem' : '10rem'};
  cursor: auto;
`;


 

