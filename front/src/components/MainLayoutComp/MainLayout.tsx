import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import { HeaderComp } from "../HeaderComp/Header/HeaderComp";
import { ModalWinMenu } from "../ModalMenuWinComp/ModalWin";
import Contacts from "../FooterComp/Contacts/ContactsComp";
import Basement from "../FooterComp/Basement/BasementComp";
import { RegistrationModal } from "../ModalRegistrationComp/RegistrationComp";

import { User } from "../../interfaces/Modal_interfaces";

export default function MainLayout(): JSX.Element {
  const [menuModalState, setMenuModalState] = useState<boolean>(false);

  const [registrModalWindowStatus, setRegistrModalWindowStatus] =
    useState<boolean>(false);

  const [getUser, setUser] = useState<User>({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  return (
    <>
      <HeaderComp
        modalSetter={setMenuModalState}
        modalStatus={menuModalState}
        registrationSetter={setRegistrModalWindowStatus}
        registrationStatus={registrModalWindowStatus}
        getUser={getUser}
      ></HeaderComp>

      <Outlet></Outlet>

      <Contacts></Contacts>
      <Basement></Basement>

      {/* модальное окно меню */}
      <ModalWinMenu modalStatus={menuModalState}></ModalWinMenu>
      {/*  */}

      {/* модальное окно регистрации */}
      <RegistrationModal
        registrModalWindowStatus={registrModalWindowStatus}
        registratedUser={setUser}
        getUser={getUser}
      ></RegistrationModal>
      {/*  */}
    </>
  );
}
