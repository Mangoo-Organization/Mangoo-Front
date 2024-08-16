'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";


export default function Home() {
  return (
    <main className="principal">
    

      <Dropdown placeholder = 'Isso é placeholder '
                options={['item 1', 'item 2', 'item 3']} 
                title= ''
                onOptionClick={(option) => {
                  console.log(option)
                }}/>



    </main>
  );
}
