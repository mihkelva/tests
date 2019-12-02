import React from "react";
import test1Example from "../images/test1_example.png";

// eslint-disable-next-line
const ITEMS = [
  {
    name: "Galaxy S10+",
    price: 1000,
  },
  {
    name: "iPhone 11 Pro",
    price: 1200,
  },
  {
    name: "huawei p20 pro",
    price: 900,
  }
];

var total = 0;

const Test1 = () => {
  return (
    <div>
      <div className={"description"}>
        Ülesanne 1:
        <p>
          Lehel tuleb kuvada kõik tooted muutujas <code>ITEMS</code>.
          Iga toote kohta peab olema nimi ja hind.
          Iga toode peab olema uuel real.
        </p>
        <div>Näiteks:</div>
        <img style={{width: 200}} src={test1Example}/>
      </div>
      <div>
        {/*fetch(ITEMS).then(res =>{res.json()});*/}
        <div className={"item_title"}>{this.ITEMS.name}</div>
        <div className={"item_price"}>{this.ITEMS.price}</div>
      </div>
      <div><span className={"bold"}>Summa kokku:</span> ITEMS.forEach(function(total) {total += ITEMS.price},0)</div>
    </div>
  );
};


export default Test1;
