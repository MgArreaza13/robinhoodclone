import React from "react";
import LineGraph from "../lineGraph";
import {
  NewsFeedContainer,
  NewsFeedWrapper,
  NewsFeedChartContainer,
  NewsFeedChart,
  NewsFeedPortfolio,
} from "./styles";
function NewsFeed() {
  return (
    <NewsFeedContainer>
      <NewsFeedWrapper>
        <NewsFeedChartContainer>
          <NewsFeedPortfolio>
            <h1>$114,656.0</h1>
            <p>+$44.63 (+0.04%) Today</p>
          </NewsFeedPortfolio>
          <NewsFeedChart>
            <LineGraph />
          </NewsFeedChart>
        </NewsFeedChartContainer>
      </NewsFeedWrapper>
    </NewsFeedContainer>
  );
}

export default NewsFeed;
