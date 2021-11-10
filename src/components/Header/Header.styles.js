import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #168aad;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: #008000;
  font-family: Comic Sans MS, Comic Sans, cursive;
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 30px;
`;
export const Subtitle = styled.h2`
  font-size: 13px;
`;
export const Nav = styled.nav`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Link = styled.a`
  text-decoration: none;
  color: #008000;
  font-size: 13px;
`;
