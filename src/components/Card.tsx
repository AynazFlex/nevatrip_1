import { FC, useRef, useEffect } from "react";
import { Iitem } from "../store/store";
import "./Card.scss";
import clock from "../assets/logo/clock.svg";
import Clock from "./Clock";
import rub from "../assets/logo/rub.png";

interface IProps {
  label_modif_cls?: string;
  btn_modif_cls: string;
}

const Card: FC<Iitem & IProps> = ({
  title,
  clocks,
  time,
  img,
  price,
  price_pier,
  list,
  label_modif_cls,
  btn_modif_cls,
  label,
}) => {
  const card = useRef<HTMLDivElement>(null);
  const more = useRef<HTMLSpanElement>(null);
  const k1 = useRef(list.length + 1);
  const k2 = useRef(clocks.length > 4 ? 4 : clocks.length);

  useEffect(() => {
    const animAdd = (cls: string, cls_anim: string) =>
      new Promise((res) => {
        const elem = card.current?.querySelector(`.${cls}`);
        if (elem) {
          elem.classList.add(cls_anim);
          elem.addEventListener("animationend", () => res(""), { once: true });
        } else res("");
      });

    animAdd("card__image-container>img", "anim1")
      .then(() => animAdd("card__image-container>span", "anim2"))
      .then(() => animAdd("card__title-clock", "anim1"))
      .then(() => animAdd("card__title-title", "anim2"))
      .then(async () => {
        for (let i = 1; i <= k1.current; i++) {
          await animAdd(`card__lists-container>li:nth-child(${i})`, "anim1");
        }
      })
      .then(async () => {
        for (let i = 1; i <= k2.current; i++) {
          await animAdd(`card__list-clocks>span:nth-child(${i})`, "anim1");
        }
      })
      .then(() =>
        Promise.all([
          animAdd("card__price-more>div", "anim2"),
          animAdd("card__more-info", "anim1"),
        ])
      )
      .then(() => card.current?.classList.add("finish"))
      .finally(() => more.current?.classList.add("open"));
  }, []);

  return (
    <div ref={card} className="card">
      <div className="card__image-container">
        <img src={img} alt="" />
        {label && <span className={label_modif_cls}>{label}</span>}
      </div>
      <div className="card__main-container">
        <div className="card__title">
          <div className="card__title-clock">
            <img src={clock} alt="clock" />
            <span>{time}</span>
          </div>
          <h3 className="card__title-title">{title}</h3>
        </div>
        <ul className="card__lists-container">
          {list.map((l, i) => (
            <li style={{ marginBottom: `${i * 2 + 9}px` }} key={i}>
              {l}
            </li>
          ))}
          <li>
            <Clock clocks={clocks} ref={more} />
          </li>
        </ul>
        <div className="card__price-more">
          <div>
            <span className="card__price">
              {price}
              <img src={rub} alt="" />
            </span>
            <span className="card__price-pier">{price_pier}</span>
          </div>
          <button className={`card__more-info ${btn_modif_cls}`}>
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
