'use client'
import * as Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";
import Counter from "./components/Counter/Counter";
import { InputSimple } from "./components/InputSimple/InputSimple";
import Checkbox from "./components/CheckBox/Checkbox";
import FirstModal from './components/Modals/FirstModal';
import SecondModal from './components/Modals/SecondModal';
import ThirdModal from './components/Modals/ThirdModal';
import FourthModal from './components/Modals/FourthModal';
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto";
import Information from "./information/page";
import StudentRegister from "./student-register/page";
import StudentLogin from "./student-login/page";
import TeacherRegister from "./teacher-register/page";
import TeacherLogin from "./teacher-login/page";
import OwnerLogin from "./owner-login/page";
import ForgotPassword from "./forgot-password/page";
import ForgotPasswordConfirm from "./forgot-password-confirm/page";
import ForgotPasswordChange from "./forgot-password-change/page";

export default function Home() {
  return (
    <ForgotPasswordConfirm></ForgotPasswordConfirm>
  );
}