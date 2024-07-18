import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button/Button";


export default function Home() {
  return (
    <main className="principal">
      <h1 className="titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2 className="corpo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <Button title="BOTÃO 1"/>
      <br />
      <button className="button-85">BOTÃO 2</button>
      <br />
      <button className="button-92">BOTÃO 3</button>
    </main>
  );
}
