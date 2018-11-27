// $FlowFixMe
import styled from 'styled-components';

console.log(styled);

export const DateInputContainer = styled.div`
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 5px 6px;
  display: inline-flex;
  font-size: 14px;
  overflow: hidden;

  & input{
    outline: none;
    border: none;
    background-color: #fff;
    text-align: center;
    width: 19px;
  }
`;

export const CalendarIcon = styled.div`
  width: 60px;
  height: 26px;
  margin: auto auto auto 20px;
  cursor: pointer;
`;
