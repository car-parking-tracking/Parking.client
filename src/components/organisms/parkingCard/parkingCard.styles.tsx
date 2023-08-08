import styled from 'styled-components'
import { Button } from '@components/atoms'

export const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 20px;
  height: var(--parking-card-height);
  display: flex;
  flex-direction: column;
  font-family: Raleway, sans-serif;
`
export const Title = styled.h2`
  margin-bottom: 12px;
  line-height: 1.4;
  font-size: 20px;
  font-weight: 600;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'liga' off;
`
export const InfoList = styled.ul`
  margin-bottom: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1px;
  line-height: 1;
  font-weight: 500;
`
export const InfoTitle = styled.h3`
  font-size: 14px;
  color: #959595;
`
export const InfoDesc = styled.p`
  font-size: 16px;
  color: #141414;
  font-variant-numeric: lining-nums proportional-nums;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Adress = styled(InfoDesc)`
  max-height: 32px;
  white-space: normal;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
`

export const FavouriteBtn = styled(Button)`
  padding: 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  border: 0;
`
