import { uid } from "uid";
import TovuqliDonar from "../assets/Tovuqli-donar.webp";
import PishloqliPizza from "../assets/Pishloqli-pitsa.webp";
import GoshtliMiks from "../assets/Goshtli-miks.webp";
import DonarPizza from "../assets/Donar-pitsa.webp";
import KartoshkaFri from "../assets/kartoshka-fri.webp";
import KartoshkaFri2 from "../assets/kartoshka-fri-qalin.webp";
import Pepperoni8 from "../assets/pepperoni-rollari8.webp";
import Pepperoni4 from "../assets/pepperoni-rollari4.webp";
import cola05 from "../assets/cocacola0.5.webp";
import cola1 from "../assets/cocacola1.webp";
import cola15 from "../assets/cocacola1,5.webp";
import fanta05 from "../assets/fanta0,5.webp";
import Fondan from "../assets/fondan.webp";
import LaymChizkeyk from "../assets/Laymli-chizkeyk.webp";
import Sinnamon8 from "../assets/sinnamon-rollari8.webp";
import Sinnamon16 from "../assets/sinnamon-rollari16.webp";

const productData = [
  [
    {
      id: uid(),
      price: 60.0,
      img: TovuqliDonar,
      title: "Tovuqli donar",
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 39.0,
      img: PishloqliPizza,
      amount: 1,
      title: "Pishloqli Pitsa",
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 90.0,
      img: GoshtliMiks,
      title: "Go'shtli miks",
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 60.0,
      img: DonarPizza,
      title: "Donar pitsa",
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
  ],
  [
    {
      id: uid(),
      price: 16.0,
      title: "Kartoshka fri",
      img: KartoshkaFri,
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 16.0,
      img: KartoshkaFri2,
      title: "'Po-derevenski' kartoshkasi",
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 25.0,
      img: Pepperoni8,
      title: "Pepperoni rollari 8dona",
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 17.0,
      img: Pepperoni4,
      title: "Pepperoni rollari 4dona",
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
  ],
  [
    {
      id: uid(),
      price: 10.0,
      title: "Coca-cola 0,5 l",
      img: cola05,
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 11.0,
      img: cola1,
      title: "Coca-cola 1 l",
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 18.0,
      title: "Coca-cola 1,5 l",
      img: cola15,
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 10.0,
      title: "Fanta 0,5 l",
      img: fanta05,
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
  ],
  [
    {
      id: uid(),
      price: 19.0,
      title: "Shokoladli fondan",
      img: Fondan,
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 22.0,
      title: "Laymli chizkeyk",
      img: LaymChizkeyk,
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 22.0,
      title: "sinnamon rollari 8 ta ",
      img: Sinnamon8,
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
    {
      id: uid(),
      price: 22.0,
      title: "sinnamon rollari 16 ta ",
      img: Sinnamon16,
      amount: 1,
      information:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    },
  ],
];
export default productData;
