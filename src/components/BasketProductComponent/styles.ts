import styled from "styled-components";

export const MainDiv = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    gap: 100px;
  }

  .openClose {
    display: none;
  }

  div {
    position: absolute;
    top: 0;
    right: 0;

    background-color: gray;
    width: 400px;
    height: 600px;

    ul {
      width: 340px;
      gap: 50px;
      height: 540px;
      overflow-y: auto;
    }

    button {
      position: relative;
      bottom: 40px;
    }
  }
`;
