import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #001d3d;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: #008000;
  font-family: "Courier New", Courier, monospace;
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 30px;
`;
export const NavTitle = styled.a`
  text-decoration: none;
  color: #008000;
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
