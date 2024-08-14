'use client'

import Button from "./components/Button/Button";
import styled from 'styled-components';

const DarkGreenButton = styled.button<{ $primary?: boolean; }>`
  background: ${props => props.$primary ? "#004741" : "white"};
  color: ${props => props.$primary ? "white" : "#000000"};

  font-family: var(--nunito);
  margin: 0.5em;
  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  padding: 10px 0;
  width: 135px;
`;

  

export default function Home() {
  return (
    <main className="principal">
      <h1 className="titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2 className="corpo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

     <DarkGreenButton $primary>Botão</DarkGreenButton>
     
    </main>
  );
}
// 