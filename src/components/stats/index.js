import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  StatsContainer,
  StatsWrapper,
  StatsHeader,
  StatsContent,
  StatsRowContainer,
} from "./styles";
import axios from "axios";
import StatsRow from "../statsRow";
import { db } from "../../firebase";
import { MoreHoriz } from "@material-ui/icons";

const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const KEY_URL = `&token=c266ve2ad3iego1jrojg`;

const testData = [];

function Stats() {
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
    db.collection("myStocks").onSnapshot((snapshot) => {
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        promises.push(
          getStocksData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempData);
      });
    });
  };

  const getStocksData = (stock) => {
    return axios.get(`${BASE_URL}${stock}${KEY_URL}`).catch((error) => {
      console.error("Error", error.message);
    });
  };

  useEffect(() => {
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
    ];

    getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          testData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      console.log(testData);
      setStocksData(testData);
    });
  }, []);

  return (
    <StatsContainer>
      <StatsWrapper>
        {/* for out current stocks */}
        <StatsHeader>
          <p> Stocks</p>
        </StatsHeader>
        <StatsContent>
          <StatsRowContainer>
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                volume={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </StatsRowContainer>
        </StatsContent>
        {/* stocks we can buy */}
        <StatsHeader className="stats__lists">
          <p>Stocks</p>
        </StatsHeader>
        <StatsContent>
          <StatsRowContainer>
            {stocksData.length > 0 &&
              stocksData.map((stock) => {
                return (
                  <StatsRow
                    key={stock.name}
                    name={stock.name}
                    openPrice={stock.o}
                    price={stock.c}
                  />
                );
              })}
          </StatsRowContainer>
        </StatsContent>
      </StatsWrapper>
    </StatsContainer>
  );
}

export default Stats;
