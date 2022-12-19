import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  width: 300px;
  height: 80px;
  margin-top: 15px;
  align-items: center;
  background-color: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin: 15px;
  border-radius: 50%;
  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  border-radius: 10px;
  width: 80px;
  padding: 5px;
`;

export const Name = styled.p`
  font-family: serif;
  font-size: 25px;
`;
