import styled from "styled-components";

export const StatsRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 0 24px;
  cursor: pointer;
  :hover {
    background-color: #31363A;
  }
`

export const StatsRowIntro = styled.div`
  h1 {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 2px;
    text-align: left;
  }

  p {
    font-size: 12px;
  }

`

export const StatsRowChart = styled.div`
  padding: 0 10px;
`

export const StatsRowNumbers = styled.div`
  text-align: right;
  font-size: 12px;
  font-weight: 500;

`

export const StatsRowPrice = styled.p`
  padding-bottom: 4px;
`

export const StatsRowPercentage = styled.p`
  color: #5AC53B;
`



