import React, { useEffect, useState } from "react";

import axios from "axios";

import { User } from "../../interfaces/Modal_interfaces";

interface modal {
  registrModalWindowStatus: boolean;
  registratedUser: React.Dispatch<React.SetStateAction<User>>;
  getUser: User;
}

export const RegistrationModal: React.FC<modal> = ({
  registrModalWindowStatus,
  registratedUser,
  getUser,
}): JSX.Element => {
  // изменение состояний 'окна благодарности' и окна создания нового аккаунта
  const [registrationNewAccount, setRegistrationNewAccount] =
    useState<boolean>(false);

  const [thankScreenStatus, setThankScreenStatus] = useState<boolean>(false);

  const [registeredStatus, setRegisteredStatus] = useState<boolean>(false);
  //

  // переменные, сохраняющие данные регистрирующегося/входящего пользователя
  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [newUser, setNewUser] = useState<User>({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  //

  //   сохранение данных в localstorage, чтобы была возможность заходить после обновления страницы
  useEffect(() => {
    // если данные под таким ключом в localStorage присутствуют, тогда записываем их в нужные переменные
    if (
      localStorage.getItem("user") !== undefined &&
      localStorage.getItem("user") !== null
    ) {
      // получаем строку
      const data = localStorage.getItem("user");
      // переводим ее в json формат
      const parsedData: User = JSON.parse(data!);

      // записываем
      setRegisteredStatus(true);
      registratedUser({
        name: parsedData.name,
        surname: parsedData.surname,
        email: parsedData.email,
        password: parsedData.password,
      });
    }
  }, [registratedUser]);

  //при нажатии на кнопку 'войти', асинхронно (получение данных через время, не синхронно) получаем данные через api
  const LogInProssess = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3001/data");
    const data: User[] = await response.json();

    
    for (let i = 0; i < data.length; i++) {
      // проходимся циклом по всему объему данных и проверяем каждый объект на то, равны ли данные полученные через api с теми,
      // что ввел человек
      if (data[i].email === user.email && data[i].password === user.password) {
        // если равны, тогда записываем именно этого человека в функцию (она принимается из вне)
        registratedUser(data[i]);
        // и сразу записываем в localStorage, для хранениия
        localStorage.setItem("user", JSON.stringify(data[i]));
      }
    }

    // обнуляем
    setUser({ email: "", password: "" });
    setRegisteredStatus(true);
  };

  // функция регистрации нового пользователя
  const FirstRegistration = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // создаем объект, в который пихаем данные, собранные из инпутов
    const settingNewUser: User = {
      name: newUser.name,
      surname: newUser.surname,
      email: newUser.email,
      password: newUser.password,
    };
    // после чего через axios кидаем post запрос на запись этих данных в таблицу
    axios
      .post("http://localhost:3001/data", settingNewUser)
      .catch((error: any) => {
        console.log(error);
      });

    // обнуление и изменение стилистики регистрации
    setNewUser({ name: "", surname: "", email: "", password: "" });
    setThankScreenStatus(true);
    setTimeout(() => {
      setThankScreenStatus(false);
      setRegistrationNewAccount(false);
    }, 2000);
  };

  return (
    <>
      {registrModalWindowStatus ? (
        <>
          <div className="modal-registration-window">
            {registrationNewAccount ? (
              <>
                {thankScreenStatus ? (
                  <div className="thanks-window-wrapper">
                    <div className="image-wrapper">
                      <div className="image">
                        <img
                          src="assets/navigation/smile_face.png"
                          alt="smile_face"
                        />
                      </div>
                    </div>
                    <div className="thanks-text-wrapper">
                      <h3>Регистрация прошла успешно! Перенаправление...</h3>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="modal-registration-title">
                      <h1>Регистрация</h1>
                    </div>
                    <div className="form-wrapper">
                      <form onSubmit={FirstRegistration}>
                        <div className="form-group">
                          <label htmlFor="1">Введите Ваше имя</label>
                          <input
                            type="text"
                            value={newUser.name}
                            className="form-control"
                            id="1"
                            aria-describedby="emailHelp"
                            placeholder="Имя"
                            onChange={(e) =>
                              setNewUser({ ...newUser, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="2">Введите Ваше фамилию</label>
                          <input
                            type="text"
                            value={newUser.surname}
                            className="form-control"
                            id="2"
                            aria-describedby="emailHelp"
                            placeholder="Фалимия"
                            onChange={(e) =>
                              setNewUser({
                                ...newUser,
                                surname: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="13">Введите Ваш Email</label>
                          <input
                            type="text"
                            value={newUser.email}
                            className="form-control"
                            id="3"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            onChange={(e) =>
                              setNewUser({ ...newUser, email: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="4">Придумайте пароль</label>
                          <input
                            type="password"
                            value={newUser.password}
                            className="form-control"
                            id="4"
                            placeholder="Пароль"
                            autoComplete="on"
                            onChange={(e) =>
                              setNewUser({
                                ...newUser,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Зарегистрироваться!
                        </button>
                      </form>
                    </div>
                    <div className="registration-new-account-button">
                      <button
                        className="btn btn-primary"
                        onClick={() => setRegistrationNewAccount(false)}
                      >
                        Войти
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                {registeredStatus ? (
                  <div className="person-entered-account-wrapper">
                    <div className="thanks-text-wrapper">
                      <h3>Добро пожаловать, {getUser.name}</h3>
                    </div>
                    <div className="logout-button">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setRegisteredStatus(false);
                          localStorage.removeItem("user");
                          registratedUser({
                            name: "",
                            surname: "",
                            email: "",
                            password: "",
                          });
                        }}
                      >
                        Выйти
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="modal-registration-title">
                      <h1>Вход</h1>
                    </div>

                    <div className="form-wrapper">
                      <form onSubmit={LogInProssess}>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Введите Email
                          </label>
                          <input
                            type="email"
                            value={user.email}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Введите пароль
                          </label>
                          <input
                            type="password"
                            value={user.password}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Пароль"
                            autoComplete="on"
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Войти
                        </button>
                      </form>
                    </div>

                    <div className="registration-new-account-button">
                      <button
                        className="btn btn-primary"
                        onClick={() => setRegistrationNewAccount(true)}
                      >
                        Зарегистрироваться
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/*  */}
          <div className="darker-background"></div>
          {/*  */}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
