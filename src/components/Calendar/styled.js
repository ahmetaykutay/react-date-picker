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
  color: ${props => (props.selected ? '#fff' : '333')};
  background-color: ${props => (props.selected ? '#FF876E' : 'transparent')};
  padding: 5px;
  border-radius: 3px;
  text-align: center;

  &:hover{
    background-color: #FF876E;
    color: #fff;
  }
`;

export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: ${props => (props.right ? '10px solid #333' : '10px solid transparent')};
    border-left: ${props => (props.left ? '10px solid #333' : '10px solid transparent')};
    cursor: pointer;
    &:hover{
      border-right: ${props => (props.right ? '10px solid #FF876E' : '10px solid transparent')};
      border-left: ${props => (props.left ? '10px solid #FF876E' : '10px solid transparent')};
    }
`;
