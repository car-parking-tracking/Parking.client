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
  height: 48px;
  line-height: 24px;
  font-size: 16px;
  border-radius: 12px;
  padding: 12px 8px 12px 16px;
`

export const Option = styled.div`
  padding: 8px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  width: 442px;
`
export const DataList = styled.div`
  border-radius: 3px;
`
