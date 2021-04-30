import React from "react";
import {
  StatsRowContainer,
  StatsRowIntro,
  StatsRowChart,
  StatsRowNumbers,
  StatsRowPrice,
  StatsRowPercentage,
} from "./styles";

function StatsRow({ name, openPrice, price, volume }) {
  const percentage = ((price - openPrice) / openPrice) * 100;

  const getModal = () => {};

  return (
    <StatsRowContainer onClick={getModal}>
      <StatsRowIntro>
        <h1>{name}</h1>
        <p>{volume && volume + " shares"}</p>
      </StatsRowIntro>
      <StatsRowChart>
        <img src={process.env.PUBLIC_URL + "/images/stock.svg"} height={16} />
      </StatsRowChart>
      <StatsRowNumbers>
        <StatsRowPrice>{price}</StatsRowPrice>
        <StatsRowPercentage>
          {" "}
          +{Number(percentage).toFixed(2)}%
        </StatsRowPercentage>
      </StatsRowNumbers>
    </StatsRowContainer>
  );
}

export default StatsRow;
