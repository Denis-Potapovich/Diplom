interface modal {
  modalStatus: boolean;
}

export const ModalWinMenu: React.FC<modal> = ({ modalStatus }) => {
  return (
    <>
      {modalStatus ? (
        <>
          <div className="modal-hamburger-window">
            <ul className="modal-hamburger-menu">
              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo1.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Женщинам</p>
              </li>

              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo2.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Обувь</p>
              </li>

              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo3.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Детям</p>
              </li>

              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo4.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Мужчинам</p>
              </li>

              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo5.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Дом</p>
              </li>

              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo6.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Красота</p>
              </li>

              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo7.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Аксессуары</p>
              </li>

              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo8.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Электроника</p>
              </li>

              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo9.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Игрушки</p>
              </li>

              <li className="modal-hamburger-list">
                <img
                  className="img-hamburger-menu"
                  src="assets/modal/logo10.svg"
                  alt=""
                />
                <p className="modal-hamburger-text">Продукты</p>
              </li>
            </ul>
          </div>

          <div className="darker-background"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
