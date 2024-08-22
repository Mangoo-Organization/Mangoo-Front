import style from 'styled-components'


export const  InputSimple = style.input<{extra?: boolean}>`
  height: 2.438rem;
  border: 1px;
  border-radius: 8px;
  border-color: #B9B7BE;
  padding: 5px 10px;
  font-family: var(--nunito);
  font-size: 14px;
  outline: none;
  width: ${props => props.extra ? '21.875rem' : '10rem'};
  cursor: pointer;
`;

 

