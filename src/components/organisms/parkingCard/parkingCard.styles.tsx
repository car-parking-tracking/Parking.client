import styled from 'styled-components'
import { Button } from '@components/atoms'

export const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 1.25rem;
  min-height: var(--parking-card-height);
  font-family: Raleway, sans-serif;
`
export const Title = styled.h2`
  font-size: 1rem;
  color: var(--new-dark);
  font-weight: 600;
  font-style: normal;
  line-height: normal;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'liga' off;
  margin-bottom: 0.4375rem;

  @media (max-width: 48rem) {
    font-size: 1.125rem;
    font-weight: 700;
  }
`
export const InfoList = styled.ul`
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (max-width: 48rem) {
    gap: 0.5rem;
  }
`
export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
`
export const InfoDesc = styled.p`
  font-size: 1rem;
  color: var(--new-dark);
  font-variant-numeric: lining-nums proportional-nums;
  word-wrap: break-word;
  font-weight: 500;
  line-height: 1.5rem;
`
export const InfoCost = styled(InfoDesc)`
  color: var(--new-grey);
  margin-bottom: 0.25rem;
`
export const FavoriteBtn = styled(Button)`
  width: 100%;
  border-radius: 0.75rem;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`
export const PriceInfo = styled.div`
  display: flex;
`
export const TimeRange = styled(InfoDesc)`
  width: 7.8125rem;
  height: 1.5rem;
`

export const Place = styled.span`
  color: var(--new-dark);
`
export const DeleteBtn = styled(FavoriteBtn)``
export const Price = styled(InfoDesc)``
