import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";
import { InputAlternativa } from "./components";
import InputDefault from "./components/InputDefault/InputDefault";



export default function Home() {
  return (
    <main className="principal">
      <h1 className="titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2 className="corpo">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <Button title="BOTÃO 1"/>
      <br/>
      <br/>
      <br/>
      <InputAlternativa placeholder={'teste'}/>
      <br/>
      <br/>
      <br/>
      <SearchBar placeholder="Digite o nome da pesquisa"/>
      <br/>
      <br/>
      <br/>
      <InputDefault title="Isso é um titulo" placeholder="Isso é um placeholder"/>
    </main>
  );
}
