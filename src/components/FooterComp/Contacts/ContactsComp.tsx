export default function Contacts(): JSX.Element {
  return (
    <article className="contacts">
      <div className="container">
        <div className="contacts__blocks">
          <div className="contacts__blocks-wrap">
            <div className="contact__block">
              <ul>
                <li className="wrap_title wrap">Покупатели</li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Способы оплаты
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Возврат товара
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Правила продажи товаров
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Условия доставки
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Возврат денежных средств
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Правила пользования торговой площадкой
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="wrap_title wrap">Партнерам</li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Продавайте на Wildberries
                  </a>
                </li>
              </ul>

              <ul>
                <li className="wrap_title wrap">Наши проекты</li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    WB Guru
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Трудоустройство
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Цифровые товары
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="wrap_title wrap">Компания</li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    О нас
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Контакты
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="wrap_title wrap">Мы в соцсетях</li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Вконтакте
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    Одноклассники
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="wrap_title wrap">Мобильные устройства</li>

                <li className="wrap">
                  <a className="contact__link" href="/#">
                    <img
                      className="img__contact"
                      src="assets/contact/appgallery.png"
                      alt=""
                    ></img>
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    <img
                      className="img__contact"
                      src="assets/contact/apple.png"
                      alt=""
                    ></img>
                  </a>
                </li>
                <li className="wrap">
                  <a className="contact__link" href="/#">
                    <img
                      className="img__contact"
                      src="assets/contact/google.png"
                      alt=""
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
