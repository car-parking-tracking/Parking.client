import styled from "styled-components";

import { Input } from '../../atoms/input'

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  top: 9px;
  left: 165px;
  z-index: 10;
`
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
`
export const Search = styled(Input)`
  width: 442px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #191C30E5;
  padding: 12px 8px 12px 16px;
  height: 48px;
  border-radius: ${({ showOptions }: { showOptions: boolean }) => (showOptions ? '12px 12px 0 0' : '12px')};
`
export const Option = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  padding: 10px 8px;
  border: none;

  :hover {
    background-color: #F8FAFB;
  }
  
`
export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius:  0 0 12px 12px;
  padding: 8px;
  gap: 4px;
  width: 442px;
  font-weight: 400;
  color: #191C30E5;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.05), 0px 11px 11px 0px rgba(0, 0, 0, 0.04), 0px 25px 15px 0px rgba(0, 0, 0, 0.03);
`
export const Name = styled.span`
  color: rgba(25, 28, 48, 0.90);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  line-height: 24px;
`
export const Description = styled.span`
  color: rgba(27, 31, 59, 0.65);
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
`
