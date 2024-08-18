'use client'
import * as Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="something">
      <NavBar></NavBar>
      <div className='ExtraButtons'>
        <p className='title'>Extra Buttons</p>
        <Button.Green extra>Button</Button.Green>
        <Button.DarkGreen extra>Button</Button.DarkGreen>
        <br/>
        <Button.Disable extra>Disable</Button.Disable>
        <Button.Focused extra>Focused</Button.Focused>
        <br/>
        <Button.Attention extra>Warning</Button.Attention>
      </div>

      <div className='NormalButtons'>
        <p className='title'>Small Buttons</p>
        <Button.Green>Button</Button.Green>
        <Button.DarkGreen>Button</Button.DarkGreen>
        <br/>
        <Button.Disable>Disable</Button.Disable>
        <Button.Focused>Focused</Button.Focused>
        <br/>
        <Button.Attention>Warning</Button.Attention>
      </div>

    </main>
  );
}
// 