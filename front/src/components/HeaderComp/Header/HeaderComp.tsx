import { useState, useMemo } from "react";

// link component for routing
import { Link } from "react-router-dom";
//

import { User } from "../../../interfaces/Modal_interfaces";

interface DataStructure {
  picture: string;
  price: string;
  title: string;
  rating: string;
  revies: string;
}

interface modal {
  modalSetter: React.Dispatch<React.SetStateAction<boolean>>;
  modalStatus: boolean;
  registrationSetter: React.Dispatch<React.SetStateAction<boolean>>;
  registrationStatus: boolean;
  getUser: User;
  data: DataStructure[];
}

export const HeaderComp: React.FC<modal> = ({
  modalSetter,
  modalStatus,
  registrationSetter,
  registrationStatus,
  getUser,
  data,
}) => {
  const [dataSearch, setDataSearch] = useState<string>("");

  // фильтрация товаров при поиске
  const filteredItems = useMemo(() => {
    if (dataSearch !== "" && data) {
      return data?.filter((item) => {
        return item.title.toLowerCase().includes(dataSearch.toLowerCase());
      });
    }
  }, [dataSearch, data]);

  return (
    <div className="main-header-wrapper">
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="location">
              <div className="country">
                <img
                  className="country__img"
                  src="assets/header/Без названия.png"
                  alt=""
                ></img>
                <p className="country__text">BYN</p>
              </div>

              <div className="city">
                <img
                  className="city__img"
                  src="assets/header/location.png"
                  alt=""
                ></img>
                <p className="city__text">Минск</p>
              </div>
            </div>

            <div className="header__links">
              <div className="header__ad-link">
                <a className="header_link-text" href="/#">
                  Продавайте на Wildberries
                </a>
              </div>

              <div className="reportProblem">
                <div className="report">
                  <span>Сообщить о проблеме</span>
                  <img
                    className="link__report-img"
                    src="assets/header/message.png"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="navigation">
        <div className="container">
          <div className="navigation__wrap">
            <div className="hamburger-menu">
              <input
                id="menu__toggle"
                type="checkbox"
                onClick={
                  modalStatus
                    ? () => {
                        modalSetter(false);
                        document.body.style.overflow = "auto";
                      }
                    : () => {
                        modalSetter(true);
                        document.body.style.overflow = "hidden";
                      }
                }
              />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>
            </div>

            <div className="Waldberries__img">
              <Link to=".">
                <img
                  className="Waldberries__img-wrap"
                  src="assets/navigation/wb-logo-spring.png"
                  alt=""
                ></img>
              </Link>
            </div>

            <div className="search-box">
              <input
                type="text"
                value={dataSearch}
                className="search-txt"
                placeholder="Я ищу..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDataSearch(e.target.value)
                }
              ></input>

              {dataSearch !== "" && (
                <div className="search-modal">
                  <>
                    {filteredItems!.map((e) => {
                      return (
                        <div>
                          <div className="adadad">
                            <img
                              className="img-search"
                              src={e.picture}
                              alt=""
                            ></img>
                            <p>{e.price}</p>
                          </div>
                          <div>
                            <span>{e.title}</span>
                          </div>
                        </div>
                      );
                    })}
                  </>
                </div>
              )}
            </div>

            <div className="user-block">
              <div
                className="entrance"
                onClick={
                  registrationStatus
                    ? () => {
                        registrationSetter(false);
                        document.body.style.overflow = "auto";
                      }
                    : () => {
                        registrationSetter(true);
                        document.body.style.overflow = "hidden";
                      }
                }
              >
                <div className="entrance-wrapper">
                  {getUser.name !== "" ? (
                    <>
                      <div className="person-name-wrapper">
                        <div className="user-img-wrapper">
                          <img src="assets/navigation/user.png" alt="user" />
                        </div>
                        <div className="user-name-wrapper">
                          <p className="entrance__text">{getUser.name}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        className="img__basket"
                        src="assets/navigation/user.png"
                        alt=""
                      ></img>
                      <p className="entrance__text">Войти</p>
                    </>
                  )}
                </div>
              </div>
              <div className="basket">
                <Link to="basket">
                  <img
                    className="img__basket"
                    src="assets/navigation/cart.png"
                    alt=""
                  ></img>
                  <p className="basket__text">Корзина</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
