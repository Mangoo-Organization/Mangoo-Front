import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button/Button";
import InputAlternativa from "./components/InputAlternativa/InputAlternativa"


export default function Home() {
  return (
    <main className="principal">
      <h1 className="titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2 className="corpo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <Button title="BOTÃO 1"/>
      <br/>
      <br/>
      <br/>
      <InputAlternativa placeHolder={'teste'}/>
    </main>
  );
}
