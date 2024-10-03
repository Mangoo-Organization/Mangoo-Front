'use client'
import * as Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";
import Counter from "./components/Counter/Counter";
import { InputSimple } from "./components/InputSimple/InputSimple";
import Checkbox from "./components/CheckBox/Checkbox";
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto";
import Information from "./information/page";
import ModalContainer from "./components/Modals/ModalContainer";
import SidebarTeacher from "./components/SidebarTeacher/SidebarTeacher";
import DifficultyButton from "./components/DifficultyButton/DifficultyButton";

export default function Home() {
  return (
    <div className="sla">
      <DifficultyButton/>
    </div>
  );
}