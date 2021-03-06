import styled from "styled-components";

export const Container = styled.body`
  width: 100%;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const Main = styled.main`
  background-color: #008000;
  width: 100%;
  height: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionForms = styled.section`
  margin-top: 50px;
  width: 40%;
`;
export const Forms = styled.form`
  display: flex;
  align-items: flex-end;
`;
export const SectionProduct = styled.section`
  width: 80%;
  margin-top: 50px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
