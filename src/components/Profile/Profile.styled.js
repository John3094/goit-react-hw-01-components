import styled from 'styled-components';

export const ProfilePage = styled.div`
  padding-top: 20px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 72px;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid;
  border-color: #d0d4eb;
  border-bottom: transparent;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
    
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 25px;
  line-height: 1.29;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin: 0;
  color: #808080;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  margin: 0;
  color: #808080;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid;
  border-color: #f9eaea;
  background-color: #eeeff4;
  margin: 0;
  padding: 0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
    
`;

export const Item = styled.li`
  padding: 26px;
`;

export const Label = styled.span`
  border: 1px solid;
  border-color: #f9eaea;
  background-color: #eeeff4;
  border-top: transparent;
  color: gray;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-family: serif;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 8px;
`;
