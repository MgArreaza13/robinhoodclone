import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import styled from "styled-components";
import Header from "./components/header";
import NewsFeed from "./components/newsFeed";
import Stats from "./components/stats";

function App() {
  return (
    <div className="app">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <AppBody>
        <AppContainer>
          <NewsFeed />
          <Stats />
        </AppContainer>
      </AppBody>
    </div>
  );
}

export default App;

const HeaderContainer = styled.div``;

const AppBody = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
`;

const AppContainer = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  padding-left: 48px;
  padding-right: 48px;
`;
