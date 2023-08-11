import styled from 'styled-components'
import { Button } from '@components/atoms'

export const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 1.25rem;
  min-height: var(--parking-card-height);
  font-family: Raleway, sans-serif;
`
export const Title = styled.h2`
  margin-bottom: 0.75rem;
  line-height: 1.4;
  font-size: 1.25rem;
  font-weight: 600;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'liga' off;
`
export const InfoList = styled.ul`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`
export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.0625rem;
  line-height: 1;
`
export const InfoTitle = styled.h3`
  font-size: 0.875rem;
  color: #959595;
  font-weight: 500;
`
export const InfoDesc = styled.p`
  font-size: 1rem;
  color: #141414;
  font-variant-numeric: lining-nums proportional-nums;
  word-wrap: break-word;
  font-weight: 600;
`

export const FavouriteBtn = styled(Button)`
  padding: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  border: 0;
  background: var(--button-bg-default);
`
