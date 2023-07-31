export default function Viewed(): JSX.Element {
  return (
    <section className="viewed">
      <div className="container">
        <h2 className="viewed__text-title">Вы смотрели</h2>

        <div className="viewed__blocks">
          <div className="hit__block">
            <img className="hits__img" src="assets/hits/15.jpg" alt=""></img>
            <h3> 11,12 р.</h3>
            <h4>4-5 марта</h4>
            <p>ICHTHYONELLA ·Шампунь для </p>
            <p>★ 4 · 836 отзывов</p>
            <button className="btnBlockHits">В корзину</button>
          </div>

          <div className="hit__block">
            <img className="hits__img" src="assets/hits/11.jpg" alt=""></img>
            <h3> 6,27 р.</h3>
            <h4>6-7 марта</h4>
            <p>My Beauty Home · Чайник</p>
            <p>★ 4 · 1 392 отзывов</p>
            <button className="btnBlockHits">В корзину</button>
          </div>

          <div className="hit__block">
            <img className="hits__img" src="assets/hits/9.jpg" alt=""></img>
            <h3> 4,27 р.</h3>
            <h4>4-7 марта</h4>
            <p>LANBEL · Пудра. Пудра для лица.</p>
            <p>★ 5 · 675 отзывов</p>
            <button className="btnBlockHits">В корзину</button>
          </div>

          <div className="hit__block">
            <img className="hits__img" src="assets/hits/2.jpg" alt=""></img>
            <h3> 12,97 р.</h3>
            <h4>5-7 марта</h4>
            <p>Colorful · Ремешок для Amazfit </p>
            <p>★ 5 · 302 отзывов</p>
            <button className="btnBlockHits">В корзину</button>
          </div>

          <div className="hit__block">
            <img className="hits__img" src="assets/hits/1.jpg" alt=""></img>
            <h3> 14,27 р.</h3>
            <h4>5-7 марта</h4>
            <p>UNAX · Ремешок для Amazfit </p>
            <p>★ 5 · 120 отзывов </p>
            <button className="btnBlockHits">В корзину</button>
          </div>
        </div>
      </div>
    </section>
  );
}
