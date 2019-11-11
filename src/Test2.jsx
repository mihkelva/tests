import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";

var clicks;

const Test2 = () => {
  return (
    <div>
      <div className={"description"}>
        Ülesanne 2:
        <p>
          Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>likes:</code> järel kuvama.
        </p>
      </div>

      <div style={{display:"flex", alignItems: "center"}}>
        <div>
          Likes: {clicks}
        </div>
        <TiHeartFullOutline />
        <div> <button onClick={clicks += 1}>Click me</button></div>
      </div>
    </div>
  );
};

export default Test2;
