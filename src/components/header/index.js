import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderSearch,
  HeaderSearchContainer,
  HeaderMenuItems,
} from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={process.env.PUBLIC_URL + "/images/robinhood.svg"} alt="" />
      </HeaderLogo>
      <HeaderSearch>
        <HeaderSearchContainer>
          <input type="text" placeholder="Search" />
        </HeaderSearchContainer>
      </HeaderSearch>
      <HeaderMenuItems>
        <a href="/">Free Stocks</a>
        <a href="/">Portfolio</a>
        <a href="/">Cash</a>
        <a href="/">Messages</a>
        <a href="/">Free Stocks</a>
      </HeaderMenuItems>
    </HeaderContainer>
  );
}

export default Header;
