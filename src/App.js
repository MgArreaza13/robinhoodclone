import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import styled from 'styled-components';
import Header from './components/header';

function App() {
  return (
    <div className="app">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
    </div>
  );
}

export default App;


const HeaderContainer = styled.div``
