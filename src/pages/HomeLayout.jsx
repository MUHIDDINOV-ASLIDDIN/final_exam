import React from "react";
import { useSelector } from "react-redux";
import "./HomeLayout.css";

export default function HomeLayout() {
  const { data } = useSelector((state) => state.product);
  console.log(data);
  return (
    <div>
      
    </div>
  );
}

// {data[1].map((item) => {
//   const { id, title, price, img } = item;
//   return (
//     <div key={id}>
//       <div className="main_gazaklar-items">
//         {/* <img src={img} width="250" alt="donar-pizza" /> */}
//         <h1>{title}</h1>
//       </div>
//     </div>
//   );
// })}
