// $FlowFixMe
import styled from 'styled-components';


export const CalendarCon = styled.div`
  padding: 5px 0;
  user-select: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
`;

export const Td = styled.td`
  cursor: pointer;
  color: #333;
  padding: 5px;
  border-radius: 3px;
  text-align: center;

  &:hover{
    background-color: #FF876E;
    color: #fff;
  }
`;
