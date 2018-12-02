// $FlowFixMe
import styled from 'styled-components';


export const DateInputContainer = styled.div`
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 5px 6px;
  display: inline-flex;
  overflow: hidden;
  font-size: 18px;
  position: relative;

  & input{
    outline: none;
    border: none;
    background-color: #fff;
    text-align: center;
    width: 20px;
    font-size: 14px;
  }
`;

export const CalendarIcon = styled.div`
  width: 60px;
  height: 28px;
  margin: auto auto auto 20px;
  cursor: pointer;
`;
