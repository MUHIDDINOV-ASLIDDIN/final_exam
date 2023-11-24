import rasm1 from "../assets/rasm1.webp";
import rasm2 from "../assets/rasm2.webp";
import footer_logo from "../assets/footer-logo.svg";
import payme from "../assets/payme-footer.svg";
import uzcard from "../assets/uzcard-footer.svg";
import { FaFacebook } from "react-icons/fa";
import click from "../assets/click-footer.svg";
import humo from "../assets/humo-footer.svg";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import rasm3 from "../assets/rasm3.webp";
import rasm4 from "../assets/rasm4.webp";
import "./main.css";
import { useSelector } from "react-redux";
import "./HomeLayout.css";
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import getStore from "../utils/getStore";
import { Link } from "react-router-dom";
export default function main() {
  const [selects, setSelects] = useState("Yetkaazib berish");
  const [singleProduct, setsingleProduct] = useState(getStore("singleProduct"));
  const [basket, setBasket] = useState(getStore("basket"));
  const [modal, setModal] = useState(false);
  const { cartItems, amount } = useSelector((state) => state.product);

  const handleBasket = (id) => {
    const newItem = singleProduct.find((item) => item.id === id);
    setBasket([...basket, newItem]);
  };
  const handleproduct = (id) => {
    const newItem = cartItems[0].find((item) => item.id === id);
    setsingleProduct([...singleProduct, newItem]);
  };
  const handleproduct1 = (id) => {
    const newItem = cartItems[1].find((item) => item.id === id);
    setsingleProduct([...singleProduct, newItem]);
    setModal(!modal);
  };
  const handleproduct2 = (id) => {
    const newItem = cartItems[2].find((item) => item.id === id);
    setsingleProduct([...singleProduct, newItem]);
    setModal(!modal);
  };
  const handleproduct3 = (id) => {
    const newItem = cartItems[3].find((item) => item.id === id);
    setsingleProduct([...singleProduct, newItem]);
    setModal(!modal);
  };
  useEffect(() => {
    localStorage.setItem("singleProduct", JSON.stringify(singleProduct));
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [singleProduct, basket]);

  return (
    <main>
      <br />
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={rasm1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={rasm2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={rasm3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={rasm4} className="w-full" />
        </div>
        {/* <div id="item5" className="carousel-item w-full">
    <img src={uchLik} className="w-full" />
  </div> */}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-ghost">
          1
        </a>
        <a href="#item2" className="btn btn-ghost">
          2
        </a>
        <a href="#item3" className="btn btn-ghost">
          3
        </a>
        <a href="#item4" className="btn btn-ghost">
          4
        </a>
        {/* <a href="#item5" className="btn btn-ghost">5</a> */}
      </div>
      <div className="Small__main-header">
        <div className="Small__main-hero">
          <div className="Small__main-hero-choice">
            <select
              name=""
              id=""
              value={selects}
              onChange={(e) => setSelects(e.target.value)}
            >
              <option>Yetkazib berish</option>
              <option>Olib ketish</option>
            </select>
          </div>
          <div className="Small__main-hero-location">
            <h3>
              {selects === "Yetkazib berish"
                ? "Yetkazib berish manzilini tanlang"
                : "Filialni tanlang"}
            </h3>
            <FaPen />
          </div>
        </div>
        <br />
        <div className="Small__main-nav">
          <div>
            <ul>
              <li>
                <a href="/">Kombo</a>
              </li>
              <li>
                <a href="#pitsa">Pitsa</a>
              </li>
              <li>
                <a href="#Gazaklar">Gazaklar</a>
              </li>
              <li>
                <a href="#Ichimliklar">Ichimliklar</a>
              </li>
              <li>
                <a href="/">Salatlar</a>
              </li>
              <li>
                <a href="#Desertlar">Desertlat</a>
              </li>
              <li>
                <a href="/">Souslar</a>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/basket">
              <button className="cart">
                savatcha | <span>{amount}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div id="pitsa">
        <h1 className="products_title">Pitsalar</h1>
        <div className="main_pizza-item">
          {cartItems[0].map((item) => {
            const { id, title, price, img, information } = item;
            return (
              <div
                key={id}
                onClick={() => {
                  handleproduct(id);
                }}
              >
                <div className="main_pizza-items">
                  <img src={img} width="235" alt="donar-pizza" />
                  <h1>{title}</h1>
                  <p>{information}</p>
                  <br />
                  <p
                    className="pizza_item-price"
                    onClick={() => 
                      handleBasket(id)
                    }
                  >
                    {price} 000 so'mdan
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <div id="Gazaklar">
        <h1 className="products_title">Gazaklar</h1>
        <div className="main_pizza-item">
          {cartItems[1].map((item) => {
            const { id, title, price, img, information } = item;
            return (
              <div
                key={id}
                onClick={() => {
                  handleproduct1(id);
                }}
              >
                <div className="main_pizza-items">
                  <img src={img} width="235" alt="donar-pizza" />
                  <h1>{title}</h1>
                  <p>{information}</p>
                  <br />
                  <p className="pizza_item-price">{price} 000 so'mdan</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <div id="Ichimliklar">
        <h1 className="products_title">Ichimliklar</h1>
        <div className="main_pizza-item">
          {cartItems[2].map((item) => {
            const { id, title, price, img, information } = item;
            return (
              <div
                key={id}
                onClick={() => {
                  handleproduct2(id);
                }}
              >
                <div className="main_pizza-items">
                  <img src={img} width="235" alt="donar-pizza" />
                  <h1>{title}</h1>
                  <p>{information}</p>
                  <br />
                  <p className="pizza_item-price">{price} 000 so'mdan</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <div id="Desertlar">
        <h1 className="products_title">Desertlar</h1>
        <div className="main_pizza-item">
          {cartItems[3].map((item) => {
            const { id, title, price, img, information } = item;
            return (
              <div
                key={id}
                onClick={() => {
                  handleproduct3(id);
                }}
              >
                <div className="main_pizza-items">
                  <img src={img} width="235" alt="donar-pizza" />
                  <h1>{title}</h1>
                  <p>{information}</p>
                  <br />
                  <p className="pizza_item-price">{price} 000 so'mdan</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        <div>
          <ul>
            <li>
              <img src={footer_logo} width="250" alt="logo" />
            </li>
            <li>
              <p className="footer-item1">RAQAMGA QO'NG'IROQ QILING - 1174</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-items">
            <li>
              <a href="/">Biz haqimizda</a>{" "}
            </li>
            <li>
              <a href="/"> Ommaviy oferta</a>
            </li>
            <li>
              <a href="/">Maxfiylik siyosati</a>{" "}
            </li>
            <li>
              <a href="/">Halol setifikati</a>{" "}
            </li>
            <li>
              <a href="/">Restoranlar</a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-items">
            <li>
              <a href="/">Franchayzi</a>
            </li>
            <li>
              <a href="/">Bizning ish o'rinlarimiz</a>
            </li>
          </ul>
        </div>
        <div className="payments">
          <div>
            <img src={payme} width="100" alt="" />
            <img src={uzcard} width="50" alt="" />
          </div>
          <div>
            <img src={click} width="100" alt="" />
            <img src={humo} width="100" alt="" />
          </div>
        </div>
        <div>
          <p className="footer-text">Bizni kuzatib boring</p>
          <div className="icons">
            <FaFacebook className="facebook" />
            <FaInstagram className="insta" />
            <LiaTelegram className="telegram" />
          </div>
        </div>
      </footer>
      <br />
    </main>
  );
}
