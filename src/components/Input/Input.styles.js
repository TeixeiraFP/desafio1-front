import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  font-weight: 700;
  text-align: start;

  color: #001d3d;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  height: 40px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid #008000;
  padding: 0;
  font-size: 18px;
`;
