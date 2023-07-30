export default function Basket(): JSX.Element {
  return (
    <>
      <div className="basketText">
        <h1>Ваша корзина</h1>
      </div>
      <div className="container">
        <div className="hits"></div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="contact__title">
            <h2 className="contact__title-text">Оформить заказ</h2>
            <div className="line"></div>
          </div>
          <div className="content">
            <div className="form">
              <form action="_адрес для отправки_" method="GET" name="my_form">
                <label>
                  <span className="fio"> ФИО:</span> <br />
                  <input type="search" className="guest" />
                </label>
                <p></p>
                <label>
                  <span className="email"> E-mail:</span>
                  <br />
                  <input type="email" className="guest" />
                </label>
                <p></p>
                <label>
                  <span className="phone"> Телефон:</span>
                  <br />
                  <input type="search" className="guest" />
                </label>
                <p></p>
                <label>
                  <span className="date"> Дата доставки:</span>
                  <br />
                  <input type="date" className="guest" />
                </label>
                <p></p>
                <input type="submit" className="bottom1" value="Отправить" />
                <input type="submit" className="bottom2" value="Очистить" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
