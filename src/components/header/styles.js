import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  color: white;
`;
export const HeaderLogo = styled.div`
  margin-left: 48px;
  > img {
    width: 25px;
  }
`;
export const HeaderSearch = styled.div`
  display: flex;
  height: 40px;
  padding: 10px;
  align-items: center;
`;

export const HeaderSearchContainer = styled.div`
  height: 20px;
  border: 1px solid #31363a;
  border-radius: 4px;
  width: 375px;

  > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    margin-right: 5px;
    outline: 0;
    color: white;
  }
`;

export const HeaderMenuItems = styled.div`
  margin-left: 48px;
  margin-right: 48px;

  >a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 0 10px;
    &:hover {
      color: #5AC53B;
    }

  }
`;
