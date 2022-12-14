import styled from "styled-components";

export const Table = styled.table`

  margin: auto;
  text-align: center;
  width: 700px;

  tbody {
    :nth-child(odd) {
    background-color: #ecf1f4;
  }
}
`;

export const Thead = styled.thead`
  color: #e7fefc;
  background: #00bcd5;
  height: 60px;
`;

export const ListItems = styled.tr`
  height: 50px;
  td {
    border: 1px solid #f4f4f4;
  }
`;

