export default function Catalog(): JSX.Element {
  return (
    <article className="catalog">
      <div className="container">
        <div className="catalog__wrap">
          <div className="catalog__photo">
            <a className="catalog__photo-link" href="/#">
              <img
                className="catalog__img"
                src="assets/catalog/1.jpg"
                alt=""
              ></img>
            </a>
          </div>

          <div className="catalog__photo">
            <a className="catalog__photo-link" href="/#">
              <img
                className="catalog__img"
                src="assets/catalog/2.jpg"
                alt=""
              ></img>
            </a>
          </div>

          <div className="catalog__photo">
            <a className="catalog__photo-link" href="/#">
              <img
                className="catalog__img"
                src="assets/catalog/3.jpg"
                alt=""
              ></img>
            </a>
          </div>

          <div className="catalog__photo">
            <a className="catalog__photo-link" href="/#">
              <img
                className="catalog__img"
                src="assets/catalog/4.jpg"
                alt=""
              ></img>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
