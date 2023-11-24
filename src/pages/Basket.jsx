import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeItem } from "../slice/ProductSlice";
import getStore from "../utils/getStore";
import "../../src/index.css";
import { useState } from "react";

export default function Basket() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="basket__items">
      {getStore("singleProduct").map((i) => (
        <div className="basket__item1" key={i.id}>
          <div className="basket__item1-info">
            <img src={i.img} width="150" alt="img" />
            <h2>{i.title}</h2>
          </div>
          <div className="basket__item1-count">
            <div>
              <button
                className="basket__item1-inc"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                {" "}
                +
              </button>
              <p className="basket__item1-count_p">{count}</p>
              <button
                className="basket__item1-dec"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </button>
            </div>
            <p className="basket__item1-price">{i.price} 000 so'm</p>
          </div>
        </div>
      ))}
      <div className="form__section">
        <form action="">
          <input type="text" placeholder="Promokod kiritish" name="" id="" />
          <button>Qo'llash</button>
        </form>
        <br />
        <br />
        <div className="form__section-items">
          <div className="form__section-item">
            <h2>Umumiy narx</h2>
            <h2>price</h2>
          </div>
          <button className="form__section-items-btn">Keyingisi</button>
        </div>
      </div>
    </div>
  );
}
